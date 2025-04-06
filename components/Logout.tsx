import React from 'react'
import { Button } from 'react-native'
import colors from '@/constants/colors/colors';
import { TypeLogout } from '@/constants/types/typeLogout';


const Logout = ({ onPress, title }: TypeLogout) => {
  return (
    <>
      <Button
        title={title}
        onPress={onPress}
        color={colors.primary}
      />
    </>
  )
}

export default Logout
