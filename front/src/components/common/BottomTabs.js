import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import QuotesLiked from "../screens/Quotes/QuotesLiked"
import Mood from "../screens/Moods/MoodList"
import Calendar from "../screens/Generic/Calendar"
import Profile from "../screens/Users/ProfileScreen"



const Tab = createBottomTabNavigator();


export default function BottomTabs() {
    return (
        <Tab.Navigator initialRouteName='Dashboard'
        >

            <Tab.Screen
                name="Liked"
                component={QuotesLiked}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="hearto" size={24} color="black" />
                    ),
                }}
            >
            </Tab.Screen>
            <Tab.Screen
                name='Mood'
                component={Mood}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="pluscircleo" size={24} color="black" />
                    ),
                }}
            >
                
            </Tab.Screen>
            <Tab.Screen
                name='Calendar'
                component={Calendar}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="calendar" size={24} color="black" />
                    ),
                }}
            >
                
            </Tab.Screen>
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" size={24} color="black" />
                    ),
                }}
            >
               
            </Tab.Screen>


        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    bottomTabs: {
        width: '100%',
        height: 50,
        zIndex: 1000,
        position: 'absolute',
        flexDirection: 'row',
        bottom: 0,
        paddingVertical: 10,
        backgroundColor: '#9FCCB7',
        alignItems: 'center',
        justifyContent: 'space-around',
        shadowColor: "#000",
        marginTop: 8,
        shadowOffset: {
            width: 2,
            height: -4,
        },
        shadowOpacity: 1,
        shadowRadius: 3,

        elevation: 4,
    },

})

// return (
//     <Tab.Navigator
//     screenOptions={{
//             headerShown: false,
//             tabBarButton: (props) => <TouchableOpacity {...props} />,
//             tabBarActiveBackgroundColor: '#F4EDE8',
//             tabBarStyle: { position: 'absolute' },
//         }}

//     >
//         <Tab.Screen
//             name="Liked"
//             component={QuotesLiked}
//             options={{
//                 tabBarIcon: ({ color, size }) => (
//                     <AntDesign name="hearto" size={24} color="black" />
//                 ),
//             }}
//         />
//         <Tab.Screen
//             name="Moods"
//             component={Moods}
//             options={{
//                 tabBarIcon: ({ color, size }) => (
//                     <AntDesign name="pluscircleo" size={24} color="black" />
//                 ),
//             }}
//         />
//         <Tab.Screen
//             name="Calendar"
//             component={Calendar}
//             options={{
//                 tabBarIcon: ({ color, size }) => (
//                     <AntDesign name="calendar" size={24} color="black" />
//                 ),
//             }}
//         />
//         <Tab.Screen
//             name="Profile"
//             component={Profile}
//             options={{
//                 tabBarIcon: ({ color, size }) => (
//                     <AntDesign name="user" size={24} color="black" />
//                     // <AntDesign name="calendar" size={24} color="black" />
//                 ),
//             }} />
//     </Tab.Navigator>
// )