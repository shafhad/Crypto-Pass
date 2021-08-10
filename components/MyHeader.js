import React, { Component } from 'react';
import { Header, Icon } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize'


export default class MyHeader extends Component {


  render() {
    return (
      <Header containerStyle={{
        backgroundColor: '#175ddc',

      }}

        leftComponent=
        {{
          text: this.props.title,
          style:
          {
            color: 'white',
            fontSize: 20,
            fontWeight: "bold",
            width: 200,
            //justifyContent: 'center',
            //alignItems: 'center'
          }
        }}

        rightComponent=
        {<Icon
          name='ellipsis-v'
          type='font-awesome'
          color='white'
          size={22}
          onPress={() => this.props.navigation.toggleDrawer()}
        />}

      />
    );
  }
}



















