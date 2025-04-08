import React from 'react'
import { Pressable, View } from 'react-native'
import styles from '@/constants/style/style'
import NavBar from '@/components/NavBar'
import Logout from '@/components/Logout'
import { useAluno } from '@/constants/context/AlunoContext'
import AlunoCard from '@/components/AlunoCard'
import { Ionicons } from '@expo/vector-icons'
import colors from '@/constants/colors/colors'
import { useRouter } from 'expo-router'
const page = () => {
  const { logout, aluno } = useAluno();
  const router = useRouter();

  const handleRoute = () => {
    router.push('/student/page')
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
      <Logout title="📴" onPress={() => logout()} />
    </>
  )
}

export default page
