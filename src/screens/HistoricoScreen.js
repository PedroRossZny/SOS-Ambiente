import { Alert, Text, TouchableOpacity, View } from 'react-native';
import TelaComFundo from '../components/TelaComFundo';
import { useAppState } from '../context/AppState';
import { styles } from '../styles/global';

export default function HistoricoScreen() {
  const { historico, setHistorico } = useAppState();

  const excluir = (index) => {
    Alert.alert('Excluir registro', 'Tem certeza que deseja excluir este item?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: () => setHistorico((h) => h.filter((_, i) => i !== index)),
      },
    ]);
  };

  return (
    <TelaComFundo>
      <Text style={styles.subtitle}>Histórico de Ações</Text>
      {historico.length === 0 ? (
        <Text style={styles.textoNeutro}>Nenhuma ação registrada ainda.</Text>
      ) : (
        historico.map((item, index) => (
          <View key={index} style={styles.itemHistorico}>
            <Text style={styles.data}>{item.data}</Text>
            {item.acoes.map((acao, i) => (
              <Text key={i} style={styles.textoNeutro}>• {acao}</Text>
            ))}

            <TouchableOpacity
              style={[
                styles.botao,
                { paddingVertical: 8, marginTop: 8, backgroundColor: 'rgba(255,120,120,0.85)' },
              ]}
              onPress={() => excluir(index)}
            >
              <Text style={[styles.textoBotao, { color: '#6b0f0f' }]}>Excluir</Text>
            </TouchableOpacity>
          </View>
        ))
      )}
    </TelaComFundo>
  );
}
