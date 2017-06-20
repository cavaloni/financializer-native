import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Font } from 'expo';
import BullShit from './src/bullshit';
import App from './src/components/app/app';
import store from './src/store';


class Main extends React.Component {
  state = {
    fontsLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Raleway': require('./assets/fonts/Raleway-Regular.ttf'),
      'Open Sans Condensed': require('./assets//fonts/OpenSansCondensed-Light.ttf'),
    })
    this.setState({ fontsLoaded: true })
  }

  render() {

    let appRender = this.state.fontsLoaded ? <App/> : <View/>

    return (
      <ScrollView>
      <View style={styles.container}>
        <Provider store={store}>
        {appRender}
        </Provider>
        <Text>Open up main.js to start working on your Main!</Text>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#597091',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(Main);
