import React from "react";
import { themes } from "../../global/themes";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Octicons from '@expo/vector-icons/Octicons';

export default ({state, navigation}: BottomTabBarProps) => { 
    return (
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem}>
                <Octicons name="three-bars" size={30} color={themes.colors.secundary} />
                <Text>Esquerda</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem}>
                <Text>Centro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem}>
                <Text>Direita</Text>
            </TouchableOpacity>
        </View>
    )
}