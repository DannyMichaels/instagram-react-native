import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Constants from 'expo-constants';
import Feed from './screens/Feed';

const platformVersion =
  Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Feed style={styles.feed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  feed: {
    // leave room at top of screen for status bar.
    // marginTop: Constants.statusBarHeight, // don't need FOR IOS anymore because component uses SafeAreaView
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? Constants.statusBarHeight
        : 0,

    flex: 1,
  },
});
