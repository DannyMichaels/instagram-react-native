import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import CardList from './components/CardList';

const items = [
  {
    id: 0,
    author: 'Bob Ross',
  },
  {
    id: 1,
    author: 'Chuck Norris',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CardList items={items} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // leave room at top of screen for status bar.
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
