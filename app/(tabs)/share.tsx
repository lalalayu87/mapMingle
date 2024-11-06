import { Text, View, StyleSheet } from "react-native";

export default function SharedScreen() {
  return (
    <View style={styles.container}>
      <Text>공유</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
