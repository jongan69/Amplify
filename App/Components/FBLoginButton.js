import React from 'react'
import { View, TouchableOpacity} from 'react-native'
import { LoginButton } from 'react-native-fbsdk'
import { withNavigation, StackActions } from 'react-navigation';
import { AppNavigator } from '../Navigators/AppNavigator'
import { navigate,navigation } from 'react-navigation-stack'
import { connect } from 'react-redux'
// import HomeScreen from '../Containers/HomeScreen/HomeScreen'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
// import RootScreen from '../Containers/Root/RootScreen'
const FBSDK = require('react-native-fbsdk')
const { LoginManager } = FBSDK
const touched = false
export default class FBLoginButton extends React.PureComponent {
  //  componentDidMount() {
  //   this._fetchUser()
  // }
  // constructor(props) {
  //   super(props)
  //   this.state = { isLoading: true }
  // }
  render() {
// AppNavigator.propTypes = {
//       navigation: PropTypes.shape({
//         navigate: PropTypes.func.isRequired,
//       }).isRequired,
//     }

// const { navigate } = this.props.navigation;
while (touched != false){
    LoginManager.logInWithPermissions(['496826131042680']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login was cancelled: ' + result.isCancelled.toString());
          () => this.props.navigation.navigate('Loggedout')
          
        } else {
          alert('Login was successful with permissions: ' + result.grantedPermissions.toString());
          () => this.props.navigation.navigate('Loggedin')
        }
      },
      function(error ) {
        alert('Login failed with error: ' + error);
        () => this.props.navigation.navigate('Loggedout')
      }
    )}

    return (
      
      <View>
        <TouchableOpacity
        onPress={touched != false}
        >
        <LoginButton
          publishPermissions={['email']}
          onPress={(error, result) => {
              if (error) {
                () => this.props.navigation.navigate('Loggedout')
                // alert('Login failed with error: ' + error.message)
              } 
              else if (result.isCancelled ) {
                () => this.props.navigation.navigate('Loggedout')
                // alert('You canceled the Login, try again' + result.isCancelled)
              }
              else {
                () => this.props.navigation.navigate('Loggedin')
              }
              //  ( alert('Login was successful with permissions: ' + result.grantedPermissions))
            }}
              // onLogoutFinished={() => this.props.navigation.dispatch(StackActions.popToTop())}
          onLogoutFinished={
            () => this.props.navigation.navigate('Loggedout')
            }
        />
        </TouchableOpacity>
      </View>
    )
  }
  // _fetchUser() {
  //   this.props.fetchUser()
  // }
}

// FBLoginButton.propTypes = {
//   user: PropTypes.object,
//   userIsLoading: PropTypes.bool,
//   userErrorMessage: PropTypes.string,
//   fetchUser: PropTypes.func,
// }

// const mapStateToProps = (state) => ({
//   user: state.example.user,
//   userIsLoading: state.example.userIsLoading,
//   userErrorMessage: state.example.userErrorMessage,
// })

// const mapDispatchToProps = (dispatch) => ({
//   fetchUser: () => dispatch(ExampleActions.fetchUser()),
// })
module.exports = withNavigation(FBLoginButton)
// module.exports = FBLoginButton

// module.exports = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FBLoginButton)


//  onLoginFinished={(error, result) => {
//               if (error) {
//                 alert('Login failed with error: ' + error.message)
//               } else if (result.isCancelled) {
//                 alert('Login was cancelled')
//               } else {
//                 alert('Login was successful with permissions: ' + result.grantedPermissions)
//                 // {this.props.navigation.navigate('Demo')}
//               }