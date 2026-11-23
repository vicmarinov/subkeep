import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/root-navigator';
import CategoryNamesProvider from './contexts/categoryNames/category-names-provider';

export default function App () {
    return (
        <CategoryNamesProvider>
            <StatusBar />

            <NavigationContainer >
                <RootNavigator />
            </NavigationContainer>
        </CategoryNamesProvider>
    );
}