import { Text, View, StyleSheet } from "react-native";

export default function MyScreen() {
  return (
    <View style={styles.container}>
      <Text>내 정보</Text>
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
