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
    }
});
