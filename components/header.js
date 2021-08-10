import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize'
//import db from '../config'

export default class OurHeader extends Component {

  render() {
    return (
      <Header containerStyle=
        {{
          backgroundColor: '#175ddc',
        }}

        centerComponent=
        {{
          text: this.props.title,
          style:
          {
            color: 'black',
            fontSize: RFValue(18),
            fontWeight: "bold",
            justifyContent: 'center',
            alignItems: 'center'
          }
        }}

      />
    );
  }
}



















