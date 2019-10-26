import { createAppContainer, createStackNavigator } from 'react-navigation'
// import React from 'react'
import HomeScreen from 'App/Containers/HomeScreen/HomeScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import { Website } from 'App/Containers/Website/Website'
import Mainapp from 'App/Containers/Mainapp/Mainapp'
/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    MainScreen: HomeScreen,
    Website: Website,
    Demo: Mainapp,
  },
  {
    headerMode: 'none',
    // By default the application will show the splash screen
    defaultNavigationOptions: {
      initialRouteName: 'SplashScreen',
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

export default createAppContainer(StackNavigator)
