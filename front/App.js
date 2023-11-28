import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LaunchScreen from './src/components/screens/Generic/LaunchScreen';
import Mood from './src/components/screens/Moods/MoodList';
import RegisterScreen from './src/components/screens/Users/RegisterScreen';
import Login from './src/components/screens/Users/LoginScreen'
import Dashboard from './src/components/screens/Generic/Dashboard';
import QuotesLiked from "./src/components/screens/Quotes/QuotesLiked"
import Calendar from "./src/components/screens/Generic/Calendar"
import Profile from "./src/components/screens/Users/ProfileScreen"
import BottomTabs from "./src/components/common/BottomTabs"


const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Launch"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Launch" component={LaunchScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Mood" component={Mood} />
        <Stack.Screen name="QuotesLiked" component={QuotesLiked} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

