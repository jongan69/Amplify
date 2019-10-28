import React from 'react'
import { state, onChange } from 'react-native'
import HomeScreen from '../HomeScreen/HomeScreen'
import { App } from '../Home/Home2'
const FBSDK = require('react-native-fbsdk')
const { GraphRequest, GraphRequestManager } = FBSDK
var FBLoginButton = require('../../Components/FBLoginButton'); 

const fbauth = ({user: 'loggedout'});
var user = 'loggedout'

// onChange(this.state) 
//   {
//  this.onChange = this.onChange.bind(this);
// this.setState(state);
// }

class Auth extends React.PureComponent {

  
  constructor(props) {
    super(props);
  }
    _responseInfoCallback(error:?Object, result:?Object){
            if (result) {
            return (user = 'loggedin')
            }
            // this.state.user) && alert('Success fetching data: ' + state.user + result.toString()))
            else if (error){
              return user
              // && alert('Error fetching data: ' + error.toString()) )
            }
          }
        
render() {
    const infoRequest = new GraphRequest('/me', null, this._responseInfoCallback)
    new GraphRequestManager().addRequest(infoRequest).start()
    
    function Check(_responseInfoCallback){
          while (user === 'loggedin')
           { return  < App />}

          if (user === 'loggedout'){
            return < HomeScreen />
          }
          else {
            return < HomeScreen />
          }
        }

    return (
      <React.Fragment>
      {Check()}
      </React.Fragment>
    )
  }
}
    const infoRequest = new GraphRequest('/me', null, this._Auth);
    // const user = this._Auth.GraphRequestManager();
    new GraphRequestManager().addRequest(infoRequest).start();

export default Auth;