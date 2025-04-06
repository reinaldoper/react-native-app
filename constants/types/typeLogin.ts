export interface TypeLogin {
  placeholder: string,
  onChangeText: (value: string) => void,
  value: string,
  onPress: () => void;
  color: string;
  disabled?: boolean;
}