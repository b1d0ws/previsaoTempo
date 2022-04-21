import { View, StyleSheet,FlatList,Button } from 'react-native'
import React, { useState, useLayoutEffect} from 'react';
import PrevisaoMenu from '../components/PrevisaoMenu';
import { getPrevisao } from '../services/PrevisaoAPI';

export default function Home({navigation}) {
    
    const [prevCidade, setprevCidade] = useState()
    const codigos = ["4320800","4304705", "4311809", "4307005", "4314100"]
    
    const lista = []

    useLayoutEffect(() => {
        codigos.map((item) => {
            getPrevisao(item)
            .then((data) => {
                data["id"] = item
                lista.push(data)
                setprevCidade(lista)
            })
            .catch(erro => console.log(erro))
            
    })
    
    navigation.setOptions({
        headerRight: () => (
          <Button onPress={() => navigation.navigate("Sobre")} title="Sobre" color='black'/>
        ),
      });
    }, []);

    return (

            <View style={styles.container}> 
                <View > 
                    <FlatList
                    data={prevCidade}
                    renderItem={ ({item}) => {
                        return <PrevisaoMenu
                        dados={item}
                        navigation={navigation}
                        />
                    }}
                    keyExtractor={item => item.id}
                    />
                </View>
            </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 
    
});
