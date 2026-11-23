import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuNavigator from './menu-navigator';
import SaveSubscriptionScreen from '../screens/save-subscription-screen';
import AuthNavigator from './auth-navigator';
import { RootNavigatorParamList } from '../types/navigation-params';

const StackNavigator = createNativeStackNavigator<RootNavigatorParamList>();

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
                name='MenuNavigator'
                component={MenuNavigator}
                options={{ headerShown: false }}
            />
            <StackNavigator.Screen
                name='SaveSubscription'
                component={SaveSubscriptionScreen}
            />
        </StackNavigator.Navigator>
    );
}