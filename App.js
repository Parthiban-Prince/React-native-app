import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Loginscreen from './components/loginscreen';
import Singup from './components/singup';
import Loginhere from './components/Loginhere';

export default function App() {
  return (
    <View style={styles.container}>
      <Loginhere />
      <StatusBar style="auto" backgroundColor='white' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
