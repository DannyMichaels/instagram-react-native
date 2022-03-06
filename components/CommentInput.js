import { StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function CommentInput({ onSubmit, placeholder }) {
  const [newComment, setNewComment] = useState('');

  const handleChangeText = (newValue) => setNewComment(newValue);

  const handleSubmitEditing = () => {
    if (!newComment) return;
    onSubmit(newComment);
    setNewComment('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={newComment}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 20,
    height: 60,
  },
  input: {
    flex: 1,
  },
});
