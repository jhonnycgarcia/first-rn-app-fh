import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { FlexDirectionScreen } from './src/presentation/screens';

export function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={ {flex: 1} }>
        <FlexDirectionScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}
