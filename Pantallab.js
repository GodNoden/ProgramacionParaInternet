import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={{fontSize=16}}> Bienvenido: {this.props.route.params.nombre} </Text>
        <Text style={{fontsize=16}}> {this.props.route.params.codigo} </Text>
      </View>
    );
  }
}
