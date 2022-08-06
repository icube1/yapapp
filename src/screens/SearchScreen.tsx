import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import { ApplicationState, FoodModel, ShoppingState, UserState } from '../redux'


interface SearchScreenProps {
  userReducer: UserState,
  shoppingReducer: ShoppingState,
  onUpdateCart: Function,

}
const SearchScreen: React.FC<SearchScreenProps> = (props) => {
return (
  <View style={styles.container}>
    <View style={styles.navigation}><Text> Navigation</Text></View>
    <View style={styles.body}><Text> Search Screen </Text></View>
    <View style={styles.footer}><Text> Footer content</Text></View>
  </View>)}


const styles = StyleSheet.create({
container: {flex: 1, backgroundColor: 'white'},
navigation: {flex: 2, backgroundColor: 'red'},
body: {flex: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow'},
footer: {flex: 1, backgroundColor: 'cyan'}
});

export { SearchScreen }
