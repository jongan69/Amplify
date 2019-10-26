import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

// const bg = '#0000'
const $bg = '#D8E9F0'
export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    alignItems: 'center',
    // backgroundColor: Colors.primary,
    backgroundColor: '#D8E9F0',
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
    backgroundColor: '#D8E9F0',
    display: 'flex',
    height: 70,
    justifyContent: 'center',
    width: 70,
  },
})
