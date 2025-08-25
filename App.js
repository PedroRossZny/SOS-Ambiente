import { NavigationContainer } from '@react-navigation/native';
import { AppStateProvider } from './src/context/AppState';
import Navigation from './src/navigation';

export default function App() {
  return (
    <AppStateProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </AppStateProvider>
  );
}
