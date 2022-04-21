import { View, Text, StyleSheet , ScrollView} from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import PrevisaoCidade from '../components/PrevisaoCidade'

export default function Dados(props) {

    const date = require('date-and-time')
    const data = props.route.params
    const id = data.id
    const [nomeCidade, setnomeCidade] = useState("")
    const [resumo, setresumo] = useState()
    const [max, setMax] = useState()
    const [min, setMin] = useState()
    const now  =  new Date();
    const dia = date.format(now,'DD/MM/YYYY');

    useLayoutEffect(() => {
        props.navigation.setOptions({
          title: data[id][dia].manha.entidade
        })

        setnomeCidade(data[id][dia].manha.entidade)
        setMax(data[id][dia].manha.temp_max)
        setMin(data[id][dia].manha.temp_min)

      }, [])


  return (
    <View style={styles.container}>

      <View style={styles.columnbox}> 
          <Text style={{fontSize: 35, fontWeight: 'bold',}}>{nomeCidade}</Text>
          <Text style={{fontSize: 15, textAlign: 'center', width:200}}>{resumo}</Text>
          <Text>Temperatura Máxima: {max}º</Text>
          <Text>Temperatura Mínima: {min}º</Text>
      </View>
      <View style={{flex: 3}}>

        <ScrollView> 

          <PrevisaoCidade
          titulo="Manhã"
          data={data[id][dia].manha}
          />

          <PrevisaoCidade
          titulo="Tarde"
          data={data[id][dia].tarde}
          />

          <PrevisaoCidade 
          titulo="Noite"
          data={data[id][dia].noite}
          />

        </ScrollView>   
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  }, 
  linebox: {
    flexDirection: "row",
    padding:20,
    shadowColor: "black",
    borderRadius: 4,

  },
  line:{
    flex:1
  },
  columnbox: {
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
  column:{
    flex:1
  }

})