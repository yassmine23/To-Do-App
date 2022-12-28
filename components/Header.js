import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>My ToDos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
header:{
    backgroundColor: '#579BB1',
    paddingTop:40,
    height:90
},
title:{
    textAlign:'center',
    fontWeight:'bold',
    color:'#fff',
    fontSize:20
}
})