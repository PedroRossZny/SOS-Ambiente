import { Alert, Text, TouchableOpacity, View } from 'react-native';
import TelaComFundo from '../components/TelaComFundo';
import { useAppState } from '../context/AppState';
import { styles } from '../styles/global';

export default function HistoricoCarbonoScreen() {
  const { historicoCarbono, setHistoricoCarbono } = useAppState();

  const excluir = (index) => {
    Alert.alert('Excluir registro', 'Tem certeza que deseja excluir este item?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: () =>
          setHistoricoCarbono((h) => h.filter((_, i) => i !== index)),
      },
    ]);
  };

  return (
    <TelaComFundo>
      <Text style={styles.subtitle}>Histórico de Emissões de CO₂</Text>

      {historicoCarbono.length === 0 ? (
        <Text style={styles.textoNeutro}>Nenhum registro ainda.</Text>
      ) : (
        historicoCarbono.map((item, index) => (
          <View key={index} style={styles.itemHistorico}>
            <Text style={styles.data}>{item.data}</Text>
            <Text style={styles.textoNeutro}>• {item.atividade}</Text>
            <Text style={styles.textoNeutro}>• Emissão: {item.co2} kg de CO₂</Text>

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
