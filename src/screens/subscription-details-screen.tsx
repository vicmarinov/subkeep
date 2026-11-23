import { Link } from '@react-navigation/native';
import { ScrollView, Text } from 'react-native';
import { SubscriptionsNavigatorScreenProps } from '../types/screen-props';

export default function SubscriptionDetailsScreen (
    { navigation, route }: SubscriptionsNavigatorScreenProps<'SubscriptionDetails'>
) {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text>Subscription Details Screen</Text>
            <Link screen='SaveSubscription'>Go to Save Subscription Screen</Link>
        </ScrollView>
    );
}