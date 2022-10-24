import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./src/img/pessoas.png')}
          style={styles.imgLogin}
        />
        <Text style={styles.txtBemVindo}>Seja bem-vindo!</Text>
        <View style={{ alignSelf: 'center' }}>
          <Text style={styles.txtCampos}>E-mail</Text>
          <View style={{ paddingBottom: 5 }}>
            <TextInput style={styles.input}
              underlineColorAndroid="transparent" />
          </View>
          <Text style={styles.txtCampos}>Senha</Text>
          <View style={{ paddingBottom: 5 }}>
            <TextInput style={styles.input}
              underlineColorAndroid="transparent" />
          </View>
          <View style={{ paddingTop: 25, paddingBottom: 20 }}>
            <TouchableOpacity style={styles.btnEntrar}>
              <View style={styles.btnArea}>
                <Text style={styles.btnEntrarTexto}>Entrar</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.txtConta}>Não possui uma conta?</Text>
          <View style={{ paddingBottom: 15 }}>
            <TouchableOpacity style={styles.btnCadastrar}>
              <View style={styles.btnArea}>
                <Text style={styles.btnCadastrarTexto}>Clique aqui para se cadastrar</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.txtEsqueceuSenha}>Esqueceu a senha?</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  imgLogin: {
    alignSelf: 'center',
    width: 302.45,//Adicionado 15% em relação ao valor original.
    height: 230//Adicionado 15% em relação ao valor original.
  },
  txtBemVindo: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18.4,//Adicionado 15% em relação ao valor original.
    lineHeight: 27.6,//Adicionado 15% em relação ao valor original.
    textAlign: 'center',
    color: '#294C81'
  },
  txtCampos: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16.1,//Adicionado 15% em relação ao valor original.
    lineHeight: 24.15,//Adicionado 15% em relação ao valor original.
    color: '#294C81',
    paddingBottom: 10
  },
  input: {
    boxSizing: 'border-box',
    width: 333.5,//Adicionado 15% em relação ao valor original.
    height: 46,//Adicionado 15% em relação ao valor original.
    backgroundColor: '#E4E7F0',
    borderWidth: 2.3,//Adicionado 15% em relação ao valor original.
    borderColor: '#6A89B9',
    borderStyle: 'solid',
    borderRadius: 57.5,//Adicionado 15% em relação ao valor original.
    paddingLeft: 10
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnEntrar: {
    width: 335.8,//Adicionado 15% em relação ao valor original.
    height: 46,//Adicionado 15% em relação ao valor original.
    backgroundColor: '#EBAD35',
    borderRadius: 57.5//Adicionado 15% em relação ao valor original.
  },
  btnEntrarTexto: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18.4,//Adicionado 15% em relação ao valor original.
    lineHeight: 27.6,//Adicionado 15% em relação ao valor original.
    color: "#FFFFFF"
  },
  txtConta: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16.1,//Adicionado 15% em relação ao valor original.
    lineHeight: 24.15,//Adicionado 15% em relação ao valor original.
    color: '#000000',
    textAlign: 'center',
    paddingBottom: 20
  },
  btnCadastrar: {
    width: 335.8,//Adicionado 15% em relação ao valor original.
    height: 46,//Adicionado 15% em relação ao valor original.
    backgroundColor: '#294C81',
    borderRadius: 57.5//Adicionado 15% em relação ao valor original.
  },
  btnCadastrarTexto: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16.1,//Adicionado 15% em relação ao valor original.
    lineHeight: 24.15,//Adicionado 15% em relação ao valor original.
    color: '#FFFFFF'
  },
  txtEsqueceuSenha: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16.1,//Adicionado 15% em relação ao valor original.
    lineHeight: 24.15,//Adicionado 15% em relação ao valor original.
    color: "#294C81",
    textAlign: 'center'
  }
})

export default App;