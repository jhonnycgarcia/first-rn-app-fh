import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { PositionScreen } from './src/presentation/screens';

export function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <PositionScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}
