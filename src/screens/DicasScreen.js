import { Text } from 'react-native';
import TelaComFundo from '../components/TelaComFundo';
import { styles } from '../styles/global';

export default function DicasScreen() {
  return (
    <TelaComFundo>
      <Text style={styles.subtitle}>Dicas Ecológicas</Text>
      <Text style={styles.textoNeutro}>• Reduza o consumo de plástico</Text>
      <Text style={styles.textoNeutro}>• Economize energia desligando luzes</Text>
      <Text style={styles.textoNeutro}>• Separe o lixo reciclável</Text>
      <Text style={styles.textoNeutro}>• Plante uma árvore</Text>
    </TelaComFundo>
  );
}
