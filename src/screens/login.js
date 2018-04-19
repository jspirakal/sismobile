import React, { Component } from 'react';
import {StyleSheet,View,Text, AsyncStorage,} from "react-native";
import { Container, Header, Content, Form,Button,Item, Input, Label,Root } from 'native-base';
import { StackNavigator,NavigationActions } from "react-navigation"
import Home from './home'
import { url } from '../components/credentrial';
// import resetToHome from "../extra/navigator";

export const resetToHome = NavigationActions.reset({
  index: 0,
  key: null,
  actions: [
    NavigationActions.navigate({routeName: 'Home'}),
  ],
});
export default class Login extends Component {
  
  constructor(props){
    super(props);
    this.state={
      rollno:'',
      password:'',
      error:''
    }
  }
  _login(){
    fetch(`${url}/login`, {
      method: 'post',
      body:JSON.stringify({'password':this.state.password,'rollno':this.state.rollno}),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then( (res) => {
      if (res.status === 500) {
        res.json()
        .then( (obj) => {
            this.setState({
              error:obj
            })
        })
      } else if (res.status === 200) {
        res.json()
        .then( (obj) => {
          if(obj.user=='student'){
            AsyncStorage.setItem('token',obj.token);
            AsyncStorage.setItem('rollno',obj.rollno);
            this.props.navigation.dispatch(resetToHome);                     
          }
          else{
            this.setState({
              error:'incorrect username and password'
            })
          }
        })
      }
    })
    .catch(error => { this.setState({
            error:'Error'
          })
        })
  }
  render() {
      return (
        <Container>
          <Header/>
          <Content style={{padding:25}}>
            <Form >
              <Item floatingLabel last>
              <Label>Username</Label>
              <Input   onChangeText={(text) => this.setState({rollno: text})} value={this.state.rollno} />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input type="password" option={{password:true}} onChangeText={(text) => this.setState({password: text})} value={this.state.password} />
              </Item>
              <Button block style={{marginTop:20}} onPress={this._login.bind(this)} >
              <Text>Login</Text>
            </Button>
            <Text style={[stl.message,stl.red,{marginTop:20}]}>{this.state.error}</Text>          
            </Form>
            
          </Content>
        </Container>
      );
  }
}
const stl=StyleSheet.create({
  middle:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
message:{
  padding:10,
  textAlign:'center'
},
bg:{
  backgroundColor:'rgba(34,34,34,0.5)',
},
red:{
  color:'red',
}

}
);