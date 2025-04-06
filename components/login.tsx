import React from 'react'
import styles from '@/constants/style/style'
import { Button, Pressable, TextInput, View } from 'react-native'
import colors from '@/constants/colors/colors'
import { TypeLogin } from '@/constants/types/typeLogin'
import { Ionicons } from '@expo/vector-icons'


const Login = ({ placeholder, onChangeText, value, onPress, disabled }: TypeLogin) => {
  return (
    <>
      <TextInput 
        textContentType='password'
        style={styles.textInput}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      <Pressable disabled={disabled} onPress={onPress} style={styles.button}>
        <View style={styles.textButton}>
          <Ionicons name="arrow-up" size={24} color={colors.textPrimary} />
        </View>
      </Pressable>
    </>
  )
}

export default Login;
