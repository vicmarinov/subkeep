import { ScrollView, Text } from 'react-native';
import type { RootNavigatorScreenProps } from '../types/screen-props';

export default function SaveSubscriptionScreen (
    { navigation, route }: RootNavigatorScreenProps<'SaveSubscription'>
) {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text>Save Subscription Screen</Text>
        </ScrollView>
    );
}