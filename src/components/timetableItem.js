import React, { Component } from 'react';
import { Container, Header, Content,Body,Card, CardItem, Text, Icon, Right,Left } from 'native-base';

import Stl from "../extra/style";
import { View } from 'react-native';
import Moment from 'react-moment';

export default class TimeTableItem extends Component {
  render() {
    return (
      <Card style={[Stl.padding_10]}>
      <CardItem>
      <Left>
        <Text style={[Stl.bold,Stl.color]}>{this.props.tt.department}</Text>
      </Left>
      <Right>
      <Text style={[Stl.font_12]}>
        {this.props.tt.smester}
      </Text>
      </Right>
        </CardItem>
      <CardItem>
      <Text>
      <Moment element={Text} format="DD-MM-YYYY">
       {this.props.tt.date}
      </Moment>
      </Text>
      </CardItem>
      <CardItem>
      <Text style={[Stl.font_12,Stl.alertColor]}>
      Timetable is announced, Please download it from Web App.
      </Text>
        </CardItem>
   </Card>
 
    );
  }
}
   
