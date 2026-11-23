import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SubscriptionsListScreen from '../screens/subscriptions-list-screen';
import SubscriptionDetailsScreen from '../screens/subscription-details-screen';

const StackNavigator = createNativeStackNavigator();

export default function SubscriptionsNavigator () {
    return (
        <StackNavigator.Navigator screenOptions={{ headerTransparent: true }}>
            <StackNavigator.Screen
                name='Subscriptions List'
                component={SubscriptionsListScreen}
                options={{
                    title: 'List',
                    headerShown: false
                }}
            />
            <StackNavigator.Screen
                name='Subscription Details'
                component={SubscriptionDetailsScreen}
                options={{ title: 'Details' }}
            />
        </StackNavigator.Navigator>
    );
}