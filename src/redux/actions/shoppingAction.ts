import axios from "axios";
import { LocationGeocodedAddress } from "expo-location";
import { Dispatch } from "react";
import { BASE_URL } from "../../utils";
import { FoodAvailability } from "../models";


export interface AvailabilityAction{
  readonly type: 'ON_AVAILABILITY',
  payload: FoodAvailability
}

export interface ShoppingErrorAction{
  readonly type: 'ON_SHOPPING_ERROR',
  payload: any
}

export type ShoppingAction = AvailabilityAction | ShoppingErrorAction;

export const onAvailability = (postCode: string) => {
  console.log(postCode)
  return async (dispatch: Dispatch<ShoppingAction>) => {

    try {

      const response = await axios.get<FoodAvailability>(`${BASE_URL}/food/availability/${postCode}`)


      if(!response) {
        dispatch({
          type: 'ON_SHOPPING_ERROR',
          payload: 'Availability error'
        })
      } else {
       //сохранение местоположения на устройстве
       dispatch({
         type: 'ON_AVAILABILITY',
         payload: response.data
       })
      }


    } catch (error) {
      dispatch({
        type: 'ON_SHOPPING_ERROR',
        payload: error
      })

    }
  }
}

