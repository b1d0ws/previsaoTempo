import { View, Text, StyleSheet}from 'react-native'
import React from 'react'

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Aluno - Eduardo Bido</Text>
      <Text style={styles.texto}>RA - 1120757</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, texto: {
      fontSize: 30
  }
})