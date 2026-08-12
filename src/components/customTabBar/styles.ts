import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    tabArea: {
        flexDirection: "row",
        height: 150,
        backgroundColor: themes.colors.primary,
        justifyContent: "space-around",
    },
    tabItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    tabText: {
        color: themes.colors.secundary,
        fontSize: 16,
        marginTop: 5,
    },
    tabSearchItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: 50,
        zIndex: 9999,
        top: -30,
        shadowColor: "#000",
        shadowOffset: {
	                    width: 0,
	                    height: 12,
                    },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
});
