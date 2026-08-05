import React from "react";
import { TouchableHighlightProps, TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import { style } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { themes } from "../../global/themes";

type Props = TouchableHighlightProps & {
    text : string, 
    loading?: boolean
}

export function Button({...rest}:Props) { 
    return (
        <TouchableOpacity 
            style = {style.button}
            {...rest}
            >
                <LinearGradient
                colors={themes.gradients.headerScreen.colors}
                start={themes.gradients.headerScreen.start}
                end={themes.gradients.headerScreen.end}
                style={style.button}
                >
                    {rest.loading?<ActivityIndicator/>:<Text style = {style.textButton}>{rest.text}</Text>}
                </LinearGradient>
        </TouchableOpacity>
    )
}