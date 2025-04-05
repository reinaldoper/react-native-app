import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '@/constants/style/style';
import colors from '@/constants/colors/colors';
import { message } from '@/constants/types/typesProfessor';


const ProfessorCard = ({ nome, email, disciplina, role }: message) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>Detalhes do Professor</Text>

      <View style={styles.detailRow}>
        <Ionicons name="person-outline" size={20} color={colors.primary} />
        <Text style={styles.detailLabel}>Nome:</Text>
      </View>
      <Text style={styles.detailText}>{nome}</Text>

      <View style={styles.detailRow}>
        <Ionicons name="mail-outline" size={20} color={colors.primary} />
        <Text style={styles.detailLabel}>Email:</Text>
      </View>
      <Text style={styles.detailText}>{email}</Text>

      <View style={styles.detailRow}>
        <Ionicons name="book-outline" size={20} color={colors.primary} />
        <Text style={styles.detailLabel}>Disciplina:</Text>
      </View>
      <Text style={styles.detailText}>{disciplina}</Text>

      <View style={styles.detailRow}>
        <Ionicons name="briefcase-outline" size={20} color={colors.primary} />
        <Text style={styles.detailLabel}>Função:</Text>
      </View>
      <Text style={styles.detailText}>{role}</Text>
    </View>
  );
};

export default ProfessorCard;
