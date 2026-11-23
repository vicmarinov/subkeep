import type { NavigatorScreenParams } from '@react-navigation/native';

export type RootNavigatorParamList = {
    MenuNavigator: NavigatorScreenParams<MenuNavigatorParamList>;
    SaveSubscription: undefined;
};

export type AuthNavigatorParamList = {
    Login: undefined;
    Signup: undefined;
};

export type MenuNavigatorParamList = {
    OverviewTab: undefined;
    SubscriptionsTab: NavigatorScreenParams<SubscriptionsNavigatorParamList>;
    SettingsTab: undefined;
};

export type SubscriptionsNavigatorParamList = {
    SubscriptionsList: undefined;
    // TODO: Add a type for the subscription details screen params
    SubscriptionDetails: undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends
            RootNavigatorParamList,
            AuthNavigatorParamList,
            MenuNavigatorParamList,
            SubscriptionsNavigatorParamList { }
    }
}