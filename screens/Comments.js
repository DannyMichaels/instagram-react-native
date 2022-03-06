import { useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';
import { useStore } from '../store/useStore';

export default function Comments({ style }) {
  const { allComments, addComment, closeCommentScreen, selectedItemId } =
    useStore();

  const onSubmitComment = useCallback((newComment) => {
    addComment(newComment);
  }, []);

  return (
    <SafeAreaView style={style}>
      <NavigationBar
        title="Comments"
        leftText="Close"
        onPressLeftText={closeCommentScreen}
      />
      <CommentInput placeholder="Leave a comment" onSubmit={onSubmitComment} />
      <CommentList comments={allComments[selectedItemId] || []} />
    </SafeAreaView>
  );
}
