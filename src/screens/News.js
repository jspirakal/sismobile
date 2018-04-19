import React, { Component } from 'react';
import { ScrollView, Text, RefreshControl } from 'react-native';
import { Container, Header, Content,Body,Card, CardItem, Icon, Right } from 'native-base';
import Stl from "../extra/style";
import NewsItem from "../components/newsItem";
import { url } from '../components/credentrial';
export default class Application extends React.Component {
    constructor(props){
      super(props);
      this.state={
      news:[],
      app:'',
      refreshing:false
    }
    };
    _fetch(){
      fetch(`${url}/getnews`, {
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
            this.setState({news:obj});
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
    _onRefresh() {
      this.setState({refreshing: true});
      this._fetch();
    }
  render() {
    let NewsItems;
    if(this.state.app==='loaded')
    {
        NewsItems=this.state.news.map(news=>{
            return(
                <NewsItem key={news._id} news={news}/>
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
        {NewsItems}
      </Content>
      </ScrollView>
    </Container>
    );
  }
}
