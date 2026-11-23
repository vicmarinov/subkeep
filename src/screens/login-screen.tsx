import { Link } from '@react-navigation/native';
import { ScrollView, Text } from 'react-native';

export default function LoginScreen () {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text>Login Screen</Text>
            <Link screen='Signup'>Go to Signup Screen</Link>
        </ScrollView>
    );
}