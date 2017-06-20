import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import BullShit from './src/bullshit';
import App from './src/components/app/app';
import store from './src/store';


class Main extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Provider store={store}>
        <App/>
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
