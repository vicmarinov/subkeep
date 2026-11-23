import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login-screen';
import SignupScreen from '../screens/signup-screen';

const StackNavigator = createNativeStackNavigator();

export default function AuthNavigator () {
    return (
        <StackNavigator.Navigator screenOptions={{ headerTransparent: true }}>
            <StackNavigator.Screen
                name='Login'
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <StackNavigator.Screen
                name='Signup'
                component={SignupScreen}
            />
        </StackNavigator.Navigator>
    );
}