import { themes } from "../../global/themes";

import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
        boxInput: {
                width: '100%' ,
                height: 40,
                borderWidth: 1,
                borderRadius: 20,
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
                backgroundColor: themes.colors.secundaryHiden,
                borderColor: themes.colors.secundary
            },
        input: {
                height: "100%",
                width: "90%",
                borderRadius: 20,
                paddingLeft: 5     
    },
        titleInput: {
                marginLeft: 5,
                color: themes.colors.texts,
                marginTop: 20
    }, 
        Icon: {
            width: '100%'
        }

});