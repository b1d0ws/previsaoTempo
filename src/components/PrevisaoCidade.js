import { View, Text,StyleSheet} from 'react-native'
import React, { useLayoutEffect, useState } from 'react';

export default function PrevisaoCidade(props) {

    const data = props.data
    const [titulo, setTitulo] = useState("")
    
    useLayoutEffect(() => {
        if (props.titulo)
            setTitulo(props.titulo)
    }, [])

    return (
            <View style={styles.box2}>  
                    <Text style={styles.titulo}>{titulo}</Text> 
                    <Text>{data.resumo}</Text>                  
                    <Text>Ventos: {data.int_vento} {data.dir_vento}</Text>
                    <Text>Umidade: {data.umidade_min} - {data.umidade_max}</Text>
            </View>       
    )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      flex:1,
    }, 
    box2:{
        marginHorizontal:20,
        marginBottom: 20,
        borderWidth: 3,
        borderColor: "black",
        alignItems: 'center',
    },
    line:{
        flexDirection: "row",
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }, titulo: {
        fontWeight: "bold",
        fontSize: 15
    }

  })