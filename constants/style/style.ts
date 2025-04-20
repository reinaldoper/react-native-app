import { StyleSheet } from "react-native";
import colors from "../colors/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    paddingHorizontal: 16,
  },
  weather:{
    backgroundColor: colors.placeholder,
    color: colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.secondary,
    marginBottom: 6,
  },
  cardContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
    marginBottom: 12,
    textAlign: "center",
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  detailLabel: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: colors.secondary,
  },
  detailText: {
    fontSize: 16,
    color: colors.primary,
    marginBottom: 6,
    marginLeft: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.dark,
    margin: 16,
    textAlign: "center",
  },
  error: {
    backgroundColor: colors.error,
    color: colors.notification,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: colors.lightBlue,
    width: "100%",
    padding: 12,
    marginBottom: 10,
  },
  containerIndex: {
    flex: 1,
    padding: 10,
  },
  linkCadastro: {
    color: colors.primary,
    textDecorationLine: "underline",
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
  },
  scrollView: {
    width: "100%",
    height: "100%",
  },
  containerShowProfessores: {
    backgroundColor: colors.surface,
    borderRadius: 6,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 10,
    borderColor: colors.grayDark,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  alunos: {
    backgroundColor: colors.background,
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    elevation: 2,
  },
  containerDefault: {
    flex: 1,
    padding: 16,
    gap: 8,
  },
  containerRenderizaAlunos: {
    flex: 1,
    padding: 16,
  },
  containerProfile: {
    flex: 1,
    marginTop: "40%",
    paddingHorizontal: 16,
    padding: 16
  },
  text: {
    fontSize: 14,
    color: colors.textPrimary,
    marginBottom: 10,
    marginLeft: 10,
    fontWeight: "600",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 10,
    marginTop: 10,
  },
  textButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: colors.lightBlue,
    textDecorationLine: "underline",
    marginTop: 10,
    textAlign: "center",
  },
  cadastroAluno: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 16,
  },
  divider: {
    height: 1,
    backgroundColor: colors.dark, 
    marginVertical: 10,
  },  
  back: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 6,
    marginHorizontal: 6,
  },
  backStyle: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    width: 40,
    marginLeft: 10,
    marginVertical: 10,
  },
  textInput: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.grayDark,
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    marginHorizontal: 10,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  disabledButton: {
    backgroundColor: colors.grayDark,
  },
});

export default styles;
