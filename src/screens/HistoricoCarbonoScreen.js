import { Text, View } from 'react-native';
import TelaComFundo from '../components/TelaComFundo';
import { useAppState } from '../context/AppState';
import { styles } from '../styles/global';

export default function HistoricoCarbonoScreen() {
  const { historicoCarbono } = useAppState();

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
          </View>
        ))
      )}
    </TelaComFundo>
  );
}
