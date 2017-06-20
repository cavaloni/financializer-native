import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Move from './move/move';


const styles = StyleSheet.create({
  "movesList": {
    "display": "flex",
    "flexDirection": "column",
    "marginLeft": 20,
  }
})

class Adjuster extends Component {

  calculateMoves(actNums) {
    let total = 0;
    for (const num in actNums) { // eslint-disable-line
      total += actNums[num];
    }

    const adjustedTotals = this
      .props
      .riskLevels
      .map(level => Math.round((level * 0.01) * total));

    const actNumsKeys = Object.keys(actNums);

    const surplus = [];
    const deficits = [];

    for (let i = 0; i < adjustedTotals.length; i += 1) {
      const amount = actNums[actNumsKeys[i]] - adjustedTotals[i];
      if (amount > 0) {
        surplus.push([amount, actNumsKeys[i]]);
      } else if (amount < 0) {
        deficits.push([amount, actNumsKeys[i]]);
      }
    }

    surplus.sort((a, b) => b[0] - a[0]);
    deficits.sort((a, b) => b[0] - a[0]);

    const moves = [];

    surplus.forEach((amt) => {
      while (amt[0] > 0) {
        const i = deficits.length === 1
          ? 0
          : deficits.length - 1;
        if (deficits[i]) {
          const currentDeficit = deficits[i][0];
          if (amt[0] + currentDeficit > 0) {
            moves.push([
              deficits[i][1], amt[1], Math.abs(currentDeficit)
            ]);
            amt[0] += currentDeficit;
            deficits.pop();
          } else if (amt[0] + currentDeficit < 0) {
            moves.push([deficits[i][1], amt[1], amt[0]]);
            deficits[i][0] += amt[0];
            amt[0] = 0;
          } else {
            moves.push([deficits[i][1], amt[1], amt[0]]);
            amt[0] += currentDeficit;
            deficits.pop();
          }
        }
      }
    });
    return moves;
  }

  render() {
    let moves = [];
    if (this.props.actNums) {
      moves = this.calculateMoves(this.props.actNums);
    }

    let movesDisplay;
    let head;
    if (!moves.length) {
      movesDisplay = <View/>;
      head = <View/>;
    } else {
      movesDisplay = moves.map(move => (<Move from={move[1]} to={move[0]} amount={move[2]} key={moves.indexOf(move)}/>));
      head = <Text>Suggested transfers to match risk level</Text>;
    }

    return (
      <View style={styles.movesList}>
        {head}
        {movesDisplay}
      </View>
    );
  }
}

Adjuster.propTypes = {
  riskLevels: React
    .PropTypes
    .arrayOf(React.PropTypes.number)
    .isRequired,
  actNums: React
    .PropTypes
    .shape({
      cash: React.PropTypes.number, 
      bonds: React.PropTypes.number, 
      stocks: React.PropTypes.number, 
      gold: React.PropTypes.number, 
      annuities: React.PropTypes.number})
    .isRequired
};

const mapStateToProps = (state, props) => ({ // eslint-disable-line
  actNums: state.actNums,
  riskLevels: state.riskLevels
});

export default connect(mapStateToProps)(Adjuster);
