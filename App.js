import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Routes from './Routes/Routes';
//import GetStarted from './Screens/GetStarted';
//import FullRegister from './Screens/FullRegister';
//import PIN from './Screens/PIN';
//import PhoneNumber from './Screens/PhoneNumber';
//import Password from './Screens/Password';
//import Navigator from './routes/Routes';

export default class App extends React.Component {
  renderScene(route, navigator) {
    if (route.name == 'GetStarted') {
      return <Routes navigator={navigator} />
    }
    if (route.name == 'PhoneNumber') {
      return <Routes navigator={navigator} />
    }
    if (route.name == 'PIN') {
      return <Routes navigator={navigator} />
    }
    if (route.name == 'Password') {
      return <Routes navigator={navigator} />
    }
    if (route.name == 'FullRegister') {
      return <Routes navigator={navigator} />
    }
    if (route.name == 'Languages') {
      return <Routes navigator={navigator} />
    }
    if (route.name == 'Country') {
      return <Routes navigator={navigator} />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Routes
          renderScene={this.renderScene.bind(this)}

        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignIroutestems: 'center',
    justifyContent: 'center',
    //padding: 40
  },
});
