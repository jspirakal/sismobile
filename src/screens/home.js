import    React, { Component } from 'react';
import    {StackNavigator,NavigationActions} from "react-navigation"
import    {View, AsyncStorage,StyleSheet} from "react-native";
import    EvilIcons from 'react-native-vector-icons/Ionicons';
import    { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import    Profile from './profile';
import    Application from './Application';
import    News from './News';
import    Saplash from "./saplash";
import    Style from '../extra/style';
import    Login from './login';
import    Setting from "../screens/setting";
// import    Login from "./screens/login";
import    TimeTable from "./timetable";
import { url } from '../components/credentrial';
export const resetToLogin = NavigationActions.reset({
  index: 0,
  key: null,
  actions: [
    NavigationActions.navigate({routeName: 'Login'}),
  ],
});
export default class Home extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     userurl:'',
     loading:'on',
     token:'',
     data:'',
     id:''
    };
 }
 _logout(){
  this.props.navigation.dispatch(resetToLogin);
 }
 _sendApp(){
  this.props.navigation.navigate('SendApp');
 }
 _fetch(){
   fetch(`${url}/getuser/${this.state.id}`, {
     method: 'GET',
     headers:{
       Accept: 'application/json',
       'Content-Type': 'application/json',
       'Authorization':`Token ${this.state.token}`
     }
   })
  .then((res) =>{
   if (res.status === 403) {
    this.props.navigation.dispatch(resetToLogin);                         
   } else if (res.status === 200) {
     res.json()
     .then( (obj) => {
         this.setState({data:obj});
         this.setState({loading:'off'})        
       })
   } else{
     console.warn('Network Error');      
   }
  })
  .catch((error) => {
     console.warn('Network Error');
  })
 }
 async componentWillMount() {
  //  await Expo.Font.loadAsync({
  //    Roboto: require("native-base/Fonts/Roboto.ttf"),
  //    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //  }); 
   await AsyncStorage.getItem('rollno')
   .then((value)=> {
     if(value===null)
     {
       this.props.navigation.dispatch(resetToLogin);
     }else{
     this.setState({id:value});
     AsyncStorage.getItem('token')
     .then((t) => {
       this.setState({'token':t})
       this._fetch();
     })
     }
     });
   }
 render() {
   if(this.state.loading=='off'){
   return (
    <Container>
    <Header hasTabs/>
    <Tabs locked={true}>
      <Tab heading={ <TabHeading><EvilIcons  style={[Style.font_32,Style.whiteColor]} name="ios-person-outline" /></TabHeading>}>
        <Profile profile={this.state.data}/>
      </Tab>
      <Tab heading={ <TabHeading><EvilIcons style={[Style.font_32,Style.whiteColor]} name="ios-apps-outline" size={32} /></TabHeading>}>
        <Application  sendapp={this._sendApp.bind(this)} roll={this.state.id} token={this.state.token}/>
      </Tab>
      <Tab heading={ <TabHeading><EvilIcons style={[Style.font_32,Style.whiteColor]} name="ios-paper-outline"/></TabHeading>}>
      <News roll={this.state.id} token={this.state.token} />
      </Tab>
      <Tab heading={ <TabHeading><EvilIcons style={[Style.font_32,Style.whiteColor]} name="ios-clock-outline"/></TabHeading>}>
        <TimeTable roll={this.state.id} token={this.state.token} />      
    </Tab>
    <Tab heading={ <TabHeading><EvilIcons style={[Style.font_32,Style.whiteColor]} name="ios-settings-outline"/></TabHeading>}>
    <Setting logout={this._logout.bind(this)} />      
</Tab>
    </Tabs>
  </Container>
   );
 }
   else{
   return (
     <Saplash/>
   );
 }
} 
}
// const MyApp = TabNavigator({
//   Home: {
//     screen: Profile,
//   },
//   Notifications: {
//     screen: MyNotificationsScreen,
//   },
// }, {
//   tabBarPosition: 'top',
//   animationEnabled: true,
//   tabBarOptions: {
//     activeTintColor: '#e91e63',
//   },
// });
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