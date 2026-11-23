import { Link } from '@react-navigation/native';
import { ScrollView, Text } from 'react-native';
import type { AuthNavigatorScreenProps } from '../types/screen-props';

export default function LoginScreen (
    { navigation, route }: AuthNavigatorScreenProps<'Login'>
) {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text>Login Screen</Text>
            <Link screen='Signup'>Go to Signup Screen</Link>
        </ScrollView>
    );
}