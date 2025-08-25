import { useState } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import TelaComFundo from '../components/TelaComFundo';
import { styles } from '../styles/global';

export default function CalculoCarbonoScreen() {
  const [kmCarro, setKmCarro] = useState('');
  const [horasEletronicos, setHorasEletronicos] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularEmissao = () => {
    const km = parseFloat(kmCarro) || 0;
    const horas = parseFloat(horasEletronicos) || 0;
    const co2Carro = km * 0.192;
    const co2Eletronicos = horas * 0.05;
    const total = (co2Carro + co2Eletronicos).toFixed(2);
    setResultado(total);
  };

  return (
    <TelaComFundo>
      <Text style={styles.subtitle}>Calcule suas emissões de CO₂</Text>

      <Text style={styles.textoNeutro}>Km percorridos de carro:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={kmCarro}
        onChangeText={setKmCarro}
        placeholder="Ex: 10"
        placeholderTextColor="#ccc"
      />

      <Text style={styles.textoNeutro}>Horas usando eletrônicos:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={horasEletronicos}
        onChangeText={setHorasEletronicos}
        placeholder="Ex: 3"
        placeholderTextColor="#ccc"
      />

      <TouchableOpacity style={styles.botao} onPress={calcularEmissao}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </TouchableOpacity>

      {resultado && (
        <Text style={styles.resultado}>Emissão estimada: {resultado} kg de CO₂</Text>
      )}
    </TelaComFundo>
  );
}
