import React, { useEffect, useState } from 'react'
import { View, Text, Alert, ScrollView, ActivityIndicator, Pressable } from 'react-native'
import NavBar from '@/components/NavBar'
import styles from '@/constants/style/style'
import colors from '@/constants/colors/colors'
import { FetchProfessor, DefaultProfessor } from '@/constants/fetchProfessor/fetchProfessor'
import { message } from '@/constants/types/typesProfessor'
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const cadastro = () => {
  const route = useRouter();
  const [professores, setProfessores] = useState<message[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)


  const exit = async (id: string) => {
    const Id = Number(id)
    const { message, error } = await DefaultProfessor({
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    }, Id);
    if (message) {
      setProfessores(professores.filter((item) => item.id !== id))
    } else if (error) {
      setError(error)
    }
  }

  const show = async () => {
      const { message, error } = await FetchProfessor({
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      if (message) {
        setProfessores(message)
        setLoading(false)
      } else if (error) {
        setError(error)
      }
  }

  useEffect(() => {
    show()
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.lightBlue} />
      </View>
    );
  }

  if (error) {
    Alert.alert('Erro', error);
  }


  return (
    <>
      <NavBar />
      <View style={styles.container}>
        <ScrollView>
          {professores.map((item) => (
            <View key={item.id} style={styles.containerShowProfessores}>
              <Text style={styles.text}>{item.nome}</Text>
              <Text style={styles.text}>{item.disciplina}</Text>
              <Pressable style={styles.back} onPress={() => route.push(`/professor/detalhe/${item.id}`)}>
                <Ionicons name="checkmark-circle-outline" size={24} color={colors.secondary} />
              </Pressable>
              <Pressable style={styles.back} onPress={() => exit(item.id)}>
                <Ionicons name="close-circle" size={24} color={colors.secondary} />
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  )
}

export default cadastro
