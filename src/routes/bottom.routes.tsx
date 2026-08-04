import {
  createBottomTabNavigator,
  createBottomTabScreen,
} from '@react-navigation/bottom-tabs';
import SearchScreen from '../pages/searchScreen';
import VehicleDetails from '../pages/vehicleDetails';
import CustomTabBar from '../components/customTabBar';

const Tab = createBottomTabNavigator();

export default function bottomRoutes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown:false 
            }} 
            tabBar={prop => <CustomTabBar {...prop}/>}
            >
            <Tab.Screen
                name = "SearchScreen"
                component={SearchScreen}
            />
            <Tab.Screen
                name = "VehicleDetails"
                component={VehicleDetails}
            />
        </Tab.Navigator>
    )
};