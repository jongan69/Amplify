import React from 'react'
import { Image, View } from 'react-native'
import styles from './SplashScreenStyle'
import { Images } from 'App/Theme'
import Style from '../HomeScreen/HomeScreenStyle'
export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          {/* You will probably want to insert your logo here */}
          <Image style={Style.logo} source={Images.logo} resizeMode={'contain'} />
        </View>
      </View>
    )
  }
}
