import { Link } from '@react-navigation/native';
import { ScrollView, Text } from 'react-native';
import type { SubscriptionsNavigatorScreenProps } from '../types/screen-props';

export default function SubscriptionsListScreen (
    { navigation, route }: SubscriptionsNavigatorScreenProps<'SubscriptionsList'>
) {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text>Subscriptions List Screen</Text>
            <Link screen='SubscriptionDetails'>Go to Subscription Details Screen</Link>
            <Link screen='SaveSubscription'>Go to Save Subscription Screen</Link>
        </ScrollView>
    );
}