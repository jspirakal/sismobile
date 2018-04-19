import React, { Component } from 'react';
import  {View,Text, AsyncStorage} from "react-native";
import {Button} from 'native-base';
import    Style from '../extra/style';
import    {StackNavigator,NavigationActions} from "react-navigation";
import      {Login} from "../screens/login";

export default class Setting extends Component {
    constructor(props){
        super(props);
        this.state={
            auth:'logout'
        }
    }
        _logoute(){
            this.props.logout();
        }
        async logout(){
        await AsyncStorage.removeItem('rollno');
        await AsyncStorage.removeItem('token');
        let a=await AsyncStorage.getItem('token');
        let b=await AsyncStorage.getItem('rollno');
        AsyncStorage.getItem('token')
        .then((v) => {
            this._logoute();
        })   
    }
    render() {
            return (
                <View style={[Style.middle,Style.padding]}>
                    <Button block warning onPress={this.logout.bind(this)}>
                    <Text>Logout</Text>
                    </Button>
                </View>
            );
    }

  }