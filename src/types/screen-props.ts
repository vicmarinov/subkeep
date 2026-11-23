import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NativeBottomTabScreenProps } from '@react-navigation/bottom-tabs/unstable';
import {
    AuthNavigatorParamList,
    MenuNavigatorParamList,
    RootNavigatorParamList,
    SubscriptionsNavigatorParamList
} from './navigation-params';
import { CompositeScreenProps } from '@react-navigation/native';

export type RootNavigatorScreenProps<T extends keyof RootNavigatorParamList> =
    NativeStackScreenProps<RootNavigatorParamList, T>;

export type AuthNavigatorScreenProps<T extends keyof AuthNavigatorParamList> =
    NativeStackScreenProps<AuthNavigatorParamList, T>;

export type MenuNavigatorScreenProps<T extends keyof MenuNavigatorParamList> =
    CompositeScreenProps<
        NativeBottomTabScreenProps<MenuNavigatorParamList, T>,
        RootNavigatorScreenProps<'MenuNavigator'>
    >;

export type SubscriptionsNavigatorScreenProps<T extends keyof SubscriptionsNavigatorParamList> =
    CompositeScreenProps<
        NativeStackScreenProps<SubscriptionsNavigatorParamList, T>,
        MenuNavigatorScreenProps<'SubscriptionsTab'>
    >;