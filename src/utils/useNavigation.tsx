import { useContext } from "react";
import { NavigationScreenProp, NavigationContext, NavigationParams, NavigationRoute } from "react-navigation";


export function useNavigation() {

  return useContext(NavigationContext) as NavigationScreenProp<NavigationRoute, NavigationParams>
}
