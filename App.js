import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform, Modal } from 'react-native';
import Constants from 'expo-constants';
import Feed from './screens/Feed';
import Comments from './screens/Comments';
import { useStore } from './store/useStore';

const platformVersion =
  Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version;

export default function App() {
  const { showCommentModal, closeCommentScreen } = useStore();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Feed style={styles.feed} />
      <Modal
        visible={showCommentModal}
        animationType="slide"
        onRequestClose={closeCommentScreen}>
        <Comments style={styles.comments} />
      </Modal>
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

  comments: {
    flex: 1,
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? Constants.statusBarHeight
        : 0,
  },
});
