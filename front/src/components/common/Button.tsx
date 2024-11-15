
// import { ReactNode } from "react";
// import { View, StyleSheet, Pressable, Text } from "react-native";

// interface ButtonProps{
//   onPress: () => void;
//   children: ReactNode;
// }
// export default function Button({onPress, children}: ButtonProps){


//   return (
//     <View>
//       <Pressable
//         style={[styles.clickButton]}
//         onPress={onPress}>
//         <Text style={[styles.textBtn]}>{children}</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   clickButton: {
//     backgroundColor: "#9FCCB7",
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 30,
//     alignItems: 'center', // Aligner le texte au centre horizontalement
//     justifyContent: 'center', // Aligner le texte au centre verticalement
//     shadowColor: "#000000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity:  0.17,
//     shadowRadius: 3,
//     elevation: 4
//   },
//   textBtn:{
//     color: '#2A3432',
//     fontSize: 20,
//     fontWeight: "bold"
//   }
// });