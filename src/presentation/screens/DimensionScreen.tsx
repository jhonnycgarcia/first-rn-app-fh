import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

// const { width, height } = Dimensions.get('window');

export const DimensionScreen = () => {

    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.purpleBox,
                    width: width * 0.5,
                }} />
            </View>
            <Text style={styles.title}>w: {width}, h: {height}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    height: 300,
    width: 300,
    backgroundColor: 'red',
  },
  purpleBox: {
    height: '50%',
    width: '50%',
    backgroundColor: '#5856d6',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
