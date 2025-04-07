import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Alert, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { message } from "@/constants/types/typeAluno";
import { GetAlunos } from "@/constants/fetchAluno/fetchAluno";
import colors from "@/constants/colors/colors";
import NavBar from "@/components/NavBar";
import AlunoCard from "@/components/AlunoCard";
import Logout from "@/components/Logout";
import { useProfessor } from "@/constants/context/ProfessorContext";
import { Ionicons } from "@expo/vector-icons";
import styles from "@/constants/style/style";

const page = () => {
  const { id } = useLocalSearchParams();
  const route = useRouter();
  const { logout } = useProfessor();
  const [aluno, setAluno] = useState<message | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const show = async () => {
    const headers = { "Content-Type": "application/json" };
    const method = "GET";
    const Id = Number(id);
    const options = {
      method,
      headers,
    };
    try {
      const { message } = await GetAlunos(options, Id);
      setAluno(message);
      setLoading(false);
    } catch (error) {
      setError("Erro ao buscar aluno.");
    }
  };

  useEffect(() => {
    show();
  }, []);

  const handleRoute = () => {
    route.push("/professor/cadastro-alunos/page");
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.lightBlue} />
      </View>
    );
  }

  if (error) {
    Alert.alert("Erro", error);
  }

  return (
    <>
      <NavBar />
      <Pressable style={styles.backStyle} onPress={handleRoute}>
        <Ionicons name="arrow-back" size={24} color={colors.secondary} />
      </Pressable>
      <View style={styles.container}>
        {aluno && (
          <AlunoCard
            nome={aluno.nome}
            role={aluno.role}
            notas={aluno.notas}
            email={aluno.email}
            professor={aluno.professor}
          />
        )}
      </View>

      <Logout onPress={() => logout()} title="📴" />
    </>
  );
};

export default page;
