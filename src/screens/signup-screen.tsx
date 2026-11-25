import { Text } from 'react-native';
import type { AuthNavigatorScreenProps } from '../types/screen-props';
import Screen from '../components/screen';

export default function SignupScreen (
    { navigation, route }: AuthNavigatorScreenProps<'Signup'>
) {
    return (
        <Screen.NonScrollable>
            <Text>Signup Screen</Text>
        </Screen.NonScrollable>
    );
}