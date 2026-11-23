import { Link } from '@react-navigation/native';
import { ScrollView, Text } from 'react-native';

export default function SubscriptionDetailsScreen () {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text>Subscription Details Screen</Text>
            <Link screen='Save Subscription'>Go to Save Subscription Screen</Link>
        </ScrollView>
    );
}