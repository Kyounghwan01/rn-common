import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Typography, Divider, SpacingBox } from "./components";

export default function App() {
  return (
    <View style={styles.container}>
      <Text color>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <SpacingBox space={30} />
      <Divider />
      <SpacingBox space={30} />
      <Typography fontSize={10}>awduhawiod</Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
