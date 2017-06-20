import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import NumbersInput from './numbers-input/numbers-input';
import * as actions from '../../actions/index';

const styles = StyleSheet.create({
  actual: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20
  },

  calculate: {
    shadowColor: 'rgba(10, 10, 10, .2)',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 10,
    fontFamily: 'Raleway',
    backgroundColor: '#46638f',
    width: 100,
    height: 30,
    margin: 10,
    fontSize: 15,
    color: 'white',
  },

  "head": {
    "margin": 0,
    "marginBottom": 20,
    "fontFamily": "Raleway",
  }

})

class Actual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cash: 0,
      bonds: 0,
      stocks: 0,
      gold: 0,
      annuities: 0,
      getNums: false
    };
    this.getNums = this
      .getNums
      .bind(this);
    this.triggerCollectNums = this
      .triggerCollectNums
      .bind(this);
  }

  getNums(e, invType) {
    this.setState({[invType]: Number(e), getNums: false});
  }

  pushActuals() {
    const actNums = {
      cash: this.state.cash,
      bonds: this.state.bonds,
      stocks: this.state.stocks,
      gold: this.state.gold,
      annuities: this.state.annuities
    };
    this
      .props
      .dispatch(actions.updateActualNumbers(actNums));
  }

  triggerCollectNums() {
    this.setState({
      getNums: true
    }, () => {
      this.pushActuals();
    });
  }
  // word
  render() {
    return (
      <View style={styles.actual}>
        <Text style={styles.head}>What are your current investments?</Text>
        <NumbersInput
          invType="Cash"
          numCallBack={this.getNums}
          getNums={this.state.getNums}/>
        <NumbersInput
          invType="Bonds"
          numCallBack={this.getNums}
          getNums={this.state.getNums}/>
        <NumbersInput
          invType="Stocks"
          numCallBack={this.getNums}
          getNums={this.state.getNums}/>
        <NumbersInput
          invType="Gold"
          numCallBack={this.getNums}
          getNums={this.state.getNums}/>
        <NumbersInput
          invType="Annuities"
          numCallBack={this.getNums}
          getNums={this.state.getNums}/>
        <Button style={styles.calculate} onPress={this.triggerCollectNums} title="Calculate">
          
        </Button>
      </View>
    );
  }
}

Actual.propTypes = {
  dispatch: React.PropTypes.func.isRequired
};

export default connect()(Actual);
