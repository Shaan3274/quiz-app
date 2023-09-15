import react from 'react';
import { } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabActions } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import ResultScreen from '../screens/ResultScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { Screen } from 'react-native-screens';
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (<Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Quiz" component={QuizScreen}></Stack.Screen>
        <Stack.Screen name="Result" component={ResultScreen} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>);
}
export default StackNavigation;