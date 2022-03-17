import React, {useEffect, useState } from "react";
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

import { connect } from "react-redux";
import { onAvailability, UserState, ApplicationState, ShoppingState } from "../redux";


interface HomeProps{
  userReducer: UserState,
  shoppingReducer: ShoppingState,
  onAvailability: Function
 }


export const _HomeScreen: React.FC<HomeProps> = (props) => {

  const { location } = props.userReducer;
  const { availability } = props.shoppingReducer;

  const { categories, foods, restaraunts } = availability;
  console.log(foods)

  useEffect(() => {
    props.onAvailability(location.postalCode)
  }, [])


    return (
        <View style={styles.container}>
          <View style={styles.navigation}>
            <View style={styles.topBar} >
              <Text>{location.city},{location.street},{location.name}</Text>
              <Text>  edit</Text>
            </View>
            <View style={styles.searchBar}>
            <Text>Search bar</Text>
            </View>
          </View>
          <View style={styles.body}>
            <Text>Home Screen</Text>
          </View>
          <View style={styles.footer}>
            <Text>Footer</Text>
          </View>

        </View>
    )
}

const styles = StyleSheet.create({
  topBar: {
    marginTop: 30,
    flex: 4,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
  },
  searchBar: {
    flex: 8,
    backgroundColor: 'green'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  navigation: {
    flex: 2,
    backgroundColor: 'red'
  },
  body: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  footer: {
    flex: 1,
    backgroundColor: 'cyan'
  }
})

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.userReducer,
  shoppingReducer: state.shoppingReducer
})

const HomeScreen = connect(mapToStateProps, {onAvailability})(_HomeScreen)

export {HomeScreen}

