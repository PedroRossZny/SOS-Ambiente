import { ImageBackground, ScrollView, View } from 'react-native';
import { styles } from '../styles/global';

const background = require('../../assets/images/forest.jpg');

export default function TelaComFundo({ children }) {
  return (
    <ImageBackground
      source={background}
      style={styles.background}
      imageStyle={styles.backgroundImage}
      blurRadius={2} 
    >
      {}
      <View style={styles.dim} />
      <ScrollView contentContainerStyle={styles.container}>
        {children}
      </ScrollView>
    </ImageBackground>
  );
}
