import React, { useState } from "react";
import {Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from "react-native";

import { style } from "./styles";
import { themes } from "../../global/themes";
import Logo from "../../assets/logo-header-128x128.png";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Input } from "../../components/input";


export default function Login(){
    const [email, setEmail] =  useState(''); 
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    async function getLogin(){
        try {
            setLoading(true)
            if(!email || !password){
                return Alert.alert("Atenção!", "Informe os campos obrigatórios!!")
            }

            setTimeout(() => {
                if(email == 'mail.tomail@mail.com' && password == '123456'){
                    Alert.alert("Logado com Sucesso!")
                } else {
                    Alert.alert("Usuário ou Senha inválido!")
                }
                setLoading(false)
            }, 2000)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style = {style.container}>
            <View style = {style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Busque. Compare. Decida.</Text>
            </View>
            <View style = {style.boxMid}>
                <Text style={style.titleInput}>E-MAIL: </Text>
                <View style = {style.boxInput}>
                    <TextInput 
                    style = {style.input}
                    value = {email}
                    onChangeText={(e)=>setEmail(e)}
                    />
                   <MaterialIcons 
                   name="email" 
                   size={24} 
                   color={themes.colors.secundary} />
                </View>
                    <Text style={style.titleInput}>SENHA: </Text>
                    <Input></Input>
                <TextInput/>
            </View>
            <View style = {style.boxButton}>
                <TouchableOpacity 
                    style={style.button}
                    onPress={() => getLogin()}
                >
                    {loading ? (
                        <ActivityIndicator color={themes.colors.primary} size={'small'} />
                    ) : (
                        <Text style={style.textButton}>Acessar</Text>
                    )}
                </TouchableOpacity>
            </View>
            <Text style={style.textQuestionAccount}>Não tem conta? <Text style={{color: themes.colors.secundary}}>Crie uma nova</Text></Text>
        </View>
    )
}