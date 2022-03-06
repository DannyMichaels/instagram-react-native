import { View, Text, ScrollView, StyleSheet } from 'react-native';

// FlatList would be more performant, but using ScrollView for practice
/*
  The ScrollView is simpler than the FlatList: it will render all of its children in a vertically or horizontally scrollable list,
  without the additional complexity of the keyExtractor or renderItem props.

  the ScrollView is well suited for scrolling through small quantities of content (fewer than 20 items or so).
  Content within a ScrollView is rendered even when it isn't visible on the screen, so if you have a large amount of content
  you'd rather use FlatList for better performance
*/
export default function CommentList({ comments }) {
  return (
    <ScrollView>
      {comments?.length > 0
        ? comments.map((comment, idx) => (
            <View key={idx} style={styles.comment}>
              <Text>{comment}</Text>
            </View>
          ))
        : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  comment: {
    marginLeft: 20,
    paddingVertical: 20,
    paddingRight: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
});
