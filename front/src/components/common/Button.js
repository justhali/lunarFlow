import { View, StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function BtnPrimary({ text, onPress }) {
  const navigation = useNavigation();
  const handleNav = () => {
    navigation.navigate(onPress);
  }

  return (
    <View>
      <Pressable
        style={[styles.clickButton]}
        onPress={handleNav}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  clickButton: {
    backgroundColor: "lightgrey",
    justifyContent: "center",
    paddingVertical: 13, 
    paddingHorizontal: 30,
    borderRadius: 17,
    shadowColor: 'gainsboro', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  }
});
