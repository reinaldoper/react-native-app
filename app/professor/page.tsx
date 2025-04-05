import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import Login from "@/components/login";
import { useProfessor } from "@/constants/context/ProfessorContext";
import { validateEmail } from "@/constants/validaEmail/validate";
import { useRouter, Link } from "expo-router";
import { LoginProfessor } from "@/constants/fetchProfessor/fetchProfessor";
import styles from "@/constants/style/style";
import colors from "@/constants/colors/colors";
import { Ionicons } from "@expo/vector-icons";
import NavBar from "@/components/NavBar";

const page = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { login } = useProfessor();
  const router = useRouter();

  const isDisabled = !email || !validateEmail(email);

  const handleLogin = async () => {
    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    };
    const { message, error } = await LoginProfessor(options);

    if (message) {
      login(message);
      setEmail("");
      router.push("/professor/cadastro-alunos/page");
    } else if (error) {
      setError(error);
    }
  };

  return (
    <>
      <NavBar />
      <ImageBackground
        source={require("../../assets/images/professor.png")}
        style={styles.background}
      >
        {error && <Text style={styles.error}>{error}</Text>}
        <View style={styles.containerProfile}>
          <Text style={styles.text}>Login Diretor</Text>
          <Login
            placeholder="Email"
            value={email}
            onChangeText={(e) => setEmail(e)}
            title="Entrar"
            onPress={handleLogin}
            color={colors.primary}
            disabled={isDisabled}
          />
          <Link href="/profile" style={styles.link}>
            <Ionicons name="arrow-back" size={24} color={colors.secondary} />
            <Text style={styles.link}>Profile</Text>
          </Link>
        </View>
      </ImageBackground>
    </>
  );
};

export default page;
