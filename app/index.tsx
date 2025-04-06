import React, { useState } from "react";
import {
  Text,
  View,
  Pressable,
  ImageBackground,
  Alert,
} from "react-native";
import styles from "@/constants/style/style";
import { Ionicons } from "@expo/vector-icons";
import colors from "@/constants/colors/colors";
import { useRouter, Link } from "expo-router";
import { FetchDiretor } from "@/constants/fetchDiretor/fetchDiretor";
import Inputs from "@/components/Inputs";


export default function Login() {
  const route = useRouter();

  const [email, setEmail] = useState("");
  const [nome, setName] = useState("");
  const [error, setError] = useState("");

  const handleRoute = () => {
    route.push("/profile");
  };

  const handleRegister = async () => {
    if (!email || !nome) {
      Alert.alert("Please enter a value");
    } else {
      const headers = { "Content-Type": "application/json" };
      const body = JSON.stringify({ email, nome });
      const method = 'POST';

      const options = {
        method,
        headers,
        body,
      }
      try {
          const { message } = await FetchDiretor(options);
          if(message){
            setEmail('')
            setName('')
            route.push("/profile")
          }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Ocorreu um erro desconhecido.");
        }
      }
    }
  };
  return (
    <>
      <Pressable style={styles.backStyle} onPress={handleRoute}>
        <Ionicons name="arrow-back" size={24} color={colors.secondary} />
      </Pressable>
      <ImageBackground
        source={require("../assets/images/school__.png")}
        style={styles.background}
      >
        <View style={styles.containerIndex}>
          <Text style={styles.text}>Registrar Diretor</Text>
          {error && <Text>{error}</Text>}
          <Inputs 
            placeholder="Email"
            value={email}
            onChangeText={(e) => setEmail(e)}
            placeholder1="Nome"
            value1={nome}
            onChangeText1={(e) => setName(e)}
          />
          <Pressable onPress={handleRegister} style={styles.button}>
            <View style={styles.textButton}>
              <Ionicons name="arrow-up" size={24} color={colors.textPrimary} />
            </View>
          </Pressable>
          <Link href="/profile" style={styles.link}>
            <Ionicons name="log-in" size={24} color={colors.secondary} />
            <Text style={styles.link}>Login</Text>
          </Link>
        </View>
      </ImageBackground>
    </>
  );
}
