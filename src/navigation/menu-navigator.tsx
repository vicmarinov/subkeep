import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import OverviewScreen from '../screens/overview-screen';
import SettingsScreen from '../screens/settings-screen';
import SubscriptionsNavigator from './subscriptions-navigator';
import { Platform } from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import type { MenuNavigatorParamList } from '../types/navigation-params';

const TabNavigator = createNativeBottomTabNavigator<MenuNavigatorParamList>();

export default function MenuNavigator () {
    // TODO: Make sure that all tab icons are displayed correctly on Android
    return (
        <TabNavigator.Navigator>
            <TabNavigator.Screen
                name='OverviewTab'
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
                name='SubscriptionsTab'
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
                name='SettingsTab'
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