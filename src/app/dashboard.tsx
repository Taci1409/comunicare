import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Dashboard() {
  const logo = require("../../assets/images/logo.png");
  const gradiente = require("../../assets/images/fundo_gradiente.png");

  return (
    <View style={styles.container}>

      <Image
        source={gradiente}
        style={styles.fundo}
        contentFit="cover"
      />
      <ScrollView
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.header}>

          <View style={styles.marca}>
            <Image
              source={logo}
              style={styles.logo}
              contentFit="contain"
            />

            <Text style={styles.nomeApp}>
              Comunicare
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => router.push("/login")}
          >
            <Text style={styles.sair}>
              SAIR
            </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.saudacao}>

          <Text style={styles.ola}>
            OLÁ!
          </Text>

          <Text style={styles.titulo}>
            Como podemos ajudar?
          </Text>

          <Text style={styles.descricao}>
            Recursos para facilitar a comunicação
            durante o atendimento hospitalar.
          </Text>

        </View>

        <TouchableOpacity
          style={styles.tradutor}
          onPress={() => router.push("/tradutor")}
          activeOpacity={0.8}
        >

          <View style={styles.iconeTradutor}>
            <Text style={styles.iconeTexto}>
              L
            </Text>
          </View>

          <View style={styles.tradutorTexto}>

            <Text style={styles.tituloTradutor}>
              Tradutor de Libras
            </Text>

            <Text style={styles.descricaoTradutor}>
              Facilite a comunicação entre profissionais
              e pacientes surdos.
            </Text>

          </View>

          <View style={styles.botaoTradutor}>
            <Text style={styles.textoBotao}>
              ABRIR
            </Text>
          </View>

        </TouchableOpacity>

        <Text style={styles.tituloSecao}>
          RECURSOS
        </Text>

        <View style={styles.linha}>

          <TouchableOpacity
            style={styles.recurso}
            activeOpacity={0.8}
          >

            <View style={styles.iconeRecurso}>
              <Ionicons name="body-outline"/>
            </View>

            <Text style={styles.tituloRecurso}>
              Libras
            </Text>

            <Text style={styles.descricaoRecurso}>
              Sinais básicos
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.recurso}
            activeOpacity={0.8}
          >

            <View style={styles.iconeRecurso}>
            <Ionicons name="text-outline"/>
            </View>

            <Text style={styles.tituloRecurso}>
              Alfabeto
            </Text>

            <Text style={styles.descricaoRecurso}>
              Alfabeto em Libras
            </Text>

          </TouchableOpacity>

        </View>

        <TouchableOpacity
          style={styles.frases}
          activeOpacity={0.8}
        >

          <View>

            <Text style={styles.tituloFrases}>
              Frases rápidas
            </Text>

            <Text style={styles.descricaoFrases}>
              Frases úteis para o atendimento
            </Text>

          </View>

          <Text style={styles.seta}>
             <Ionicons name= "chevron-forward-outline"/>
          </Text>

        </TouchableOpacity>

        <View style={styles.aviso}>

          <View style={styles.pontoAviso} />

          <View style={styles.avisoTexto}>

            <Text style={styles.avisoTitulo}>
              Comunicação acessível
            </Text>

            <Text style={styles.avisoDescricao}>
              Utilize os recursos do Comunicare para
              facilitar o atendimento.
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
    paddingHorizontal: 28,
    paddingTop: 58,
    paddingBottom: 45,
  },


  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  marca: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 34,
    height: 34,
  },

  nomeApp: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: "800",
    color: "#495B73",
    letterSpacing: 0.3,
  },

  sair: {
    fontSize: 13,
    fontWeight: "800",
    color: "#495B73",
    letterSpacing: 0.5,
  },

  saudacao: {
    marginTop: 45,
    marginBottom: 25,
  },

  ola: {
    fontSize: 13,
    fontWeight: "800",
    color: "#495B73",
    letterSpacing: 1,
  },

  titulo: {
    marginTop: 7,
    fontSize: 27,
    fontWeight: "800",
    color: "#495B73",
    lineHeight: 32,
  },

  descricao: {
    marginTop: 9,
    maxWidth: 330,
    fontSize: 14,
    lineHeight: 20,
    color: "#495B73",
  },


  tradutor: {
    padding: 19,
    borderRadius: 22,

    backgroundColor: "rgba(255,255,255,0.38)",

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.55)",
  },

  iconeTradutor: {
    width: 48,
    height: 48,
    borderRadius: 16,

    backgroundColor: "#687DA6",

    alignItems: "center",
    justifyContent: "center",
  },

  iconeTexto: {
    fontSize: 22,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  tradutorTexto: {
    marginTop: 13,
  },

  tituloTradutor: {
    fontSize: 19,
    fontWeight: "800",
    color: "#495B73",
  },

  descricaoTradutor: {
    marginTop: 5,
    fontSize: 13,
    lineHeight: 18,
    color: "#495B73",
  },

  botaoTradutor: {
    marginTop: 16,

    alignSelf: "flex-start",

    paddingHorizontal: 19,
    paddingVertical: 10,

    borderRadius: 20,

    backgroundColor: "#F87171",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0.4,
  },


  tituloSecao: {
    marginTop: 27,
    marginBottom: 13,

    fontSize: 14,
    fontWeight: "800",

    color: "#495B73",

    letterSpacing: 0.8,
  },

  linha: {
    flexDirection: "row",
    gap: 12,
  },

  recurso: {
    flex: 1,

    padding: 17,

    borderRadius: 19,

    backgroundColor: "rgba(255,255,255,0.38)",

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
  },

  iconeRecurso: {
    width: 38,
    height: 38,

    borderRadius: 13,

    backgroundColor: "#687DA6",

    alignItems: "center",
    justifyContent: "center",
  },

  iconeRecursoTexto: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "800",
  },

  tituloRecurso: {
    marginTop: 11,

    fontSize: 15,
    fontWeight: "800",

    color: "#495B73",
  },

  descricaoRecurso: {
    marginTop: 3,

    fontSize: 11,
    lineHeight: 16,

    color: "#495B73",
  },

  frases: {
    marginTop: 12,

    padding: 18,

    borderRadius: 19,

    backgroundColor: "rgba(255,255,255,0.38)",

    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  tituloFrases: {
    fontSize: 15,
    fontWeight: "800",
    color: "#495B73",
  },

  descricaoFrases: {
    marginTop: 4,
    fontSize: 11,
    color: "#495B73",
  },

  seta: {
    fontSize: 29,
    fontWeight: "300",
    color: "#495B73",
  },

  aviso: {
    marginTop: 14,

    padding: 16,

    borderRadius: 18,

    backgroundColor: "rgba(248,113,113,0.12)",

    borderWidth: 1,
    borderColor: "rgba(248,113,113,0.25)",

    flexDirection: "row",
    alignItems: "center",
  },

  pontoAviso: {
    width: 9,
    height: 9,

    borderRadius: 5,

    backgroundColor: "#F87171",
  },

  avisoTexto: {
    flex: 1,
    marginLeft: 11,
  },

  avisoTitulo: {
    fontSize: 13,
    fontWeight: "800",
    color: "#495B73",
  },

  avisoDescricao: {
    marginTop: 3,

    fontSize: 10.5,
    lineHeight: 15,

    color: "#495B73",
  },
});