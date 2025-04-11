import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';

export const CounterScreen = () => {

    const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{counter}</Text>
        <Pressable
            onPress={() => setCounter(counter + 1)}
            onLongPress={() => setCounter(0)}
        >
            <Text>+1</Text>
        </Pressable>
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
