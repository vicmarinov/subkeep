import { Link } from '@react-navigation/native';
import { Text } from 'react-native';
import type { MenuNavigatorScreenProps } from '../types/screen-props';
import Screen from '../components/screen';

export default function OverviewScreen (
    { navigation, route }: MenuNavigatorScreenProps<'OverviewTab'>
) {
    return (
        <Screen>
            <Text>Overview Screen</Text>
            <Link screen='SaveSubscription'>Go to Save Subscription Screen</Link>
        </Screen>
    );
}