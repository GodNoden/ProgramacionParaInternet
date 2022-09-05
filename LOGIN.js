import React from "react";
import { Button, StyleSheet, TextInput } from "react-native";

import { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo: "",
      nip: "",
    };
  }

  render() {
    const btnClick = () => {
      //this.props.navigation.navigate("pantalla2");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          console.log(xhttp.responseText);
        }
      };
      xhttp.open("GET", "http://148.202.152.33/ws_claseaut.php?codigo=" + this.state.codigo+"&nip="+this.state.nip, true);
      xhttp.send();
    }

    return (
      <View>
        <Text style={styles.textoudg}> UDG </Text>
        <Image style={styles.logo} source={require("./Images/udg.png")} />
        <TextInput style={styles.input} placeholder="Codigo" onChangeText={codigo => this.setState({ codigo })}></TextInput>
        <TextInput style={styles.input} placeholder="NIP" onChangeText={nip => this.setState({ nip })} secureTextEntry={true}></TextInput>
        <View style={styles.button}>
          <Button title="Entrar" onPress={btnClick}></Button>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  button: {
    width: 100,
    marginTop: 20,
    marginLeft: 140,
  },
  input: {
    borderWidth: 2,
    fontSize: 30,
    marginTop: 20
  },
  logo: {
    width: 200,
    height: 300,
    resizeMode: "center",
    marginLeft: 110,
  },
  textoudg: {
    fontSize: 30,
    color: "orange",
    textAlign: "center",
  },
});
