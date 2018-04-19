import React, { Component } from 'react';
import { Container, Header, Content,Body,Card, CardItem, Text, Icon, Right } from 'native-base';
import Stl from "../extra/style";
import Moment from 'react-moment';
export default class NewsItem extends React.Component {
  render() {
    return (
        <Card style={[Stl.padding_10]}>
          <CardItem>
            <Text style={[Stl.bold,Stl.color]}>{this.props.news.title}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={[Stl.font_12,Stl.alertColor]}>
                {this.props.news.body}
              </Text>
            </Body>
          </CardItem>
          <CardItem>
          <Text style={[Stl.alertColor,Stl.font_12]}>
            <Moment element={Text} format="DD-MM-YYYY">
              {this.props.news.date}
            </Moment>
          </Text>
        </CardItem>
       </Card>
    );
  }
}
