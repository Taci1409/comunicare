import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const logo = require("../../../assets/images/logo.png");
  const fundo = require("../../../assets/images/fundo_mãos.png");
  const gradiente = require("../../../assets/images/fundo_gradiente.png");

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>

      <Image
        source={gradiente}
        style={styles.fundo}
        contentFit="cover"
      />

      <Image
        source={fundo}
        style={styles.fundo}
        contentFit="cover"
      />

      <View style={styles.conteudo}>

        <Image
          source={logo}
          style={styles.logo}
          contentFit="contain"
        />

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
  },
});