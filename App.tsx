import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/root-navigator';

export default function App () {
    return (
        <>
            <StatusBar />

            <NavigationContainer >
                <RootNavigator />
            </NavigationContainer>
        </>
    );
}