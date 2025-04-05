import React from 'react'
import styles from '@/constants/style/style'
import { Button, TextInput } from 'react-native'
import colors from '@/constants/colors/colors'
import { TypeLogin } from '@/constants/types/typeLogin'


const Login = ({ placeholder, onChangeText, value, title, onPress, disabled }: TypeLogin) => {
  return (
    <>
      <TextInput 
        style={styles.textInput}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      <Button 
        title={title} 
        onPress={onPress} 
        color={colors.primary} 
        disabled={disabled} 
      />
    </>
  )
}

export default Login;
