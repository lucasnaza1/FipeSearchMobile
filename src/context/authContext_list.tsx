import React, {createContext, useContext} from "react";
import { Alert } from "react-native";

export const AuthContextList:any = createContext({});

export const AuthProviderList = (props : any) => {
    
    const onOpen = () => {
        Alert.alert("Atenção!", "Você precisa estar logado para acessar essa funcionalidade!");
    
    return (
        <AuthContextList.Provider value={{}}>
            {props.children}
        </AuthContextList.Provider>
    )
}

export const useAuthList = () => useContext(AuthContextList);