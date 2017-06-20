import React from 'react';
import {View} from 'react-native';


const BodyWrapper = ({children}) => (
  <View
    style={{
    margin: 20,
    borderRadius: 2,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    shadowColor: 'rgba(0, 0, 0, .15)',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowRadius: 2,
    backgroundColor: "#788ba6",

    
  }}>
    {children}
  </View>
);

BodyWrapper.propTypes = {
  children: React.PropTypes.array.isRequired
};

export default BodyWrapper;
