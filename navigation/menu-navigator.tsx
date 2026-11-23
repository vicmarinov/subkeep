import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import OverviewScreen from '../screens/overview-screen';
import SettingsScreen from '../screens/settings-screen';
import SubscriptionsNavigator from './subscriptions-navigator';
import { Platform } from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-icons';

const TabNavigator = createNativeBottomTabNavigator();

export default function MenuNavigator () {
    // TODO: Make sure that all tab icons are displayed correctly on Android
    return (
        <TabNavigator.Navigator>
            <TabNavigator.Screen
                name='Overview Tab'
                component={OverviewScreen}
                options={{
                    title: 'Overview',
                    tabBarIcon: Platform.OS === 'ios'
                        ? {
                            type: 'sfSymbol',
                            name: 'chart.pie'
                        }
                        : {
                            type: 'image',
                            source: MaterialIcons
                                .getImageSourceSync('pie-chart')
                        }
                }}
            />
            <TabNavigator.Screen
                name='Subscriptions Tab'
                component={SubscriptionsNavigator}
                options={{
                    title: 'Subscriptions',
                    tabBarIcon: Platform.OS === 'ios'
                        ? {
                            type: 'sfSymbol',
                            name: 'creditcard'
                        }
                        : {
                            type: 'image',
                            source: MaterialIcons
                                .getImageSourceSync('credit-card')
                        }
                }}
            />
            <TabNavigator.Screen
                name='Settings Tab'
                component={SettingsScreen}
                options={{
                    title: 'Settings',
                    tabBarIcon: Platform.OS === 'ios'
                        ? {
                            type: 'sfSymbol',
                            name: 'gearshape'
                        }
                        : {
                            type: 'image',
                            source: MaterialIcons
                                .getImageSourceSync('settings')
                        }
                }}
            />
        </TabNavigator.Navigator>
    );
}