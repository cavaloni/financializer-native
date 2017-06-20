import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  "mover": {
    "margin": 20,
    "borderBottomWidth": 1,
    "borderColor": 'brown',
    "padding": 7
  },
  "b": {
    "fontWeight": "bold",
    "color": "#46638f"
  }
})

const Move = ({from, to, amount}) => (
  <View style={styles.mover}>
    <Text>Transfer ${amount}
      from
      <Text style={styles.b}>{from}</Text>
      to
      <Text style={styles.b}>{to}</Text>
    </Text>
  </View>
);

Move.propTypes = {
  from: React.PropTypes.string.isRequired,
  to: React.PropTypes.string.isRequired,
  amount: React.PropTypes.number.isRequired
};

export default Move;
