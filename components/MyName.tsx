import { StyleSheet, Text } from "react-native";

export function MyName() {
  return (
    <>
      <Text style={styles.text}>Mi nombre es Kevin</Text>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
    color: "white",
  },
});
