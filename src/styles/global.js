// src/styles/global.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Fundo base para todas as telas
  background: { flex: 1, resizeMode: 'cover' },

  // Estilo aplicado na prop imageStyle do ImageBackground
  backgroundImage: {
    resizeMode: 'cover',
    // se quiser deixar a foto ainda mais discreta sem depender do overlay:
    // opacity: 0.9,
  },

  // Overlay esverdeado suave para não “gritar” com o conteúdo
  dim: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(12, 24, 12, 0.38)', // ajuste 0.28–0.45 conforme preferir
  },

  // Splash
  splash: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  splashText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#000',
    textShadowRadius: 10,
  },

  // Layout comum
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 50,
  },

  // Textos
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#fff',
    textShadowColor: '#000',
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
    textShadowColor: '#000',
    textShadowRadius: 4,
  },
  textoNeutro: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 4,
  },
  data: { color: '#fff', fontWeight: 'bold' },

  // Botões e estados
  botao: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    padding: 15,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  selecionado: { backgroundColor: '#a5d6a7' },
  textoBotao: {
    fontSize: 18,
    color: '#2e7d32',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  // Cards/itens de histórico
  itemHistorico: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
  },

  // Inputs e resultados
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    color: '#000',
    marginVertical: 10,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
