import    React, { Component } from 'react';
import    { StackNavigator,NavigationActions } from "react-navigation";
import    { View, AsyncStorage,StyleSheet,AppRegistry} from "react-native";
import    { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import    Profile from './src/screens/profile';
import    Application from './src/screens/Application';
import    News from './src/screens/News';
import    Saplash from "./src/screens/saplash";
import    Login from "./src/screens/login";
import    Home from "./src/screens/home";
import    Home2 from "./src/screens/home2";
import    SendApp from "./src/screens/sendapplication";
export default class App extends React.Component {
  
   constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <ModalStack/>
    );
} 
}
const stl=StyleSheet.create({
  headding:{
    height:50
  },
  middle:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
text:{
  color:'#2196f3',
}

});
const ModalStack = StackNavigator({
  Home: {
    screen: Home,
  },
  Login: {
    screen: Login
  },
  SendApp: {
    screen: SendApp,
  }
},{
  headerMode:'none',
  mode:'card'
});