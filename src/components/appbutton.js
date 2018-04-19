import React, { Component } from 'react';
import { View , TouchableOpacity} from "react-native";
import { Container, Header,Button, Content,Body,Card, CardItem, Text, Icon, Right } from 'native-base';
import Stl from "../extra/style";
export default class ApplicationItem extends React.Component {
    showReply(){
        this.props.showReply()
        // console.log('click')
    }
    render() {
    return (
    //    <View>
    <Button style={{paddingVertical:3,height:25}} onPress={this.showReply.bind(this)} primary>
       <Text style={[Stl.font_12]}>
            View Reply
       </Text>
    </Button>
    
    //    </View>
    // <Text>
    // replied
    // </Text>
    );
  }
}
