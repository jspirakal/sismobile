import React, { Component } from 'react';
import { Container, Header, Content,Body,Card, CardItem, Text, Icon, Right } from 'native-base';
import Stl from "../extra/style";
import NewsItem from "../components/newsItem";
import { url } from '../components/credentrial';
export default class Application extends React.Component {
    constructor(props){
      super(props);
      this.state={
      news:[],
      app:''
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
      <Content style={{padding:10}}>
        {NewsItems}
      </Content>
    </Container>
    );
  }
}
