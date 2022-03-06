import { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useStore } from '../store/useStore';
import { getImageFromId } from '../utils/api';
import Card from './Card';

// we need to provide a function to the FlastList which maps each element in our data array to it's unique key
const keyExtractor = ({ id }) => id.toString();

export default function CardList({ posts }) {
  const { allComments, openCommentScreen } = useStore();

  const onPressComments = useCallback((postId) => {
    openCommentScreen(postId);
  }, []);

  const renderPost = ({ item: { id, author } }) => {
    const postComments = allComments[id] || [];

    return (
      <Card
        fullName={author}
        image={{ uri: getImageFromId(id) }}
        linkText={`${postComments ? postComments.length : 0} Comments`}
        onPressLinkText={() => onPressComments(id)}
      />
    );
  };

  // https://reactnative.dev/docs/flatlist
  return (
    <FlatList
      data={posts}
      renderItem={renderPost}
      keyExtractor={keyExtractor}
      extraData={allComments}
    />
  );
}
