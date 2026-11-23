import { Link } from '@react-navigation/native';
import { ScrollView, Text } from 'react-native';

export default function OverviewScreen () {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text>Overview Screen</Text>
            <Link screen='Save Subscription'>Go to Save Subscription Screen</Link>
        </ScrollView>
    );
}