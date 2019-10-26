import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

const $red = '#ff0000'
const $bg = '#D8E9F0'
export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    justifyContent: 'center',
    // margin: 30,
    backgroundColor: '#D8E9F0',
  },
  error: {
    ...Fonts.style.normal,
    color: $red,
    marginBottom: 5,
    textAlign: 'center',
    backgroundColor: '#D8E9F0',
  },
  instructions: {
    ...Fonts.style.normal,
    fontStyle: 'italic',
    marginBottom: 5,
    textAlign: 'center',
    backgroundColor: '#D8E9F0',
  },
  loading: {
    ...Fonts.style.normal,
    marginBottom: 5,
    textAlign: 'center',
    backgroundColor: '#D8E9F0',
  },
  logo: {
    height: '100%',
    width: '100%',
    backgroundColor: '#D8E9F0',
  },
  logoContainer: {
    height: 300,
    marginBottom: 25,
    width: '100%',
    backgroundColor: $bg
  },
  result: {
    ...Fonts.style.normal,
    marginBottom: 5,
    textAlign: 'center',
    backgroundColor: '#D8E9F0',
  },
  text: {
    ...Fonts.style.normal,
    marginBottom: 5,
    textAlign: 'center',
    backgroundColor: '#D8E9F0',
  },
  title: {
    ...Fonts.style.h2,
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: '#D8E9F0',
  },
})
