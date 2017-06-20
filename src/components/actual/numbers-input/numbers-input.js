import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';


const styles = StyleSheet.create({
   "texts": {
        "fontFamily": "Raleway"
    },
  "actual_numbers": {
    "textAlign": "center",
    
    "backgroundColor": "hsla(0, 0%, 100%, .2)",
    "marginBottom": 10,
    "shadowColor": "rgba(10, 10, 10, .2)",
    "shadowOffset": {
      width: 2,
      height: 2,
    },
    "shadowRadius": 10,
    "fontFamily": "Raleway",
  },
  "input_container": {
    "display": "flex",
    "justifyContent": "space-between"
  }
})

class NumbersInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numInput: '0'
    };
    this.handleInputChange = this
      .handleInputChange
      .bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.getNums) {
      const invType = this
        .props
        .invType
        .toLowerCase();
      this
        .props
        .numCallBack(this.state.numInput, invType);
    }
  }

  handleInputChange(e) {
    this.setState({numInput: e});
  }

  render() {
    const {invType} = this.props;
    return (
      <View style={styles.input_container}>
        <Text style={styles.texts}>{invType}</Text>
        <TextInput
          style={styles.actual_numbers}
          name={invType}
          keyboardType="numeric"
          value={this.state.numInput}
          onChangeText={this.handleInputChange}
          multiline={false}/>
      </View>
    );
  }
}

NumbersInput.propTypes = {
  invType: React.PropTypes.string.isRequired,
  numCallBack: React.PropTypes.func.isRequired,
  getNums: React.PropTypes.bool.isRequired, // eslint-disable-line
};

export default NumbersInput;
