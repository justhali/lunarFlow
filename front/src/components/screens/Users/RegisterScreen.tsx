// import { SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import Button from '../../common/Button';
// import { useState } from 'react';
// import DateTimePicker from 'react-native-ui-datepicker'
// import dayjs from 'dayjs';


// export default function RegisterScreen({ navigation }) {
//     const [selectedDate, setSelectedDate] = useState('');
//     const [open, setOpen] = useState(false);


//     const handleOnPress = () => {
//         setOpen(!open);
//     };

//     const handleDateChange = (date) => {
//         setSelectedDate(date);
//     };
//     const hideDatePicker = () => {
//         setOpen(false);
//     };

//     return (
//         <SafeAreaView style={styles.container}>
//             <StatusBar style="auto" />

//             <View>
//                 <Text style={[styles.title]}>Sign up</Text>
//             </View>

//             <View>
//                 <View>
//                     <TextInput
//                         style={styles.input}
//                         placeholder='Email'
//                         autoCapitalize="none"
//                         placeholderTextColor='lightgrey'
//                     />
//                 </View>
//                 <View>
//                     <TextInput
//                         style={styles.input}
//                         placeholder='Password'
//                         secureTextEntry={true}
//                         autoCapitalize="none"
//                         maxLength={10}
//                         showSoftInputOnFocus={true}
//                         placeholderTextColor='lightgrey'
//                     />
//                 </View>
//                 <View>
//                     <TouchableOpacity onPress={handleOnPress}>
//                         <TextInput
//                             style={styles.input}
//                             placeholder='Date of birth'
//                             autoCapitalize="none"
//                             placeholderTextColor='lightgrey'
//                             editable={false}
//                             value={selectedDate ? dayjs(selectedDate).format('DD-MM-YYYY') : ''}
//                         />

//                     </TouchableOpacity>
//                     {open && (
//                         <DateTimePicker
//                             mode='date'
//                             onValueChange={(selectedDate) => handleDateChange(selectedDate)}
//                             onConfirm={() => hideDatePicker()}
//                             onCancel={() => hideDatePicker()}
//                         />
//                     )}

//                 </View>

//             </View>
//             <Button onPress={() => navigation.navigate('Dashboard')}>
//                 <Text>Sign in</Text>
//             </Button>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 26,
//         backgroundColor: '#F2ECE4',
//         alignItems: 'center',
//         justifyContent: 'space-around',
//     },
//     title: {
//         textAlign: 'center',
//         fontSize: 40,
//         letterSpacing: 5,
//         textShadowColor: "black",
//         color: '#2A3432',
//         textShadowOffset: { width: 1, height: 1 },
//         textShadowRadius: 4,
//     },
//     input: {
//         width: 300,
//         height: 55,
//         backgroundColor: '#FAF7F2',
//         margin: 10,
//         paddingHorizontal: 20,
//         borderRadius: 10,
//         fontSize: 18,
//     }

// });
