import React from 'react'
import { Input } from '@/constants/types/typeInputs'
import InputText from '@/components/InputText'

const Inputs = ({ placeholder, placeholder1, onChangeText, onChangeText1, value, value1}: Input) => {
  return (
    <>
      <InputText
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <InputText
        placeholder={placeholder1}
        value={value1}
        onChangeText={onChangeText1}
      />
    </>
  )
}

export default Inputs
