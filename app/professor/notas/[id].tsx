import React, { useState } from "react";
import { View, Text, Button, Pressable, Alert } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import styles from "@/constants/style/style";
import { semestre } from "@/constants/selectJson/select";
import { Picker } from "@react-native-picker/picker";
import NavBar from "@/components/NavBar";
import Logout from "@/components/Logout";
import { useProfessor } from "@/constants/context/ProfessorContext";
import colors from "@/constants/colors/colors";
import InputText from "@/components/InputText";
import { Ionicons } from "@expo/vector-icons";
import { FetchNotas } from "@/constants/fetchNotas/fetchNotas";

const notas = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { logout } = useProfessor();
  const [mes, setMes] = React.useState("");
  const [nota, setNota] = useState("");
  console.log(nota);
  

  const isDisabled = !mes || !nota;
  const handleCadastrar = async () => {
    const alunoId = Number(id);
    const { message, error } = await FetchNotas({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ valor: Number(nota), semestre: mes, alunoId }),
    });

    if (message) {
      setNota("");
      router.push("/professor/cadastro-alunos/page");
    } else if (error) {
      Alert.alert("Erro", error);
    }
  };

  const handleRoute = () => {
    router.push("/professor/cadastro-alunos/page");
  };

  return (
    <>
      <NavBar />
      <Pressable style={styles.backStyle} onPress={handleRoute}>
        <Ionicons name="arrow-back" size={24} color={colors.secondary} />
      </Pressable>
      <View style={styles.containerDefault}>
        <Text style={styles.text}>Registrar Nota</Text>
        <InputText
          placeholder="Digite a nota"
          value={nota}
          onChangeText={(e) => setNota(e)}
        />
        <Picker
          selectedValue={mes}
          onValueChange={(itemValue) => setMes(itemValue)}
        >
          {semestre.map((option) => (
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
      <Logout title="📴" onPress={() => logout()} />
    </>
  );
};

export default notas;
