import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Tradutor() {
  const [texto, setTexto] = useState("");

  const logo = require("../../../assets/images/logo.png");
  const gradiente = require("../../../assets/images/fundo_gradiente.png");
  const maos = require("../../../assets/images/fundo_mãos.png");

  function traduzir() {
    console.log("Texto:", texto);
  }

  return (
    <View style={styles.container}>

      {/* FUNDO */}
      <Image
        source={gradiente}
        style={styles.fundo}
        contentFit="cover"
      />

      {/* MÃOS DE LIBRAS */}
      <Image
        source={maos}
        style={styles.maos}
        contentFit="cover"
      />

      <ScrollView
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
      >

        {/* TOPO */}
        <View style={styles.header}>

          <TouchableOpacity
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Text style={styles.voltar}>
              VOLTAR
            </Text>
          </TouchableOpacity>

          <View style={styles.marca}>
            <Image
              source={logo}
              style={styles.logo}
              contentFit="contain"
            />

            <Text style={styles.nomeApp}>
              ComunicAR
            </Text>
          </View>

        </View>

        {/* TÍTULO */}
        <View style={styles.tituloArea}>

          <Text style={styles.titulo}>
            Tradutor de Libras
          </Text>

          <Text style={styles.subtitulo}>
            Digite uma mensagem para facilitar a
            comunicação durante o atendimento.
          </Text>

        </View>

        {/* ÁREA DO TRADUTOR */}
        <View style={styles.cardTradutor}>

          <Text style={styles.label}>
            MENSAGEM
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite sua mensagem..."
            placeholderTextColor="#687DA6"
            value={texto}
            onChangeText={setTexto}
            multiline
            textAlignVertical="top"
          />

          {/* BOTÃO */}
          <TouchableOpacity
            style={styles.botao}
            onPress={traduzir}
            activeOpacity={0.8}
          >
            <Text style={styles.textoBotao}>
              TRADUZIR
            </Text>
          </TouchableOpacity>

        </View>

        {/* RESULTADO */}
        <View style={styles.resultado}>

          <View style={styles.resultadoTopo}>

            <Text style={styles.resultadoTitulo}>
              TRADUÇÃO
            </Text>

            <View style={styles.status}>
              <View style={styles.ponto} />

              <Text style={styles.statusTexto}>
                PRONTO
              </Text>
            </View>

          </View>

          <View style={styles.areaResultado}>

            <Text style={styles.resultadoVazio}>
              A tradução para Libras aparecerá aqui.
            </Text>

          </View>

        </View>

        {/* DICA */}
        <View style={styles.dica}>

          <View style={styles.dicaIcone}>
            <Text style={styles.dicaIconeTexto}>
              i
            </Text>
          </View>

          <View style={styles.dicaTexto}>

            <Text style={styles.dicaTitulo}>
              Dica
            </Text>

            <Text style={styles.dicaDescricao}>
              Escreva frases curtas e objetivas para
              facilitar a comunicação.
            </Text>

          </View>

        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: "#DCEAF2",
  },

  fundo: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },

  maos: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    opacity: 0.65,
  },

  conteudo: {
    paddingHorizontal: 27,
    paddingTop: 55,
    paddingBottom: 45,
  },


  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  voltar: {
    fontSize: 13,
    fontWeight: "800",
    color: "#495B73",
    letterSpacing: 0.5,
  },

  marca: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 32,
    height: 32,
  },

  nomeApp: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: "800",
    color: "#495B73",
  },


  tituloArea: {
    marginTop: 48,
    marginBottom: 25,
  },

  titulo: {
    fontSize: 27,
    lineHeight: 32,
    fontWeight: "800",
    color: "#495B73",
  },

  subtitulo: {
    marginTop: 9,
    maxWidth: 340,
    fontSize: 14,
    lineHeight: 20,
    color: "#495B73",
  },


  cardTradutor: {
    padding: 20,
    borderRadius: 22,

    backgroundColor: "rgba(255,255,255,0.40)",

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.55)",
  },

  label: {
    fontSize: 12,
    fontWeight: "800",
    color: "#495B73",
    letterSpacing: 0.8,
    marginBottom: 10,
  },

  input: {
    minHeight: 145,

    paddingHorizontal: 16,
    paddingVertical: 15,

    borderRadius: 17,

    backgroundColor: "rgba(255,255,255,0.55)",

    borderWidth: 1,
    borderColor: "rgba(73,91,115,0.18)",

    color: "#495B73",

    fontSize: 15,
    lineHeight: 21,
  },


  botao: {
    marginTop: 16,

    alignSelf: "flex-start",

    paddingHorizontal: 24,
    paddingVertical: 12,

    borderRadius: 22,

    backgroundColor: "#F87171",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 0.5,
  },


  resultado: {
    marginTop: 17,

    padding: 18,

    borderRadius: 22,

    backgroundColor: "rgba(255,255,255,0.35)",

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
  },

  resultadoTopo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  resultadoTitulo: {
    fontSize: 12,
    fontWeight: "800",
    color: "#495B73",
    letterSpacing: 0.8,
  },

  status: {
    flexDirection: "row",
    alignItems: "center",
  },

  ponto: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#FB923C",
    marginRight: 6,
  },

  statusTexto: {
    fontSize: 9,
    fontWeight: "800",
    color: "#687DA6",
  },

  areaResultado: {
    minHeight: 120,

    marginTop: 12,

    padding: 16,

    borderRadius: 16,

    backgroundColor: "rgba(255,255,255,0.35)",

    justifyContent: "center",
    alignItems: "center",
  },

  resultadoVazio: {
    textAlign: "center",
    fontSize: 13,
    lineHeight: 19,
    color: "#687DA6",
  },


  dica: {
    marginTop: 15,

    padding: 16,

    borderRadius: 18,

    backgroundColor: "rgba(248,113,113,0.10)",

    borderWidth: 1,
    borderColor: "rgba(248,113,113,0.22)",

    flexDirection: "row",
    alignItems: "center",
  },

  dicaIcone: {
    width: 28,
    height: 28,

    borderRadius: 14,

    backgroundColor: "#687DA6",

    alignItems: "center",
    justifyContent: "center",
  },

  dicaIconeTexto: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  dicaTexto: {
    flex: 1,
    marginLeft: 10,
  },

  dicaTitulo: {
    fontSize: 13,
    fontWeight: "800",
    color: "#495B73",
  },

  dicaDescricao: {
    marginTop: 3,
    fontSize: 10.5,
    lineHeight: 15,
    color: "#687DA6",
  },
});