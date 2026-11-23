import { Link } from '@react-navigation/native';
import { Text } from 'react-native';
import type { SubscriptionsNavigatorScreenProps } from '../types/screen-props';
import Screen from '../components/screen';

export default function SubscriptionDetailsScreen (
    { navigation, route }: SubscriptionsNavigatorScreenProps<'SubscriptionDetails'>
) {
    return (
        <Screen>
            <Text>Subscription Details Screen</Text>
            <Link screen='SaveSubscription'>Go to Save Subscription Screen</Link>
        </Screen>
    );
}