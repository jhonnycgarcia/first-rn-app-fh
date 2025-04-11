import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
import Icon from '@react-native-vector-icons/fontawesome6';

export function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <CounterM3Screen />
      </SafeAreaView>
    </PaperProvider>
  );
}
