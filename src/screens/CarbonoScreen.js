import { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import TelaComFundo from '../components/TelaComFundo';
import { useAppState } from '../context/AppState';
import { styles } from '../styles/global';

const opcoes = [
  { chave: 'transporte_publico', texto: 'Usei transporte público', co2: 0.8 },
  { chave: 'carro', texto: 'Usei carro', co2: 2.5 },
  { chave: 'casa', texto: 'Fiquei em casa (uso elétrico)', co2: 1.2 },
  { chave: 'bicicleta', texto: 'Usei bicicleta / Caminhei', co2: 0 },
];

export default function CarbonoScreen() {
  const { historicoCarbono, setHistoricoCarbono } = useAppState();
  const [selecionado, setSelecionado] = useState('');

  const salvarEmissao = () => {
    if (!selecionado) return;
    const opcao = opcoes.find(op => op.chave === selecionado);
    const registro = { data: new Date().toLocaleDateString(), atividade: opcao.texto, co2: opcao.co2 };
    setHistoricoCarbono([...historicoCarbono, registro]);
    setSelecionado('');
    alert('Registro salvo!');
  };

  return (
    <TelaComFundo>
      <Text style={styles.subtitle}>Como você se locomoveu hoje?</Text>

      {opcoes.map((op) => (
        <TouchableOpacity
          key={op.chave}
          style={[styles.botao, selecionado === op.chave && styles.selecionado]}
          onPress={() => setSelecionado(op.chave)}
        >
          <Text style={styles.textoBotao}>{op.texto}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.botao} onPress={salvarEmissao}>
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>
    </TelaComFundo>
  );
}
