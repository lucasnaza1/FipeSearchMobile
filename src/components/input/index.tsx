import React, { forwardRef, Fragment, ForwardedRef} from "react";
import { View, Text, TextInput, TextInputProps, } from "react-native";
import { style } from "./styles"
import AntDesign from '@expo/vector-icons/AntDesign';
import { themes } from "../../global/themes";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


type IconComponent =    React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                        React.ComponentType<React.ComponentProps<typeof AntDesign >>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    IconLeftName: string,
    IconRightName: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void
}

export const Input = forwardRef((props : Props, ref: ForwardedRef<TextInput> | null) => {
    return (
               <Fragment>   
               <Text style={style.titleInput}>E-MAIL: </Text>     
                    <View style = {style.boxInput}>
                            <TextInput 
                            style = {style.input}
                            />
                           <AntDesign 
                           name="eye" 
                           size={24} 
                           color={themes.colors.secundary}/>
                        </View>
                </Fragment>
    )
})