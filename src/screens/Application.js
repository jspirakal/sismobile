import React, { Component } from 'react';
import {Alert, Text, ScrollView, RefreshControl } from "react-native";
import { Container,  Content,Button } from 'native-base';
import Stl from "../extra/style";
import ApplicationItem from "../components/applicationItem";
import { url } from '../components/credentrial';
export default class Application extends Component {
    constructor(props){
      super(props);
      this.state={
      applications:[],
      app:'',
      refreshing: false,
    }
    };
    _fetch(){
      fetch(`${url}/getapplications/${this.props.roll}`, {
        method: 'GET',
        headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization':`Token ${this.props.token}`
        }
      })
     .then((res) =>{
      if (res.status === 200) {
        res.json()
        .then( (obj) => {
            console.log(obj);
            this.setState({applications:obj});
            this.setState({loading:'off'});
            this.setState({app:'loaded'});    
            this.setState({refreshing: false});      
          })
      
      } else{
      console.warn('error');         
      }
     })
     .catch((error) => {
        console.warn('Network Error');
     })
    }
    componentDidMount(){
      this._fetch();
    }
    _sendApp(){
      this.props.sendapp();
    }
    showReply(id){
        fetch(`${url}/getreply/${id}`, {
          method: 'GET',
          headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization':`Token ${this.props.token}`
          }
        })
       .then((res) =>{
        if (res.status === 200) {
          res.json()
          .then( (obj) => {
              Alert.alert(
                obj.title,
                obj.body,
                [
                  {text: 'OK'},
                ],
                { cancelable: true }
              )
              // this.setState({applications:obj});
              // this.setState({loading:'off'});
              // this.setState({app:'loade/d'});                    
            })
        
        } else{
        console.warn('error');         
        }
       })
       .catch((error) => {
          console.warn('Network Error');
       })

    }
    _onRefresh() {
      this.setState({refreshing: true});
      this._fetch()
    }
  render() {
    let ApplicationItems;
    if(this.state.app==='loaded')
    {
        ApplicationItems=this.state.applications.map(app=>{
            // if(app.status==1){
              // app.status='replied'
            // }
            // else{
              // app.status='pending'
            // }
            return(
                <ApplicationItem showReply={this.showReply.bind(this) }key={app._id} app={app}/>
            )
        });
    }
    return (
      <Container>
      <ScrollView 
      refreshControl={
        <RefreshControl
        tintColor={'black'}
        colors= {['black']}
        refreshing={this.state.refreshing}
        onRefresh={this._onRefresh.bind(this)}
      />}
      >
      <Content style={{padding:10}}>
      <Button block style={{marginTop:20,marginBottom:20}} onPress={this._sendApp.bind(this)} >
        <Text>Send New Application</Text>
      </Button>
        {ApplicationItems}
      </Content>
      </ScrollView>
    </Container>
    );
  }
}
