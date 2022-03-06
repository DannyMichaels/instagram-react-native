import { ActivityIndicator, Text, SafeAreaView } from 'react-native';

import useFetch from '../hooks/useFetch';
import { fetchImages } from '../utils/api';
import CardList from '../components/CardList';

export default function Feed({ style }) {
  const [items, isLoading, error] = useFetch(fetchImages);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error...</Text>;
  }

  /* 
    The purpose of SafeAreaView is to render content within the safe area boundaries of a device. 
    It is currently only applicable to iOS devices with iOS version 11 or later.
  */

  return (
    <SafeAreaView style={style}>
      <CardList items={items} />
    </SafeAreaView>
  );
}
