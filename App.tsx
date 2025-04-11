import { SafeAreaView } from 'react-native';
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';

export function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HelloWorldScreen />
    </SafeAreaView>
  );
}
