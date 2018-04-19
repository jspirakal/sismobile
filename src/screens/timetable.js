import React, { Component } from 'react';
import { Container, Header, Content,Body,Card,Button, CardItem, Text, Icon, Right } from 'native-base';
import Stl from "../extra/style"
import TimeTableItem from "../components/timetableItem";
import { url } from '../components/credentrial';
export default class Application extends React.Component {
    constructor(props){
      super(props);
      this.state={
      timetable:[],
      app:''
    }
    };
    _download(){}

    _fetch(){
      fetch(`${url}/getalltt`, {
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
          this.setState({timetable:obj});
            this.setState({loading:'off'});
            this.setState({app:'loaded'});                    
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
  render() {
    let TimeTableItems;
    if(this.state.app==='loaded')
    {
      TimeTableItems=this.state.timetable.map(t=>{
            return(
                <TimeTableItem onPress={this._download.bind(this)} key={t._id} tt={t}/>
            )
        });
    }
    return (
      <Container style={Stl.padding_10}>
      <Content>
         {TimeTableItems}
         </Content>
         
    </Container>
    );
  }
}
