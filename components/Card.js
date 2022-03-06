import { useState } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import AuthorRow from './AuthorRow';

export default function Card({
  linkText = '',
  onPressLinkText = () => {},
  fullName,
  image,
}) {
  const [isLoading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <View>
      <AuthorRow
        fullName={fullName}
        linkText={linkText}
        onPressLinkText={onPressLinkText}
      />
      <View style={styles.image}>
        {isLoading && (
          <ActivityIndicator style={StyleSheet.absoluteFill} size="large" />
        )}
        <Image
          style={StyleSheet.absoluteFill}
          source={image}
          onLoad={handleLoad}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1, // required
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  // absoluteFill: {
  //   position: 'absolute',
  //   top: 0,
  //   right: 0,
  //   bottom: 0,
  //   left: 0,
  // },
});
