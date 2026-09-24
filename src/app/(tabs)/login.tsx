import { Image } from "expo-image";
import { Link } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const fundo =
    "https://encouraging-red-cc1vbiqm.edgeone.dev/";

  const logo =
    "https://uptight-teal-jxjxnotb.edgeone.dev/";

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: fundo }}
        style={styles.fundo}
        contentFit="cover"
      />

      <View style={styles.conteudo}>

        {/* MENU SUPERIOR */}
        <View style={styles.topo}>
          <Link href="/login" asChild>
            <TouchableOpacity>
              <Text style={styles.entrar}>ENTRAR</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/cadastro" asChild>
            <TouchableOpacity>
              <Text style={styles.cadastrar}>CADASTRAR</Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* LOGO */}
        <Image
          source={{ uri: logo }}
          style={styles.logo}
          contentFit="contain"
        />

        <Text style={styles.titulo}>
          USO INTERNO{"\n"}HOSPITALAR
        </Text>

        {/* CAMPOS */}
        <View style={styles.formulario}>

          <TextInput
            style={styles.input}
            placeholder="e-mail"
            placeholderTextColor="#555"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="senha"
            placeholderTextColor="#555"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <TouchableOpacity>
            <Text style={styles.esqueceu}>
              Esqueceu sua senha?
            </Text>
          </TouchableOpacity>

          <Link href ="/dashboard" asChild>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>
                ENTRAR
              </Text>
            </TouchableOpacity>
          </Link>

        </View>
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
  },

  topo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingTop: 45,
  },

  entrar: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
  },

  cadastrar: {
    color: "#111111",
    fontSize: 15,
    fontWeight: "bold",
  },

  logo: {
    width: 170,
    height: 170,
    marginTop: 10,
  },

  titulo: {
    color: "#415873",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
    marginTop: -15,
    marginBottom: 30,
  },

  formulario: {
    width: "75%",
    alignItems: "center",
  },

  input: {
    width: "100%",
    height: 45,
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 18,
  },

  esqueceu: {
    color: "#222",
    fontSize: 14,
    textDecorationLine: "underline",
    marginBottom: 25,
  },

  botao: {
    backgroundColor: "#ff6b6b",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
  },

  textoBotao: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});