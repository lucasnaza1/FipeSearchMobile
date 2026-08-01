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
        paddingTop: 30
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
    textQuestionAccount: {
        fontSize: 16,
        color: themes.colors.texts
    },
})