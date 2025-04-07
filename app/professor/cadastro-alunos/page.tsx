import React, { useState, useEffect, useCallback } from "react";
import {
  Pressable,
  Text,
  View,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { useProfessor } from "@/constants/context/ProfessorContext";
import NavBar from "@/components/NavBar";
import styles from "@/constants/style/style";
import Logout from "@/components/Logout";
import colors from "@/constants/colors/colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, Link } from "expo-router";
import Inputs from "@/components/Inputs";
import { FetchAluno, GetAlunos } from "@/constants/fetchAluno/fetchAluno";
import { message } from "@/constants/types/typeAluno";

const page = () => {
  const route = useRouter();
  const { logout, professor } = useProfessor();
  const [touch, setTouch] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [alunos, setAlunos] = useState<message[]>([]);

  const handleRoute = () => {
    route.push("/diretor/page");
  };

  const GetAlunosProfessor = useCallback(async () => {
    if (!professor?.id) return;
    const headers = { "Content-Type": "application/json" };
    const method = "GET";

    const options = {
      method,
      headers,
    };
    try {
      const { message } = await GetAlunos(options, 0);
      const alunosDoProfessor: message[] = message.filter(
        (aluno: message) => aluno.professor.id === professor.id
      );
      setAlunos(alunosDoProfessor);
    } catch (error) {
      Alert.alert("Error", "Erro ao buscar alunos.");
    }
  }, [alunos]);

  useEffect(() => {
    GetAlunosProfessor();
    if (!professor) {
      route.push("/profile");
    }
  }, [professor, GetAlunosProfessor]);

  const isValid = !nome || !email || !idade;

  const handleRegister = async () => {
    const headers = { "Content-Type": "application/json" };
    const body = JSON.stringify({
      email,
      nome,
      idade: Number(idade),
      professorId: professor?.id,
    });
    const method = "POST";

    const options = {
      method,
      headers,
      body,
    };
    try {
      const { message, error } = await FetchAluno(options);
      if (message) {
        setEmail("");
        setNome("");
        setIdade("");
        Alert.alert("Aluno cadastrado com sucesso!");
      } else if (error) {
        setError(error);
      }
    } catch (error) {
      setError("Ocorreu um erro desconhecido.");
    }
  };

  return (
    <>
      <NavBar />
      {professor && (
        <Text style={styles.username}>Olá, {professor?.nome}.</Text>
      )}
      <View style={styles.cadastroAluno}>
        <Pressable style={styles.back} onPress={handleRoute}>
          <Ionicons name="arrow-back" size={24} color={colors.secondary} />
        </Pressable>
        <Pressable style={styles.back} onPress={() => setTouch(!touch)}>
          <Ionicons name="list-outline" size={24} color={colors.secondary} />
        </Pressable>
      </View>
      {!touch && (
        <View style={styles.containerDefault}>
          {error && <Text style={styles.error}>{error}</Text>}
          <Text>Cadastrar aluno:</Text>
          <Inputs
            placeholder="Email"
            value={email}
            onChangeText={(e) => setEmail(e)}
            placeholder1="Nome"
            value1={nome}
            onChangeText1={(e) => setNome(e)}
          />
          <TextInput
            textContentType="birthdate"
            style={styles.textInput}
            keyboardType="numeric"
            value={idade}
            placeholder="Idade"
            onChangeText={(e) => setIdade(e)}
          />
          <Pressable
            disabled={isValid}
            onPress={handleRegister}
            style={styles.button}
          >
            <View style={styles.textButton}>
              <Ionicons name="arrow-up" size={24} color={colors.textPrimary} />
            </View>
          </Pressable>
        </View>
      )}
      {touch && (
        <View style={styles.containerRenderizaAlunos}>
          <Text style={[styles.text, { marginBottom: 10 }]}>
            Alunos cadastrados:
          </Text>
          {alunos.length === 0 ? (
            <Text style={{ color: colors.textSecondary }}>
              Nenhum aluno encontrado.
            </Text>
          ) : (
            <ScrollView style={styles.scrollView}>
              {alunos.map((aluno) => (
                <View key={aluno.id}>
                  <Text style={styles.detailText}>👨‍🎓 {aluno.nome}</Text>
                  <Text style={styles.detailText}>📧 {aluno.email}</Text>
                  <Text style={styles.detailText}>🛠️ Função: {aluno.role}</Text>
                  <Text style={styles.detailText}>🏫 Professor: {aluno.professor.nome}</Text>
                  <Text style={styles.detailText}>
                    <Link href={`/professor/notas/${aluno.id}`} style={styles.linkCadastro}>📚 Cadastrar Nota</Link>
                  </Text>
                  <Text style={styles.username}>
                    <Pressable>
                      <Ionicons
                        name="checkmark-circle-outline"
                        size={24}
                        color={colors.secondary}
                        onPress={() =>
                          route.push(`/professor/cadastro-alunos/${aluno.id}`)
                        }
                      />
                    </Pressable>
                  </Text>
                  <View style={styles.divider} />
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      )}

      <Logout onPress={() => logout()} title="📴" />
    </>
  );
};

export default page;
