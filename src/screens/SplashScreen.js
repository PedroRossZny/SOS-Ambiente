import { useEffect, useRef } from 'react';
import { Animated, ImageBackground, View } from 'react-native';
import { styles } from '../styles/global';

const background = require('../../assets/forest.jpg');

export default function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 2000, useNativeDriver: true }).start();
    const timer = setTimeout(() => navigation.replace('Início'), 3000);
    return () => clearTimeout(timer);
  }, [fadeAnim, navigation]);

  return (
    <ImageBackground
      source={background}
      style={styles.splash}
      imageStyle={styles.backgroundImage}
      blurRadius={2}
    >
      <View style={styles.dim} />
      <Animated.Text style={[styles.splashText, { opacity: fadeAnim }]}>
        S.O.S Ambiente
      </Animated.Text>
    </ImageBackground>
  );
}
