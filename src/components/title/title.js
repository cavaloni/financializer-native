import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  title_bar: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 100,
    backgroundColor: '#EAE6E1',
  },
  heading: {
    fontFamily: 'Open Sans Condensed',
    margin: 20,
    fontSize: 40,
    color: '#5095cb',
  },
  sub_title: {
    position: 'relative',
    right: 20,
    bottom: 5,
    alignSelf: 'flex-end',
    fontFamily: 'Open Sans Condensed',
    fontSize: 17,
  },
})
//stuff 
const Title = function () {
    return (
        <View style={styles.title_bar}>
            <Text style={styles.heading}>Financializer</Text>
            <Text style={styles.sub_title}>Forging Your Financial Future</Text>
        </View>
    )
}

export default Title;
