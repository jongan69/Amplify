import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

const $bg = '#D8E9F0'
export default StyleSheet.create({
  container: {
    backgroundColor: $bg,
    ...ApplicationStyles.screen.container,
     backgroundColor: '#D8E9F0'
  },
})
