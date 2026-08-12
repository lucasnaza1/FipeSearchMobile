import React from "react";
import { themes } from "../../global/themes";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from "expo-linear-gradient";
import { useContext } from "react";
import { AuthContextList } from "../../context/authContext_list";


export default ({state, navigation}: BottomTabBarProps) => { 
    
    const { onOpen } = useContext<any>(AuthContextList);

    const go = (screen: string) => {
        navigation.navigate(screen);
    }

    return (
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={() => go("Favorites")}>
                 <FontAwesome name="heart" size={30} style={{opacity: state.index === 1 ? 1 : 0.5, color: themes.colors.secundary, fontSize: 32}} />
                <Text style={style.tabText}>Favoritos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabSearchItem} onPress={() => onOpen()}>
                <LinearGradient
                                colors={themes.gradients.headerScreen.colors}
                                start={themes.gradients.headerScreen.start}
                                end={themes.gradients.headerScreen.end}
                                style={style.tabSearchItem}
                                
                                >
                                <FontAwesome5 name="search" size={40} color={themes.colors.primary} />
                                <Text style={{color: themes.colors.primary, fontSize: 16}}> Buscar</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem} onPress={() => go("Settings")}>
                <Ionicons name="settings-sharp" size={30} style={{opacity: state.index === 2 ? 1 : 0.5, color: themes.colors.secundary, fontSize: 32}}/> 
                <Text style={style.tabText}>Definições</Text>
            </TouchableOpacity>
        </View>
    )
}