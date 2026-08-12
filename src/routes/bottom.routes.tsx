import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import SearchScreen from '../pages/searchScreen';
import CustomTabBar from '../components/customTabBar';
import Favorites from '../pages/Favorites';
import Settings from '../pages/Definitions';
import { AuthProviderList } from '../context/authContext_list';

const Tab = createBottomTabNavigator();

export default function bottomRoutes(){
    return(
        <AuthProviderList>
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
                name = "Favorites"
                component={Favorites}
            />
            <Tab.Screen
                name = "Settings"
                component={Settings}
            />
        </Tab.Navigator>
        </AuthProviderList>
    )
};