import { Text } from 'react-native';
import type { RootNavigatorScreenProps } from '../types/screen-props';
import Screen from '../components/screen';

export default function SaveSubscriptionScreen (
    { navigation, route }: RootNavigatorScreenProps<'SaveSubscription'>
) {
    return (
        <Screen>
            <Text>Save Subscription Screen</Text>
        </Screen>
    );
}