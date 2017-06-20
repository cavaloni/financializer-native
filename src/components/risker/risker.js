import React, {Component} from 'react';
import {View, Text, StyleSheet, Slider} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

import Charts from './charts/charts'

const styles = StyleSheet.create({
    "container": {
        "alignItems": "center",
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "space-around",
        "flexWrap": "wrap",
        "flexGrow": 1,
        "flexBasis": "65%",
    },
    "chart_wrapper": {
        "flexBasis": "100%",
    },
    "slide_num": {
        "display": "flex",
        "flexDirection": "row",
        
    },
    "risk_val": {
        "margin": 6,
    },
    "slider": {
        "flexBasis": "90%",
        "height": 20,
        "marginTop": 6.35,
        "backgroundColor": "transparent"
    }
})

class Risker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            riskVal: 1
        }
    }

    componentDidMount() {
        if (!this.props.level) {
            this
                .props
                .dispatch(actions.changeRiskLevel(1))
        }
    }

    updateRisk(e) {
        this.setState({riskVal: e})
        this
            .props
            .dispatch(actions.changeRiskLevel(e))
    }

    render() {
        console.log(this.props.level);
        return (
            <View style={styles.container}>
                <Text>What is your preferred level of financial risk?</Text>
                <View style={styles.slide_num}>
                    <Text style={styles.risk_val}>{this.state.riskVal}</Text>
                    <Slider
                        step={1}
                        style={styles.slider}
                        minimumValue={1}
                        maximumValue={10}
                        value={this.state.riskVal}
                        onValueChange={evt => this.updateRisk(evt)}/>
                </View>
                
                <View style={styles.chart_wrapper}>
                    <Charts risk={this.state.riskVal}/>
                </View>
            </View>
        );
    }
}
//break
const mapStateToProps = (state, props) => ({level: state.level})

export default connect(mapStateToProps)(Risker);