import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert, Pressable } from "react-native";
import NavBar from "@/components/NavBar";
import { useAuth } from "@/constants/context/AuthContext";
import styles from "@/constants/style/style";
import { useRouter } from "expo-router";
import colors from "@/constants/colors/colors";
import { validateEmail } from "@/constants/validaEmail/validate";
import { Picker } from "@react-native-picker/picker";
import { selects } from "@/constants/selectJson/select";
import Inputs from "@/components/Inputs";
import { FetchProfessor } from "@/constants/fetchProfessor/fetchProfessor";
import { Ionicons } from "@expo/vector-icons";
import Logout from "@/components/Logout";

const page = () => {
  const [nome, setNome] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [email, setEmail] = useState("");
  const { diretor, logout } = useAuth();
  const router = useRouter();

  const isDisabled = !email || !validateEmail(email) || !nome || !disciplina;

  useEffect(() => {
    if (!diretor) {
      router.push("/profile");
    }
  }, [diretor]);

  const handleCadastrar = async () => {
    const { message, error } = await FetchProfessor({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, nome, disciplina }),
    });
    if (message) {
      setEmail("");
      setNome("");
      setDisciplina("");
      Alert.alert("Sucesso", "Professor cadastrado com sucesso!");
    } else if (error) {
      Alert.alert("Erro", error);
    }
  };

  const handleRoute = () => {
    router.push("/professor/cadastro");
  };

  return (
    <>
      <NavBar />
      <Text style={styles.username}>Bem vindo {diretor?.nome}.</Text>
      <Pressable style={styles.backStyle} onPress={handleRoute}>
        <Ionicons name="bag-check" size={24} color={colors.secondary} />
      </Pressable>
      <View style={styles.containerDefault}>
        <Text style={styles.text}>Registrar Professor</Text>
        <Inputs
          placeholder="Email"
          value={email}
          onChangeText={(e) => setEmail(e)}
          placeholder1="Nome"
          value1={nome}
          onChangeText1={(e) => setNome(e)}
        />
        <Picker
          selectedValue={disciplina}
          onValueChange={(itemValue) => setDisciplina(itemValue)}
        >
          {selects.map((option) => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>
        <Button
          title="Cadastrar"
          onPress={handleCadastrar}
          color={colors.primary}
          disabled={isDisabled}
        />
      </View>
      <Logout title="Logout" onPress={() => logout()} />
    </>
  );
};

export default page;
