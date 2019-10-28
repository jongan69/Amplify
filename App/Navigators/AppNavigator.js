import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { withNavigation } from 'react-navigation';
import React from 'react'
import HomeScreen from 'App/Containers/HomeScreen/HomeScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import { Website } from 'App/Containers/WebView/Website'
import { App } from '../Containers/Home/Home2'
import Auth from '../Containers/Auth/Auth'
// import FBLoginButton from '../Components/FBLoginButton'
// import Mainapp from 'App/Containers/Mainapp/Mainapp'
// import { Profile } from '../Containers/Profile/Profile'
// import { Tickets } from '../Containers/Tickets/Tickets'
// import { Home } from '../Containers/Home/Home'
const FBSDK = require('react-native-fbsdk')
const { GraphRequest, GraphRequestManager } = FBSDK
var FBLoginButton = require('../Components/FBLoginButton');

// import BottomNavigator from '../Components/createMaterialBottomTabNavigator'
// import { Stadium } from '../Containers/Stadium/Stadium'
/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */


const StackNavigator = createStackNavigator(
  // function Auth(){ 
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    Loggedout: HomeScreen,    
    MainScreen: Auth,
    Loggedin: App,    
    Website: Website,
  
    // Demo: App
  },
  // Demo: BottomNavigator,
  // Tickets: Tickets,
  // Stadium: Stadium,
  // Profile: Profile,
  {
    headerMode: 'none',
    // By default the application will show the splash screen
    defaultNavigationOptions: {
      // initialRouteName: 'SplashScreen',
      headerMode: 'none',
      // headerStyle: {
      //   headerTitle: 'Amplify',
      //   backgroundColor: '#D8E9F0',
      //   headerMode: 'none',
      //   headerTintColor: '#000000',
      // },
      // headerTitle: 'Test',
      // headerTitleStyle: { flex: 1, textAlign: 'center', color: '#fff' },
      // headerLayoutPreset: 'left',
    },
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
  }
)

const AppNavigator = createAppContainer(StackNavigator)

export{ AppNavigator }
