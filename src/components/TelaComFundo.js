import { ImageBackground, ScrollView } from 'react-native';
import { styles } from '../styles/global';

const background = {
  uri: 'https://th.bing.com/th/id/R.7370231b14332b6bf58ae4e903d7f371?rik=KZMVMZxifQ382A&pid=ImgRaw&r=0'
};

export default function TelaComFundo({ children }) {
  return (
    <ImageBackground source={background} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        {children}
      </ScrollView>
    </ImageBackground>
  );
}
