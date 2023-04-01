import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';


export default function App(){

  const [numero1, setNumero1] = useState()
  const [numero2, setNumero2] = useState()
  const [resultado, setResultado] = useState()

  function calcular(){
    alert(numero1)
    if ( (numero1 === '') || (numero2 === '')){
      alert('É obrigatório digitar os dois números')
      return;
    }

    res = numero1 * numero2
    setResultado(('Resultado: '+ res));
  }


 
    return(
      <View style={styles.area}>

      <Text style={styles.titulo}>Multiplicador de Números</Text>

      <TextInput
      style={styles.input}
      placeholder="Digite o primeiro número"
      onChangeText={ (numero) => setNumero1((numero)) }
      />

      <TextInput
      style={styles.input}
      placeholder="Digite o segundo número"
      onChangeText={ (numero) => setNumero2((numero)) }
      />

      <Button title="Calcular" onPress={calcular} />


      <Text style={styles.texto}> {resultado} </Text>
      </View>
    );
  
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  },
  titulo:{
    fontSize: 18,
    alignSelf: 'center',
    color: 'orange',
    marginTop: 20
  }
})

