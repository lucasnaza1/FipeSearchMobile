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
import { useNavigation, NavigationProp } from "@react-navigation/native"

export default function Login() {

const navigation = useNavigation<NavigationProp<any>>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true)
  const [loading, setLoading] = useState(false);

  async function getLogin() {
  setLoading(true);
  try {
    if (!email || !password || email.trim() === "" || password.trim() === "") {
      Alert.alert("Atenção!", "Informe os campos obrigatórios!!");
      return;
    } /*else if (!email.includes("@") || !email.includes(".com")) {
      Alert.alert("Atenção!", "Informe um e-mail válido!!");
      return;
    }*/

    // Futuramente conversará com chamada real de API para validar login, mas por enquanto, vamos simular a validação com um setTimeout.
    const isValid = await new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(email === "a" && password === "a");
      }, 1000);
    });

    if (isValid) {
      Alert.alert("Logado com Sucesso!");
      navigation.navigate("BottomRoutes");
    } else {
      Alert.alert("Atenção!", "Usuário ou Senha inválido!");
    }
  } catch (error) {
    console.log(error);
    Alert.alert("Erro", "Não foi possível realizar o login. Tente novamente.");
  } finally {
    setLoading(false);
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
