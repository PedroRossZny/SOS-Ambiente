import { useEffect, useRef } from 'react';
import { Animated, ImageBackground } from 'react-native';
import { styles } from '../styles/global';

const background = {
  uri: 'https://th.bing.com/th/id/R.7370231b14332b6bf58ae4e903d7f371?rik=KZMVMZxifQ382A&pid=ImgRaw&r=0'
};

export default function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 2000, useNativeDriver: true }).start();
    const timer = setTimeout(() => navigation.replace('Início'), 3000);
    return () => clearTimeout(timer);
  }, [fadeAnim, navigation]);

  return (
    <ImageBackground source={background} style={styles.splash}>
      <Animated.Text style={[styles.splashText, { opacity: fadeAnim }]}>
        S.O.S Ambiente
      </Animated.Text>
    </ImageBackground>
  );
}
