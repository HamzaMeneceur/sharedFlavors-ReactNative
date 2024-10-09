import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
      <Link href="/details/1">View first user details</Link>
      <Link href="/details/2">View second user details</Link>
    </View>
  );
}
