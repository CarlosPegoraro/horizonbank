import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header/Header';
import Balence from '../../components/Balance/Balance';


export function Home() {
  return (
    <View style={styles.container}>
      <Header name="Carlos Eduardo"/>
      <Balence/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center',
  },
});