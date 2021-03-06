import React from 'react'
import { Text, View, Button, ActivityIndicator, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { withNavigation } from 'react-navigation';
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './HomeScreenStyle'
import { Images } from 'App/Theme'

var FBLoginButton = require('../../Components/FBLoginButton');

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

// {/* <Text style={Style.instructions}>{instructions}</Text>
//             {this.props.userErrorMessage ? (
//               <Text style={Style.error}>{this.props.userErrorMessage}</Text>
//             ) : (
//               <View>
//                 <Text style={Style.result}>
//                   {"I'm a fake user, my name is "}
//                   {this.props.user.name}
//                 </Text>
//                 <Text style={Style.result}>
//                   {this.props.liveInEurope ? 'I live in Europe !' : "I don't live in Europe."}
//                 </Text>
//               </View>
//             )} */}

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
//   android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
// })

class HomeScreen extends React.Component {
  // componentDidMount() {
  //   this._fetchUser()
  // }
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }

  render() {
    HomeScreen.propTypes = {
      navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      }).isRequired,
    }

    return (
      <View style={Style.container}>
        {this.props.userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            <Text style={Style.title}>Welcome to</Text>
            <View style={Style.logoContainer}>
              <Image style={Style.logo} source={Images.logo} resizeMode={'contain'} />
            </View>
            <Text style={Style.text}>To get started, Login/Signup</Text>
            {/* <Button onPress={() => this._fetchUser()} title="Get started" /> */}
            <View style={styles.container}>
              <FBLoginButton />
              </View>
            <Button
              onPress={() => this.props.navigation.navigate('Website')}
              title="Visit Website"
            />
             {/* <Button
              onPress={() => this.props.navigation.navigate('Demo')}
              title="Skip for demo button"
            /> */}
          </View>
        )}
      </View>
    )
  }

  // _fetchUser() {
  //   this.props.fetchUser()
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     marginTop: '5%',
    marginBottom: '10%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    }
});

HomeScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  liveInEurope: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export  default withNavigation(HomeScreen);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(HomeScreen)
