import React, {useState, useReducer, useEffect} from "react";
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

import * as Location from 'expo-location';

const screenWidth = Dimensions.get('screen').width;

export const LandingScreen = () => {

  const [errorMsg, setErrorMsg] = useState('');
  const [adress, setAdress] = useState<Location.LocationGeocodedAddress>();

  const [displayAdress, setDisplayAdress] = useState('Ожидание получения адреса...');

  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to acces location is not granted')
      }

      let location: any = await Location.getCurrentPositionAsync({});
      const { coords } = location;

      if (coords) {
        const {latitude, longitude} = coords;
        let adressResponse: any = await Location.reverseGeocodeAsync({latitude, longitude});

        for(let item of adressResponse) {
          setAdress(item);
          let currentAdress = `${item.name}, ${item.street},${item.country}`;
          setDisplayAdress(currentAdress);
          return;
        }
      }
    } )


    }
  , [])


    return (
        <View style={styles.container}>
          <View style={styles.navigation}>
            <Text>Navigation</Text>
          </View>
          <View style={styles.body}>
            <Image source={require('../images/map-icon.png')} style={styles.deliveryIcon} />
            <View style={styles.adressContainer}>
              <Text style={styles.adressTitle}>Ваш адрес доставки</Text>
            </View>
          </View>

          <Text style={styles.adressText}>{displayAdress}</Text>

          <View style={styles.footer}>
            <Text>Footer</Text>
          </View>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  navigation: {
    flex: 2,
    backgroundColor: 'beige'
  },
  body: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'beige'
  },
  deliveryIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain'

  },
  adressContainer: {
    width: screenWidth - 100,
    borderBottomColor: 'red',
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    alignItems: 'center',

  },

  adressTitle: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '700',
    color: "#7D7D7D",

  },
  adressText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '200',
    color: '#4F4F4F'
  },

  footer: {
    flex: 1,
    backgroundColor: 'beige'
  },

})
