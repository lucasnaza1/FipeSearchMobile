import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";


export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    boxTop:{
        height: Dimensions.get('window').height/3,
        width: '100%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxMid:{
        height: Dimensions.get('window').height/4,
        width: '100%',    
        paddingHorizontal: 38
    },
    boxButton:{
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    logo: {
        width: 100,
        height: 100
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 40
    },
    titleInput: {
        marginLeft: 5,
        color: themes.colors.texts,
        marginTop: 20
    },
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
    button: {
        width: 180,
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
    textQuestionAccount: {
        fontSize: 16,
        color: themes.colors.texts
    },
})