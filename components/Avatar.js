import { View, Text, StyleSheet } from 'react-native';

export default function Avatar({ initials, size, backgroundColor }) {
  return (
    <View style={styles({ size, backgroundColor }).container}>
      <Text style={styles({}).text}>{initials}</Text>
    </View>
  );
}

const styles = ({ size, backgroundColor }) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor,
    },
    text: {
      color: '#fff',
    },
  });
