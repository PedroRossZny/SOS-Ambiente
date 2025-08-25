import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CalculoCarbonoScreen from '../screens/CalculoCarbonoScreen';
import CarbonoScreen from '../screens/CarbonoScreen';
import DicasScreen from '../screens/DicasScreen';
import HistoricoCarbonoScreen from '../screens/HistoricoCarbonoScreen';
import HistoricoScreen from '../screens/HistoricoScreen';
import HomeScreen from '../screens/HomeScreen';
import RegistroScreen from '../screens/RegistroScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#4CAF50' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Início" component={HomeScreen} />
      <Stack.Screen name="Registro" component={RegistroScreen} />
      <Stack.Screen name="Historico" component={HistoricoScreen} />
      <Stack.Screen name="Dicas" component={DicasScreen} />
      <Stack.Screen name="Carbono" component={CarbonoScreen} />
      <Stack.Screen name="Histórico de Carbono" component={HistoricoCarbonoScreen} />
      <Stack.Screen name="Calcular CO₂" component={CalculoCarbonoScreen} />
    </Stack.Navigator>
  );
}
