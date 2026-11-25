import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/root-navigator';
import CategoryNamesProvider from './contexts/categoryNames/category-names-provider';

export default function App () {
    return (
        <SafeAreaProvider>
            <StatusBar />

            <CategoryNamesProvider>
                <NavigationContainer >
                    <RootNavigator />
                </NavigationContainer>
            </CategoryNamesProvider>
        </SafeAreaProvider>
    );
}