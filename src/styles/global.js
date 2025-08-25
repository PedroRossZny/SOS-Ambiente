import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover' },
  splash: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  splashText: {
    fontSize: 40, fontWeight: 'bold', color: '#fff',
    textShadowColor: '#000', textShadowRadius: 10,
  },
  container: { flexGrow: 1, justifyContent: 'center', padding: 20, paddingBottom: 50 },
  title: {
    fontSize: 30, fontWeight: 'bold', marginBottom: 25, textAlign: 'center',
    color: '#fff', textShadowColor: '#000', textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 24, textAlign: 'center', marginBottom: 20,
    color: '#fff', textShadowColor: '#000', textShadowRadius: 4,
  },
  botao: {
    backgroundColor: 'rgba(255,255,255,0.85)', padding: 15, marginVertical: 8,
    borderRadius: 12, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 5, elevation: 4,
  },
  selecionado: { backgroundColor: '#a5d6a7' },
  textoBotao: { fontSize: 18, color: '#2e7d32', textAlign: 'center', fontWeight: 'bold' },
  textoNeutro: { color: '#fff', fontSize: 16, marginVertical: 4 },
  data: { color: '#fff', fontWeight: 'bold' },
  itemHistorico: {
    backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: 10, padding: 10, marginVertical: 8,
  },
  input: {
    borderWidth: 1, borderColor: '#fff', padding: 10, borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.9)', color: '#000', marginVertical: 10,
  },
  resultado: { marginTop: 20, fontSize: 18, textAlign: 'center', color: '#fff', fontWeight: 'bold' },
});
