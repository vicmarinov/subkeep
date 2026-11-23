import { Text } from 'react-native';
import type { MenuNavigatorScreenProps } from '../types/screen-props';
import Screen from '../components/screen';

export default function SettingsScreen (
    { navigation, route }: MenuNavigatorScreenProps<'SettingsTab'>
) {
    return (
        <Screen>
            <Text>Settings Screen</Text>
        </Screen>
    );
}