import { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import TelaComFundo from '../components/TelaComFundo';
import { useAppState } from '../context/AppState';
import { styles } from '../styles/global';

export default function RegistroScreen({ navigation }) {
  const { historico, setHistorico } = useAppState();
  const [acoes, setAcoes] = useState({
    reciclou: false, economizouEnergia: false, evitouPlastico: false,
  });

  const toggleAcao = (acao) => setAcoes(prev => ({ ...prev, [acao]: !prev[acao] }));

  const salvarRegistro = () => {
    const novasAcoes = [];
    if (acoes.reciclou) novasAcoes.push('Reciclou materiais');
    if (acoes.economizouEnergia) novasAcoes.push('Economizou energia');
    if (acoes.evitouPlastico) novasAcoes.push('Evitou uso de plástico');

    if (novasAcoes.length > 0) {
      const data = new Date().toLocaleDateString();
      const registro = { data, acoes: novasAcoes };
      setHistorico([...historico, registro]);
      navigation.navigate('Historico');
    }
  };

  return (
    <TelaComFundo>
      <Text style={styles.subtitle}>O que você fez hoje?</Text>

      <TouchableOpacity style={[styles.botao, acoes.reciclou && styles.selecionado]} onPress={() => toggleAcao('reciclou')}>
        <Text style={styles.textoBotao}>Reciclei materiais</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, acoes.economizouEnergia && styles.selecionado]} onPress={() => toggleAcao('economizouEnergia')}>
        <Text style={styles.textoBotao}>Economizei energia</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, acoes.evitouPlastico && styles.selecionado]} onPress={() => toggleAcao('evitouPlastico')}>
        <Text style={styles.textoBotao}>Evitei o uso de plástico</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={salvarRegistro}>
        <Text style={styles.textoBotao}>Salvar Registro</Text>
      </TouchableOpacity>
    </TelaComFundo>
  );
}
