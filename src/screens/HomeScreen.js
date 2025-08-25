import { Text, TouchableOpacity } from 'react-native';
import TelaComFundo from '../components/TelaComFundo';
import { styles } from '../styles/global';

export default function HomeScreen({ navigation }) {
  return (
    <TelaComFundo>
      <Text style={styles.title}>S.O.S Ambiente</Text>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Registro')}>
        <Text style={styles.textoBotao}>Registrar Ação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Historico')}>
        <Text style={styles.textoBotao}>Ver Histórico</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Dicas')}>
        <Text style={styles.textoBotao}>Dicas Ecológicas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Carbono')}>
        <Text style={styles.textoBotao}>Emissões de Carbono</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Histórico de Carbono')}>
        <Text style={styles.textoBotao}>Histórico de CO₂</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Calcular CO₂')}>
        <Text style={styles.textoBotao}>Calcular Emissão CO₂</Text>
      </TouchableOpacity>
    </TelaComFundo>
  );
}
