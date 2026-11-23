import { ScrollView, Text } from 'react-native';
import { MenuNavigatorScreenProps } from '../types/screen-props';

export default function SettingsScreen (
    { navigation, route }: MenuNavigatorScreenProps<'SettingsTab'>
) {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text>Settings Screen</Text>
        </ScrollView>
    );
}