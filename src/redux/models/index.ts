import { LocationGeocodedAddress } from "expo-location";
//категория
export interface Category{
  id: string;
  title: String;
  icon: String;
}


//меню

export interface FoodModel{
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: [string];
}

//ресторан

export interface Restaurant{
  _id: string;
  name: string;
  foodType: string;
  adress: string;
  phone: string;
  images: string;
  foods: [FoodModel];
}

export interface FoodAvailability{
  categories: [Category];
  restaurant: [Restaurant];
  foods: [FoodModel];
}

//todo: позже изменить

//пользователь
export interface UserModel{
  firstName: string;
  lastName: string;
  contactNumber: string;
  token: string;
}

export interface UserState{
  user: UserModel;
  location: LocationGeocodedAddress;
  error: string | undefined;
}

export interface ShoppingState{
  availability: FoodAvailability,
  //другие модели
}
