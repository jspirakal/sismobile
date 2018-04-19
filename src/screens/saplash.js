import React, { Component } from 'react';
import {StyleSheet,View,Text,Image} from "react-native";
import { Container, Header, Content, Spinner } from 'native-base';
import logo from "../assets/img/log.png";
export default class Saplash extends Component {
  render() {
    return (
      // <Container  style={stl.middle}>
        // <Content >
        <View style={stl.middle}>
          <Image
            source={logo}
          />
          </View>
        // </Content>
      // </Container>
    );
  }
}
const stl=StyleSheet.create({
    middle:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
}});