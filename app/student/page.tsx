import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import Login from "@/components/login";
import { useAluno } from "@/constants/context/AlunoContext";
import { validateEmail } from "@/constants/validaEmail/validate";
import { useRouter, Link } from "expo-router";
import { GetAlunoByEmail } from "@/constants/fetchAluno/fetchAluno";
import styles from "@/constants/style/style";
import colors from "@/constants/colors/colors";
import { Ionicons } from "@expo/vector-icons";
import NavBar from "@/components/NavBar";

const page = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { login } = useAluno();
  const router = useRouter();

  const isDisabled = !email || !validateEmail(email);

  const handleLogin = async () => {
    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    };
    const { message, error } = await GetAlunoByEmail(options);

    if (message) {
      login(message);
      setEmail("");
      router.push("/student/nota/page");
    } else if (error) {
      setError(error);
    }
  };

  return (
    <>
      <NavBar />
      <ImageBackground
        source={require("../../assets/images/aluno.png")}
        style={styles.background}
      >
        {error && <Text style={styles.error}>{error}</Text>}
        <View style={styles.containerProfile}>
          <Text style={styles.text}>Login Aluno</Text>
          <Login
            placeholder="Email"
            value={email}
            onChangeText={(e) => setEmail(e)}
            onPress={handleLogin}
            color={colors.primary}
            disabled={isDisabled}
          />
          <Link href="/profile" style={styles.link}>
            <Ionicons name="arrow-back" size={24} color={colors.secondary} />
            <Text style={styles.link}>Perfil</Text>
          </Link>
        </View>
      </ImageBackground>
    </>
  );
};

export default page;
