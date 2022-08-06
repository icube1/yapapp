import React, {useEffect, useState } from "react";
import {View, Text, StyleSheet, Dimensions, Image, ScrollView, FlatList} from 'react-native';

import {useNavigation} from '../utils'

import { connect } from "react-redux";
import {ButtonWithIcon, SearchBar, CategoryCard} from "../components";
import { onAvailability, UserState, ApplicationState, ShoppingState } from "../redux";


interface HomeProps{
  userReducer: UserState,
  shoppingReducer: ShoppingState,
  onAvailability: Function
 }


export const _HomeScreen: React.FC<HomeProps> = (props) => {

  const { navigate } = useNavigation();

  const { location } = props.userReducer;
  const { availability } = props.shoppingReducer;

  const { categories, foods, restaurant } = availability;
  console.log(foods)

  useEffect(() => {
    props.onAvailability(location.postalCode)
  }, [])


    return (
        <View style={styles.container}>
          <View style={styles.navigation}>
            <View style={styles.topBar} >
              <Text>{location.city},{location.street},{location.name}</Text>
              <Text>Edit</Text>
            </View>
            <View style={styles.searchBar}>
              <SearchBar
                onTextChange={() => {}}
                didTouch={() => {
                  navigate('SearchPage')
                }}
              />
              <ButtonWithIcon onTap={ () => {} } icon={require('../images/list.png')} width={30} height={20} />
            </View>
          </View>
          <View style={styles.body}>
            <ScrollView>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                renderItem={({ item }) => <CategoryCard item={item} onTap={() => { alert('category tapped') }}/>}
                keyExtractor={(item) => `${item.id}`}
              />
            </ScrollView>
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
    backgroundColor: 'white',
    justifyContent: "space-around",
    height: 60,
    flexDirection: 'row',
    alignItems: "center",
    marginLeft: 4
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'

  },
  footer: {
    flex: 1,
    backgroundColor: 'cyan',
    paddingTop: 5
  }
})

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.userReducer,
  shoppingReducer: state.shoppingReducer
})

const HomeScreen = connect(mapToStateProps, {onAvailability})(_HomeScreen)

export {HomeScreen}

