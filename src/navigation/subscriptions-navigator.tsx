import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SubscriptionsListScreen from '../screens/subscriptions-list-screen';
import SubscriptionDetailsScreen from '../screens/subscription-details-screen';
import type { SubscriptionsNavigatorParamList } from '../types/navigation-params';

const StackNavigator = createNativeStackNavigator<SubscriptionsNavigatorParamList>();

export default function SubscriptionsNavigator () {
    return (
        <StackNavigator.Navigator screenOptions={{ headerTransparent: true }}>
            <StackNavigator.Screen
                name='SubscriptionsList'
                component={SubscriptionsListScreen}
                options={{
                    title: 'List',
                    headerShown: false
                }}
            />
            <StackNavigator.Screen
                name='SubscriptionDetails'
                component={SubscriptionDetailsScreen}
                options={{ title: 'Details' }}
            />
        </StackNavigator.Navigator>
    );
}