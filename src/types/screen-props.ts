import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { NativeBottomTabScreenProps } from '@react-navigation/bottom-tabs/unstable';
import type {
    AuthNavigatorParamList,
    MenuNavigatorParamList,
    RootNavigatorParamList,
    SubscriptionsNavigatorParamList
} from './navigation-params';

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