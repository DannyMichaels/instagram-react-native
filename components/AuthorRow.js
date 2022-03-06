import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Avatar from './Avatar';
import getInitials from '../utils/getInitials';
import getAvatarColor from '../utils/getAvatarColor';

export default function AuthorRow({ fullName, linkText, onPressLinkText }) {
  return (
    <View style={styles.container}>
      <Avatar
        size={35}
        initials={getInitials(fullName)}
        backgroundColor={getAvatarColor(fullName)}
      />

      {/* use numberOflines={1} so that the Text is truncated when it reaches the end of the line, rather than wrapping around to multiple lines */}
      <Text style={styles.text} numberOfLines={1}>
        {fullName}
      </Text>

      {/* The TouchableOpacity component is similar to View, but lets us easily respond to tap gestures in a performant way. It also fades out when pressed, and fades back in when released, the animation does not trigger a rerender */}

      {Boolean(linkText) && (
        <TouchableOpacity onPress={onPressLinkText}>
          <Text numberOfLines={1}>{linkText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    flex: 1, // we use flex 1 so that Text expands to fill any remaining space in the View. This will pouch TouachableOpacity to the right side.
    marginHorizontal: 6,
  },
});
