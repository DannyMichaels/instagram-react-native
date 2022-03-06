import { FlatList } from 'react-native';
import { getImageFromId } from '../utils/api';
import Card from './Card';

// we need to provide a function to the FlastList which maps each element in our data array to it's unique key
const keyExtractor = ({ id }) => id.toString();

const renderItem = ({ item: { id, author } }) => (
  <Card fullName={author} image={{ uri: getImageFromId(id) }} />
);

export default function CardList({ items }) {
  // https://reactnative.dev/docs/flatlist
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
}
