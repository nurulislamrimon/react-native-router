import {
  Text,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function App() {
  const isDark = false; // useColorScheme() === 'dark';
  return (
    <SafeAreaView style={[containerStyles(isDark), styles.container]}>
      <Text style={[textStyles(isDark), styles.title]}>App</Text>
      <TouchableOpacity onPress={() => console.log('Hello')}>
        <Text>Click Here</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
// =======================================
// styles
// =======================================
const containerStyles = (isDark: boolean): StyleProp<ViewStyle> => ({
  backgroundColor: isDark ? 'black' : 'white',
  height: '100%',
});
const textStyles = (isDark: boolean): StyleProp<TextStyle> => ({
  backgroundColor: isDark ? 'black' : 'white',
  color: isDark ? 'white' : 'black',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
