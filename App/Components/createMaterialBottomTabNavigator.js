// import * as React from 'react';
// import { BottomNavigation, Text } from 'react-native-paper';

// const MusicRoute = () => <Text>Music</Text>;

// const AlbumsRoute = () => <Text>Albums</Text>;

// const RecentsRoute = () => <Text>Recents</Text>;

// export default class BottomNavigator extends React.Component {
//   state = {
//     index: 0,
//     routes: [
//       { key: 'music', title: 'Music', icon: 'queue-music' },
//       { key: 'albums', title: 'Albums', icon: 'album' },
//       { key: 'recents', title: 'Recents', icon: 'history' },
//     ],
//   }

//   _handleIndexChange = index => this.setState({ index });

//   _renderScene = BottomNavigation.SceneMap({
//     music: MusicRoute,
//     albums: AlbumsRoute,
//     recents: RecentsRoute,
//   });

//   render() {
//     return (
//       <BottomNavigation
//         navigationState={this.state}
//         onIndexChange={this._handleIndexChange}
//         renderScene={this._renderScene}
//       />
//     );
//   }
// }
// import {
//   // RouteConfigs,
//   MaterialBottomTabNavigatorConfig,
//   createMaterialBottomTabNavigator,
// } from 'react-navigation-material-bottom-tabs'
// import { Home } from '../Containers/Home/Home'
// import { Profile } from '../Containers/Profile/Profile'
// import { Stadium } from '../Containers/Stadium/Stadium'
// import { Tickets } from '../Containers/Tickets/Tickets'

// createMaterialBottomTabNavigator(MaterialBottomTabNavigatorConfig)
// export default createMaterialBottomTabNavigator(
//   {
//     Home: { screen: Home },
//     Tickets: { screen: Tickets },
//     Stadium: { screen: Stadium },
//     Profile: { screen: Profile },
//   },
//   {
//     initialRouteName: 'Home',
//     activeColor: '#f0edf6',
//     inactiveColor: '#3e2465',
//     barStyle: { backgroundColor: '#694fad' },
//   }
// )
