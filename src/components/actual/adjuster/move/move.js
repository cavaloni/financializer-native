import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  "texts": {
    "fontFamily": "Raleway"
  },
  "mover": {
    "margin": 20,
    "borderBottomWidth": 1,
    "borderColor": 'brown',
    "padding": 7
  },
  "b": {
    "fontFamily": "Raleway",
    "fontWeight": "bold",
    "color": "#46638f"
  }
})

const Move = ({from, to, amount}) => (
  <View style={styles.mover}>
    <Text style={styles.texts}>Transfer ${amount} from
      <Text style={styles.b}> {from} </Text> to
      <Text style={styles.b}> {to} </Text>
    </Text>
  </View>
);

Move.propTypes = {
  from: React.PropTypes.string.isRequired,
  to: React.PropTypes.string.isRequired,
  amount: React.PropTypes.number.isRequired
};

export default Move;
