import { Link } from '@react-navigation/native';
import { ScrollView, Text } from 'react-native';

export default function SubscriptionsListScreen () {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text>Subscriptions List Screen</Text>
            <Link screen='Subscription Details'>Go to Subscription Details Screen</Link>
            <Link screen='Save Subscription'>Go to Save Subscription Screen</Link>
        </ScrollView>
    );
}