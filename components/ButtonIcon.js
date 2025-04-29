import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

function ButtonIcon({ color, icon, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons color={color} size={24} name={icon} />
    </Pressable>
  );
}
export default ButtonIcon;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
