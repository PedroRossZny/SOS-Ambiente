import { Text, View } from 'react-native';
import TelaComFundo from '../components/TelaComFundo';
import { useAppState } from '../context/AppState';
import { styles } from '../styles/global';

export default function HistoricoScreen() {
  const { historico } = useAppState();

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
          </View>
        ))
      )}
    </TelaComFundo>
  );
}
