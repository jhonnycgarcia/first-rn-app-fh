import { View, Text } from 'react-native';
import { useState } from 'react';
import { globalStyles } from '../theme/global.styles';
import { FAB } from 'react-native-paper';
import Icon from '@react-native-vector-icons/fontawesome6';

export const CounterM3Screen = () => {

  const [counter, setCounter] = useState(10);

  const buttonIcon = () => {
    return <Icon name="plus" size={24} iconStyle="solid" />;
  };

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{counter}</Text>
      <FAB
        icon={buttonIcon}
        style={globalStyles.fab}
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
      />
    </View>
  );
};
