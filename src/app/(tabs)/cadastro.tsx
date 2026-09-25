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

export default function Cadastro() {
  const logo = require("../../../assets/images/logo.png");
  const gradiente = require("../../../assets/images/fundo_gradiente.png");

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [setor, setSetor] = useState("");

  return (
    <View style={styles.container}>

      {/* FUNDO */}
      <Image
        source={gradiente}
        style={styles.fundo}
        contentFit="cover"
      />

      <View style={styles.conteudo}>

        {/* MENU SUPERIOR */}
        <View style={styles.topo}>

          <Link href="/login" asChild>
            <TouchableOpacity>
              <Text style={styles.entrar}>
                ENTRAR
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href="/cadastro" asChild>
            <TouchableOpacity>
              <Text style={styles.cadastrar}>
                CADASTRAR
              </Text>
            </TouchableOpacity>
          </Link>

        </View>

        {/* LOGO */}
        <Image
          source={logo}
          style={styles.logo}
          contentFit="contain"
        />

        {/* FORMULÁRIO */}
        <View style={styles.formulario}>

          <TextInput
            style={styles.input}
            placeholder="nome"
            placeholderTextColor="#555"
            value={nome}
            onChangeText={setNome}
          />

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

          <TextInput
            style={styles.input}
            placeholder="setor"
            placeholderTextColor="#555"
            value={setor}
            onChangeText={setSetor}
          />

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>
              CADASTRAR
            </Text>
          </TouchableOpacity>

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
    color: "#111111",
    fontSize: 15,
    fontWeight: "bold",
  },

  cadastrar: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
  },

  logo: {
    width: 150,
    height: 150,
    marginTop: 10,
    marginBottom: 15,
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
    marginBottom: 15,
  },

  botao: {
    backgroundColor: "#ff6b6b",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 10,
  },

  textoBotao: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});