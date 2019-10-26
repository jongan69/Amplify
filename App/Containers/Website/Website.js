import React from 'react'

// import { View, Text } from 'react-native'

import { WebView } from 'react-native-webview'

class Website extends React.PureComponent {
  render() {
    // const { textView } = styles
    return <WebView source={{ uri: 'https://amplifywebsite.herokuapp.com' }} />
  }
}
// const styles = {
//   textView: {
//     color: '#fff',
//   },
// }
export { Website }
