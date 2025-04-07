import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Alert, Pressable } from "react-native";
import { message } from "@/constants/types/typesProfessor";
import NavBar from "@/components/NavBar";
import styles from "@/constants/style/style";
import colors from "@/constants/colors/colors";
import { DefaultProfessor } from "@/constants/fetchProfessor/fetchProfessor";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import ProfessorCard from "@/components/ProfessorCard";

const detalhe = () => {
  const route = useRouter();
  const { id } = useLocalSearchParams();
  const [professor, setProfessor] = useState<message>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const show = async () => {
    const { message, error } = await DefaultProfessor(
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
      Number(id)
    );
    if (message) {
      setProfessor(message);
      setLoading(false);
    } else if (error) {
      setError(error);
    }
  };

  useEffect(() => {
    show();
  }, []);

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

  const handleRoute = () => {
    route.push("/professor/cadastro");
  };

  return (
    <>
      <NavBar />
      <Pressable style={styles.backStyle} onPress={handleRoute}>
        <Ionicons name="arrow-back" size={24} color={colors.secondary} />
      </Pressable>
      <View style={styles.container}>
        {professor && (
          <ProfessorCard
            id={professor.id}
            nome={professor.nome}
            email={professor.email}
            disciplina={professor.disciplina}
            role={professor.role}
          />
        )}
      </View>
    </>
  );
};

export default detalhe;
