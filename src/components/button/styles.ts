import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
        button: {
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.secundary,
        borderRadius: 30,
        borderColor: themes.colors.secundary,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,  
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: themes.colors.primary
    },
});