import { Link, useNavigation } from '@react-navigation/native';
import { ScrollView, Text } from 'react-native';
import { MenuNavigatorScreenProps } from '../types/screen-props';

export default function OverviewScreen (
    { navigation, route }: MenuNavigatorScreenProps<'OverviewTab'>
) {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text>Overview Screen</Text>
            <Link screen='SaveSubscription'>Go to Save Subscription Screen</Link>
        </ScrollView>
    );
}