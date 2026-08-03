import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../pages/searchScreen";
import VehicleDetails from "../pages/vehicleDetails";
import Login from "../pages/login";

export default function Routes(){
    const Stack = createStackNavigator()
    
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name = "login"
                component = {Login}
            />         
            <Stack.Screen 
                name = "search-screen"
                component = {SearchScreen}
            />
            <Stack.Screen 
                name = "vehicle-details"
                component = {VehicleDetails}
            />
         </Stack.Navigator>   
    )
}