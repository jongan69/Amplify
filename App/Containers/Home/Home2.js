/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, types, state, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Card } from '../../Components/Card'
import { CardSection } from '../../Components/CardSection'
import { WebView } from 'react-native-webview'
// import { string } from 'prop-types'
const FBSDK = require('react-native-fbsdk')
import { PropTypes } from 'prop-types'
const { GraphRequest, GraphRequestManager } = FBSDK
var FBLoginButton = require('../../Components/FBLoginButton');

// class Website extends React.PureComponent {
//   render() {
//     // const { textView } = styles
//     return <WebView source={{ uri: 'https://amplifywebsite.herokuapp.com' }} />
//   }
// }
// // const styles = {
//   textView: {
//     color: '#fff',
//   },
// }
// import { house, Tickets, Stadium, person} from 'react-native-vector-icons/FontAwesome5'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { house, Ticket, Stadium, person } from '@fortawesome/free-solid-svg-icons'
// type Props = {}
// const house = <FontAwesome5 name={'home'} light />
const main = '#D8E9F0'

class Home extends React.PureComponent {
  render() {
    return (
      <Card>
        <CardSection>
          <View style={styles.container}>
            <Text>Welcome to Amplify</Text>
          </View>
        </CardSection>
      </Card>
    )
  }
}

class Tickets extends React.PureComponent {
  render() {
    return (
      <ScrollView>
        <WebView
          style={{
            marginTop: '20%',
            flex: 0.8,
            height: 500,
            backgroundColor: 'pink',
            overflow: 'hidden',
          }}
          source={{ uri: 'http://9live.club/02b75189-b713-4c1d-a46d-8c0097b996cb' }}
          useWebKit
          bounces={false}
          javaScriptEnabled
          automaticallyAdjustContentInsets={true}
        />
        <WebView
          style={{
            marginTop: '20%',
            flex: 0.8,
            height: 500,
            backgroundColor: 'pink',
            overflow: 'hidden',
          }}
          source={{ uri: 'https://www.youtube.com/watch?v=fwCS4Lu4qAM' }}
          useWebKit
          bounces={false}
          javaScriptEnabled
          automaticallyAdjustContentInsets={true}
        />
      </ScrollView>
      //        <Card>
      //   <CardSection>
      //     <View style={styles.container}>
      //       <Text>Tickets Screen</Text>
      //     </View>
      //   </CardSection>
      // </Card>
    )
  }
}

class Stadiums extends React.PureComponent {
  render() {
    return (
      // <Card>
      //   <CardSection>
      //     <View style={styles.container}>
      //       <Text>Stadium Screen</Text>
      //     </View>
      //     </CardSection>
      // </Card>
      <WebView
        // style={{ alignItem: 'center', justifyContent: 'center', width: '80%', height: '100/%' }}
        // style={styles.container, overflow: 'hidden'}
        style={{
          marginTop: '20%',
          flex: 0.8,
          height: 500,
          backgroundColor: 'pink',
          overflow: 'hidden',
        }}
        source={{ uri: 'http://campingworldstadium.io-media.com/web/index.html' }}
        useWebKit
        bounces={false}
        javaScriptEnabled
        automaticallyAdjustContentInsets={true}
      />
    )
  }
}

class Profile extends React.PureComponent {
 
 _responseInfoCallback(error: ? Object, result: ? Object) {
  if (error) {
    this.setState = { Status: "Error" + error.toString()}
    // alert('Error fetching data: ' + error.toString());
  } else {
    this.setState = {Status:  "Logged In: "}
    // alert('Success fetching data: ' + result.toString());
  }
}
constructor(props) {
    super(props)
    this.state = {Status: "Not Logged in"}
   }

  render() {
    const infoRequest = new GraphRequest('/me', null, this._responseInfoCallback)
    // var Status = this.props;
    new GraphRequestManager().addRequest(infoRequest).start()
    const user = this._responseInfoCallback.GraphRequestManager
    return (
      <Card>
        <CardSection>
          <View style={styles.container}>
            <Text>Profile Screen</Text>
            {/* <Text>Hello {FBLoginButton.LoginResult.Public_Profile.toString()}</Text> */}
            <Text>Your Status: {this.state.Status} </Text>
        <FBLoginButton
        publishPermissions={['email']}
        onPress={null}
        onLogoutFinished={() => this.props.navigation.navigate('Loggedout')}
        />
          </View>
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ main }) => (
          <View>
            <Image 
            style={{
          width:  '1%',
          height: '1%',
        }}
            source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png" }} />
            {/* <Icon style={{ color: tintColor }} size={25} name={'home'} /> */}
            {/* <FontAwesomeIcon icon={['fab', 'house']} /> */}
            {/* <FontAwesomeIcon icon="house" /> */}
          </View>
        ),
      },
    },
    Tickets: {
      screen: Tickets,
      navigationOptions: {
        tabBarLabel: 'Tickets',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Text>Test</Text>
            {/* <Icon style={{ color: tintColor }} size={25} name={'ticket'} /> */}
            {/* <FontAwesomeIcon icon={'ticket'} /> */}
          </View>
        ),
        activeColor: '#615af6',
        inactiveColor: '#46f6d7',
        barStyle: { backgroundColor: '#67baf6' },
      },
    },
    Stadiums: {
      screen: Stadiums,
      navigationOptions: {
        tabBarLabel: 'Stadium',
        tabBarIcon: ({ tintColor }) => (
          <View>
            {/* <Icon style={{ color: tintColor }} size={25} name={'stadium'} /> */}
            {/* <FontAwesomeIcon icon="stadium" /> */}
          </View>
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <View>
            {/* <Icon style={{ color: tintColor }} size={25} name={'person'} /> */}
            {/* <FontAwesomeIcon icon="person" /> */}
          </View>
        ),
        activeColor: '#f60c0d',
        inactiveColor: '#f65a22',
        barStyle: { backgroundColor: '#f69b31' },
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    barStyle: { backgroundColor: '#3BAD87' },
  }
)

const App = createAppContainer(TabNavigator)

export { App }

// export { Home, Tickets, Stadium, Profile }
