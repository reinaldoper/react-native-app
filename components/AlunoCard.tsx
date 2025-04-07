import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "@/constants/style/style";
import colors from "@/constants/colors/colors";
import { message } from "@/constants/types/typeAluno";

const AlunoCard = ({ nome, email, role, professor, notas }: message) => {

  return (
    <>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Detalhes do Aluno</Text>

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
          <Ionicons name="documents" size={20} color={colors.primary} />
          <Text style={styles.detailLabel}>Professor:</Text>
        </View>
        <Text style={styles.detailText}>{professor.nome}</Text>

        <ScrollView style={styles.scrollView}>
          {notas.length > 0 &&
            notas.map((nota) => (
              <View key={nota.id} style={styles.detailText}>
                <Text style={styles.detailLabel}>Nota:</Text>
                <Text style={styles.detailText}>
                  {nota.semestre}: {nota.valor}
                </Text>
              </View>
            ))}
        </ScrollView>

        <View style={styles.detailRow}>
          <Ionicons name="briefcase-outline" size={20} color={colors.primary} />
          <Text style={styles.detailLabel}>Função:</Text>
        </View>
        <Text style={styles.detailText}>{role}</Text>
      </View>
    </>
  );
};

export default AlunoCard;
