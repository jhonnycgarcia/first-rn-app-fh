import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { HomeworkScreen } from './src/presentation/screens';

export function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={ {flex: 1} }>
        <HomeworkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}
