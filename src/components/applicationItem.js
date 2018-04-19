import React, { Component } from 'react';
import { Container, Header, Content,Body,Card,Left, CardItem, Text, Icon, Right } from 'native-base';
import Stl from "../extra/style";
import  AB  from "./appbutton";
import  AT  from "./apptext";
import { View } from 'react-native';

export default class ApplicationItem extends React.Component {
    showReply(){
      this.props.showReply(this.props.app._id);
    }
  render() {
    let view;
    if(this.props.app.status===1){
      // return(
          view=<AB showReply={this.showReply.bind(this)} app={this.props.app.type}/>
      // );
    } else {
        // return(
          view=<AT/>
        // )

    }
    return (
        <Card style={[Stl.padding_10]}>
          <CardItem>
          <Left>
            <Text style={[Stl.bold,Stl.color]}>{this.props.app.title}</Text>
          </Left>
          <Right>
          <Text style={[Stl.font_12,Stl.purple]}>{this.props.app.type}</Text>
          </Right>
            </CardItem>
          <CardItem>
            <Body>
              <Text style={[Stl.font_12,Stl.alertColor]}>
                {this.props.app.body}
              </Text>
            </Body>
          </CardItem>
          <CardItem>
          {view}
        </CardItem>
       </Card>
    );
  }
}
