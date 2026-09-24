import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const logo =
    "https://uptight-teal-jxjxnotb.edgeone.dev/";

  const fundo =
    "https://encouraging-red-cc1vbiqm.edgeone.dev/";

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: fundo }}
        style={styles.fundo}
        contentFit="cover"
      />

      <View style={styles.conteudo}>
        <Image
          source={{ uri: logo }}
          style={styles.logo}
          contentFit="contain"
        />

        <Link href="/login" asChild>
          <Text style={styles.entrar}>ENTRAR</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  fundo: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  conteudo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },

  entrar: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});