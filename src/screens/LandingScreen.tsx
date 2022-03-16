import React, {useState, useReducer, useEffect} from "react";
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

import * as Location from 'expo-location';
import { useNavigation } from "../utils";

const screenWidth = Dimensions.get('screen').width;

export const LandingScreen = () => {

  const { navigate } = useNavigation();

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
          let currentAdress = `${item.street}, ${item.name}, ${item.city}`;
          setDisplayAdress(currentAdress);

          if(currentAdress.length > 0) {
            setTimeout(() => {
              navigate('homeStack')
            }, 2000);
          }

          return
        }
      }else {
        //поповещение
      }
    })();


    }
  , [])


    return (
        <View style={styles.container}>
          {/* <View style={styles.navigation}><Text>Япония</Text></View> */}
          <View style={styles.body}>
            <Image source={require('../images/map-icon.png')} style={styles.deliveryIcon} />
            <View style={styles.adressContainer}>
              <Text style={styles.adressTitle} >Ваш адрес доставки</Text>
            </View>
            <Text style={styles.adressText}>{displayAdress}</Text>
          </View>

          {/* <View style={styles.footer}>
            <Text>Footer</Text>
          </View> */}

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  navigation: {
    flex: 2,
    backgroundColor: 'beige',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  body: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  deliveryIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',

  },
  adressContainer: {
    width: screenWidth - 100,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    alignItems: 'center'

  },

  adressTitle: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '700',
    color: "#7D7D7D",
    textAlign: 'center'
  },
  adressText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '200',
    color: 'grey',

  },

  footer: {
    flex: 1,
    backgroundColor: 'beige'
  },

})
