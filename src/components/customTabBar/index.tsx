import React from "react";
import { themes } from "../../global/themes";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

export default ({state, navigation}: BottomTabBarProps) => { 
    return (
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem}>
                <FontAwesome5 name="search" size={30} color={themes.colors.secundary} />
                <Text style={style.tabText}>Buscar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem}>
                <FontAwesome name="heart" size={30} color={themes.colors.secundary} />
                <Text style={style.tabText}>Favoritos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem}>
                <Ionicons name="settings-sharp" size={30} color={themes.colors.secundary} />
                <Text style={style.tabText}>Definições</Text>
            </TouchableOpacity>
        </View>
    )
}