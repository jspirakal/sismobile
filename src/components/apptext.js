import React, { Component } from 'react';
import { View } from "react-native";
import { Container, Header,Button, Content,Body,Card, CardItem, Text, Icon, Right } from 'native-base';
import Stl from "../extra/style";
export default class ApplicationItem extends React.Component {
  render() {
    return (
       <View>
       <Text style={[Stl.alertColor]}>
         Pending
       </Text>
       </View>
    );
  }
}