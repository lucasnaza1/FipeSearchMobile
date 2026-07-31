import React, { forwardRef, Fragment, ForwardedRef} from "react";
import { View, Text, TextInput, TextInputProps, TouchableOpacity, } from "react-native";
import { style } from "./styles"
import AntDesign from '@expo/vector-icons/AntDesign';
import { themes } from "../../global/themes";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


type IconComponent =    React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                        React.ComponentType<React.ComponentProps<typeof AntDesign >>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void
}

export const Input = forwardRef((props : Props, ref: ForwardedRef<TextInput> | null) => {
    
    const {IconLeft, IconRight, IconLeftName, IconRightName, title, onIconLeftPress, onIconRightPress, ...rest} = props
    
    const calculateWidthSize = () => {
        if (IconLeft && IconRight) {
            return '80%'
        } else if (IconLeft || IconRight) {
            return '90%'
        } else {
            return '100%'
        }
    }

    const calculatePaddingSize = () => {
        if (IconLeft && IconRight) {
            return 0;
        } else if (IconLeft || IconRight) {
            return 0.5;
        } else {
            return 1;
        }
    }

    return (
               <Fragment>   
               <Text style={style.titleInput}> { title } </Text>     
                    <View style = {[style.boxInput, {padding:calculatePaddingSize()}]}>
                        {IconLeft && IconLeftName &&(
                        <TouchableOpacity onPress={onIconLeftPress}>
                            <IconLeft name = {IconLeftName as any} size={20} color={themes.colors.secundary} style={style.Icon}></IconLeft>
                        </TouchableOpacity>
                        )}
                            <TextInput 
                                style = {[ style.input, {width:calculateWidthSize()}]}
                                {...rest}
                            />
                        {IconRight && IconRightName &&(
                            <TouchableOpacity onPress={onIconRightPress}>
                                <IconRight name = {IconRightName as any} size={20} color={themes.colors.secundary} style={style.Icon}></IconRight>
                            </TouchableOpacity>
                        )}
                        </View>
                </Fragment>
    )
})