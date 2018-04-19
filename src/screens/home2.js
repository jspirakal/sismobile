import    React, { Component } from 'react';
import    {Button} from "react-native";
export default class Home2 extends React.Component {
    static navigationOptions = {
      title: 'Home',
    }
  
    render() {
      return (
        <Button style={{marginTop:50}}
          onPress={() => this.props.navigation.navigate('Login')}
          title="Go to Lucy's profile"
        />
      );
    }
  }
  