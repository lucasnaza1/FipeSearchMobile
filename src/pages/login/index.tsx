import React from "react";
import {Text,
    View,
    Image,
    TextInput
} from "react-native";
import { style } from "./styles";
import Logo from "../../assets/logo.png";

export default function Login(){
    return (
        <View style = {style.container}>
            <View style = {style.boxTop}>
                <Image
                    source={Logo}
                />
                <Text>Bem-vindo de volta!</Text>
            </View>
            <View style = {style.boxMid}>
                <TextInput>
                    <Text>E-mail: </Text>
                </TextInput>
                <TextInput>
                    <Text>Senha: </Text>
                </TextInput>
            </View>
            <View style = {style.boxBottom}>
                <Text>Bottom</Text>
            </View>
        </View>
    )
}