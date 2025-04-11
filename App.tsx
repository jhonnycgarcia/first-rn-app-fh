import { SafeAreaView } from 'react-native';
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';
import { CounterScreen } from './src/presentation/screens/CounterScreen';

export function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HelloWorldScreen name="Pedro Lars" /> */}
      <CounterScreen />
    </SafeAreaView>
  );
}
