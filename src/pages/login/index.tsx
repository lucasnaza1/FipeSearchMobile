import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

import { style } from "./styles";
import { themes } from "../../global/themes";
import Logo from "../../assets/logo-header-128x128.png";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Input } from "../../components/input";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "../../components/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true)
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);
      if (!email || !password) {
        return Alert.alert("Atenção!", "Informe os campos obrigatórios!!");
      }

      setTimeout(() => {
        if (email == "mail.tomail@mail.com" && password == "123456") {
          Alert.alert("Logado com Sucesso!");
        } else {
          Alert.alert("Usuário ou Senha inválido!");
        }
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.text}>Busque. Compare. Decida.</Text>
      </View>
      <View style={style.boxMid}>
        <Input
          value={email}
          onChangeText={setEmail}
          title="E-MAIL: "
          IconRight={MaterialIcons}
          IconRightName="email"
        />
        <Input
          value={password}
          onChangeText={setPassword}
          title="SENHA: "
          IconRight={AntDesign}
          IconRightName={showPassword? "eye-invisible" : "eye"}
          secureTextEntry= {showPassword}
          onIconRightPress={() => setShowPassword(!showPassword)}
        />
        <TextInput />
      </View>
      <View style={style.boxButton}>
        <Button 
          text="ACESSAR"
          loading= {loading}
          onPress={() => getLogin()}
          />
      </View>
      <Text style={style.textQuestionAccount}>
        Não tem conta?{" "}
        <Text style={{ color: themes.colors.secundary }}>Crie uma nova</Text>
      </Text>
    </View>
  );
}
