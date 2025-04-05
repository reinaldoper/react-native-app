import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import styles from '@/constants/style/style';
import { Ionicons } from '@expo/vector-icons';
import colors from '@/constants/colors/colors';

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <Link href={'/'}>
          <Ionicons name='home' color={colors.dark} size={24} />
      </Link>
      <Link href={'/profile'}>
          <Ionicons name='person-add' color={colors.dark} size={24} />
      </Link>
    </View>
  )
}

export default NavBar


