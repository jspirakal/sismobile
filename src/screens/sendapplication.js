import React, { Component } from 'react';
import {StyleSheet,View,Text, AsyncStorage,Picker, TextInput} from "react-native";
import { Container, Header,Left,Icon,Body,Right,Content,Title, Form,Button,Item,Alert, Input, Label,Root } from 'native-base';
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
      title:'',
      type:'general',
      body:'',
      smester:'',
      rollno:''
    }
  }
  async componentWillMount() {
      await AsyncStorage.getItem('rollno')
      .then((t) => this.setState({rollno:t}));
  }
  _sendApp(){
    console.log(this.state);
    fetch(`${url}/sendapplication`, {
      method: 'post',
      body:JSON.stringify(this.state),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then( (res) => {
        if (res.status === 200) {
            res.json()
            .then( (obj) => {
                alert('Application submitted Succesfully');
                this.props.navigation.goBack();                  
            })

          }
          else if (res.status === 500) {
        res.json()
        .then( (err) => {
            console.warn(err)
        })
      }
      else{
        console.warn('error');
        
      } 
    })
    .catch(error => { 
        console.warn(error);
        })
  }
  render() {
      return (
        <Container>
          <Header />
          <Content style={{padding:25}}>
            <Form >
              <Item floatingLabel last>
              <Label>Title</Label>
              <Input   onChangeText={(text) => this.setState({title: text})} value={this.state.title} />
              </Item>
              <Item floatingLabel last>
                <Label>Smester</Label>
                <Input type="password" option={{password:true}} onChangeText={(text) => this.setState({smester: text})} value={this.state.smester} />
              </Item>
              <Picker
              selectedValue={this.state.type}
              style={{width:'100%'}}
              onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
              <Picker.Item label="General" value="general" />
              <Picker.Item label="Complain" value="complain" />
            </Picker>
            <TextInput
            multiline={true}
            placeholder="Enter body"
            numberOfLines={10}
            onChangeText={(text) => this.setState({body:text})}
            value={this.state.text}/>

              <Button block style={{marginTop:20}} onPress={this._sendApp.bind(this)} >
              <Text>Submit Apllication</Text>
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