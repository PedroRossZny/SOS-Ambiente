import { useState } from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native';
import TelaComFundo from '../components/TelaComFundo';
import { useAppState } from '../context/AppState';
import { styles } from '../styles/global';

const opcoes = [
  { chave: 'transporte_publico', texto: 'Usei transporte público', co2: 0.8 },
  { chave: 'carro', texto: 'Usei carro', co2: 2.5 },
  { chave: 'casa', texto: 'Fiquei em casa (uso elétrico)', co2: 1.2 },
  { chave: 'bicicleta', texto: 'Usei bicicleta / Caminhei', co2: 0 },
];

export default function CarbonoScreen({ navigation }) {
  const { setHistoricoCarbono } = useAppState();
  const [selecionados, setSelecionados] = useState({}); 

  const toggle = (chave) =>
    setSelecionados((prev) => ({ ...prev, [chave]: !prev[chave] }));

  const salvarEmissao = () => {
    const escolhidos = opcoes.filter((op) => selecionados[op.chave]);
    if (escolhidos.length === 0) {
      Alert.alert('Nada selecionado', 'Escolha pelo menos uma opção.');
      return;
    }

    const data = new Date().toLocaleDateString();
    const novos = escolhidos.map((op) => ({
      data,
      atividade: op.texto,
      co2: op.co2,
    }));

    setHistoricoCarbono((h) => [...h, ...novos]);
    setSelecionados({});
    navigation.goBack(); 
  };

  return (
    <TelaComFundo>
      <Text style={styles.subtitle}>Como você se locomoveu hoje?</Text>

      {opcoes.map((op) => {
        const ativo = !!selecionados[op.chave];
        return (
          <TouchableOpacity
            key={op.chave}
            style={[styles.botao, ativo && styles.selecionado]}
            onPress={() => toggle(op.chave)}
          >
            <Text style={styles.textoBotao}>{op.texto}</Text>
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity style={styles.botao} onPress={salvarEmissao}>
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>
    </TelaComFundo>
  );
}
