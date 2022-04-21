import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'

export default function PrevisaoMenu(props) {

    const date = require('date-and-time')
    const data = props.dados
    const id = data.id
    const [nomeCidade, setnomeCidade] = useState("")
    const [resumo, setresumo] = useState()
    const [max, setMax] = useState()
    const [min, setMin] = useState()
    const now  =  new Date();
    const dataHoje = date.format(now,'DD/MM/YYYY');
   

    useLayoutEffect(() => {
        setnomeCidade(data[id][dataHoje].manha.entidade)        
        setresumo(data[id][dataHoje].manha.resumo)
        setMax(data[id][dataHoje].manha.temp_max)
        setMin(data[id][dataHoje].manha.temp_min)
    }, [])


  return (
    <TouchableOpacity onPress={ () => props.navigation.navigate("Dados", data)}>

    <View style={styles.cities}>
      <View style={styles.line}>
        <View style={styles.column}>
          <Text style={styles.city}>{nomeCidade}</Text> 
          <Text>{resumo}</Text>
        </View>
        <View style={styles.column}>
          <View style={styles.line}>
            <Text style={styles.temp}>Temperatura Máxima:</Text>
            <Text style={styles.temp}>{max}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.temp}>Temperatura Mínima:</Text>
            <Text style={styles.temp}>{min}</Text>
          </View>
        </View> 
      </View>
    </View>          
  </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: "#262626",
  },
  cities: {
    padding: 10,
    borderWidth: 3,
    margin: 10,
    borderColor: "black"
    }, city: {
      fontWeight: 'bold',
      fontSize: 20
    }, line: {
      flexDirection: "row"
    }, temp: {
      textAlign: "right",
      marginTop: 3
    }, column: {
      flex: 2
    }
  
  });