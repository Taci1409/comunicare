import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Tradutor() {
  const [texto, setTexto] = useState("");

  function traduzir() {
    console.log("Texto:", texto);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tradutor de Libras</Text>

      <Text style={styles.subtitulo}>
        Digite uma mensagem para traduzir para Libras
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua mensagem..."
        value={texto}
        onChangeText={setTexto}
        multiline
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={traduzir}
      >
        <Text style={styles.textoBotao}>TRADUZIR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FAFC",
    padding: 25,
    justifyContent: "center",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0F4C5C",
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 16,
    color: "#555",
    marginBottom: 25,
  },

  input: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    minHeight: 120,
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: "#D5E2E6",
  },

  botao: {
    backgroundColor: "#0F4C5C",
    padding: 16,
    borderRadius: 15,
    marginTop: 20,
    alignItems: "center",
  },

  textoBotao: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});