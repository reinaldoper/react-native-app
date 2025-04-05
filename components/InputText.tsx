import { TextInput, View } from "react-native";
import React from 'react'
import styles from "@/constants/style/style";
import { InputTextComponent } from "@/constants/types/typeInputs";


export default function InputText({ placeholder, onChangeText, value }: InputTextComponent) {
  return (
    <View>
      <TextInput 
        value={value}
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  )
}
