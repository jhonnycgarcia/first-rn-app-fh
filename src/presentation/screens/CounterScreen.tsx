import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native-paper';

export const CounterScreen = () => {

    const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{counter}</Text>
        <Button
          mode="contained"
          onPress={() => setCounter(counter + 1)}
          onLongPress={() => setCounter(0)}
        >
          Incrementar
        </Button>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});
