import React, { Component } from 'react';
import {AsyncStorage, StyleSheet, View} from "react-native";
import { Container, Header, Content,Body, Card, CardItem,Button, Text, Icon,Left, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StackNavigator } from "react-navigation"

export default class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:{}
        }
    }
     componentDidMount= () =>{
        try {
            AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
         } catch (error) {
           // Error saving data
         }
       try {
           const value =  AsyncStorage.getItem('@MySuperStore:key');
        //    if (value !== null){
             // We have data!!
        //    }
         } catch (error) {
           // Error retrieving data
         }   // console.log(AsyncStorage.getItem('rollno'));
        this.setState({
            data:this.props.profile
        })
    }
  render() {
    return (
      <Container>
          <Grid>
          <Row style={{ height:30,marginTop:30}}>
          <Col style={stl.padding_l_20}><Text style={[stl.font]}>Name</Text></Col><Col><Text style={stl.font}>{this.state.data.name}</Text></Col>
          </Row>
          <Row style={{ height:30}}>
          <Col style={[stl.padding_l_20]}><Text style={stl.font}>Father Name</Text></Col><Col><Text style={stl.font}>{this.state.data.fathername}</Text></Col>
          </Row>
          <Row style={{ height:30}}>
          <Col style={stl.padding_l_20}><Text style={stl.font}>Roll No</Text></Col><Col><Text style={stl.font}>{this.state.data.rollno}</Text></Col>
          </Row>
          <Row style={{ height:30}}>
          <Col style={stl.padding_l_20}><Text style={[stl.font]}>Department</Text></Col><Col><Text style={[stl.font]}>{this.state.data.degree} - {this.state.data.programe}</Text></Col>
          </Row>
            <Row style={{ height:30}}>
          <Col style={stl.padding_l_20}><Text style={[stl.font]}>Contact </Text></Col><Col><Text style={[stl.font]}>{this.state.data.contact}</Text></Col>
          </Row>
          <Row style={{ height:30}}>
          <Col style={stl.padding_l_20}><Text style={[stl.font]}>Address</Text></Col><Col><Text style={[stl.font]}>{this.state.data.address}</Text></Col>
          </Row>
          <Row style={{ height:30}}>
          <Col style={stl.padding_l_20}><Text style={[stl.font]}>Smester</Text></Col><Col><Text style={[stl.font]}>{this.state.data.smester}</Text></Col>
          </Row>
          <Row style={{ height:30}}>
          <Col style={stl.padding_l_20}><Text style={[stl.font]}>Gender</Text></Col><Col><Text style={[stl.font]}>{this.state.data.gender}</Text></Col>
          </Row>
          </Grid>
      </Container>
    );
  }
}
const stl=StyleSheet.create({
    container:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        marginTop:20
    },
    loading:{
        flex: 1,
        backgroundColor: '#fff',
        color:'#2196f3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    left:{
        textAlign:'left'
    },
    padding_l_10:{
        paddingLeft:10
    },
    padding_l_20:{
        paddingLeft:20
    },
    padding:{
        padding:20
    },
    w_100:{
        width:100
    },
    font:{
        fontSize:14
    }
    
})
//  <Col style={{  height: 200,width:100 }}></Col>
// <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
// <View style={stl.container}>
// <Text>{this.state.data.name}</Text>
// <Text>
//    {this.state.data.fathername}
// </Text>
// <Text>{this.state.data.rollno}</Text>
// </View>
// <View style={stl.container}>
// <Text>{this.state.data.registrationno}</Text>
// <Text>
//    {this.state.data.degree} - {this.state.data.programe}
// </Text>
// <Text>{this.state.data.gender}</Text>
// </View>
// <View style={stl.container}>
// <Text style={stl.left}>{this.state.data.contact}</Text>
// <Text>
//    {this.state.data.address}
// </Text>
// </View>