import { Link } from '@react-navigation/native';
import { Text } from 'react-native';
import type { AuthNavigatorScreenProps } from '../types/screen-props';
import Screen from '../components/screen';

export default function LoginScreen (
    { navigation, route }: AuthNavigatorScreenProps<'Login'>
) {
    return (
        <Screen.NonScrollable>
            <Text>Login Screen</Text>
            <Link screen='Signup'>Go to Signup Screen</Link>
        </Screen.NonScrollable>
    );
}