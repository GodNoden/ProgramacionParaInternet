import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let _this = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status) {
        console.log(xhttp.responseText);
        var myArr = JSON.parse(this.responseText);
        _this.setState({users: myArr});
      }
    };
    xhttp.open('GET', 'https://myawesomewebsitebynoe.000webhostapp.com/mostrarDatos.php', true);
    xhttp.send();
  }

  render() {
    const getItem = name => {
      console.log(name);
    };
    const renderUser = ({item}) => {
      return (
        <View style={{margin: 10, borderWidth: 0.5, padding: 10}}>
          <TouchableOpacity onPress={() => getItem(item.id)}>
            <Text style={{color: 'black', fontsize: 16, fontWeight: 'bold'}}>
              User {item.id}
            </Text>
            <Text style={{color: 'black'}}>Nombre :</Text>
            <Text style={{color: 'black'}}>Tarea :</Text>
            <Text style={{color: 'black'}}>Codigo :</Text>
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <View>
        <Text style={{fontSize: 16}}>
          {' '}
          Bienvenido: {this.props.route.params.nombre}{' '}
        </Text>
        <Text style={{fontsize: 16}}> {this.props.route.params.codigo} </Text>
      </View>
    );
  }
}
