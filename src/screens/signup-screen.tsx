import { ScrollView, Text } from 'react-native';
import { AuthNavigatorScreenProps } from '../types/screen-props';

export default function SignupScreen (
    { navigation, route }: AuthNavigatorScreenProps<'Signup'>
) {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text>Signup Screen</Text>
        </ScrollView>
    );
}