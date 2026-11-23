import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuNavigator from './menu-navigator';
import SaveSubscriptionScreen from '../screens/save-subscription-screen';
import AuthNavigator from './auth-navigator';

const StackNavigator = createNativeStackNavigator();

export default function RootNavigator () {
    // TODO: Get the authentication state from a context
    const isAuth = true;

    if (!isAuth) {
        return (
            <AuthNavigator/>
        );
    }

    return (
        <StackNavigator.Navigator screenOptions={{
            headerTransparent: true,
            headerBackButtonDisplayMode: 'generic'
        }}>
            <StackNavigator.Screen
                name='Menu Navigator'
                component={MenuNavigator}
                options={{ headerShown: false }}
            />
            <StackNavigator.Screen
                name='Save Subscription'
                component={SaveSubscriptionScreen}
            />
        </StackNavigator.Navigator>
    );
}