import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Dashboard() {
  const router = useRouter();

  return (
    <View>
      <Text>Dashboard do Comunicare</Text>

      <TouchableOpacity onPress={() => router.push("/tradutor")}>
        <Text>Tradutor de Libras</Text>
      </TouchableOpacity>
    </View>
  );
}