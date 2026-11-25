import { useContext, type ReactNode, type ReactElement } from 'react';
import { ScrollView, FlatList, StyleSheet, Platform } from 'react-native';
import type { ViewStyle, StyleProp, FlatListProps } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderHeightContext } from '@react-navigation/elements';

import colorPalette from '../constants/color-palette';

const Screen = Object.assign(ScrollableScreen, {
    NonScrollable: NonScrollableScreen,
    FlatList: FlatListScreen
});

export default Screen;

interface ScrollableScreenProps {
    children?: ReactNode;
    style?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
}

function ScrollableScreen ({
    children, style, contentContainerStyle
}: ScrollableScreenProps) {
    const androidPaddings = useAndroidPaddings();

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={[styles.screen, style]}
            contentContainerStyle={[
                androidPaddings,
                contentContainerStyle
            ]}
        >
            {children}
        </ScrollView>
    );
}

interface NonScrollableScreenProps {
    children?: ReactNode;
    style?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
}

function NonScrollableScreen ({
    children, style, contentContainerStyle
}: NonScrollableScreenProps) {
    const androidPaddings = useAndroidPaddings();

    return (
        <ScrollView
            scrollEnabled={false}
            contentInsetAdjustmentBehavior="automatic"
            style={[styles.screen, style]}
            contentContainerStyle={[
                androidPaddings,
                { flexGrow: 1 },
                contentContainerStyle
            ]}
        >
            {children}
        </ScrollView>
    );
}

interface FlatListScreenProps<T> extends Omit<
    FlatListProps<T>,
    'contentInsetAdjustmentBehavior' | 'ListHeaderComponent' | 'stickyHeaderIndices'
> {
    header?: ReactElement;
    stickyHeader?: boolean;
}

function FlatListScreen<T> ({
    header,
    stickyHeader,
    style,
    contentContainerStyle,
    ...flatListProps
}: FlatListScreenProps<T>) {
    const androidPaddings = useAndroidPaddings();
    const isStickyHeader = !!header && stickyHeader;

    return (
        <FlatList
            contentInsetAdjustmentBehavior='automatic'
            style={[styles.screen, style]}
            contentContainerStyle={[androidPaddings, contentContainerStyle]}
            ListHeaderComponent={header}
            stickyHeaderIndices={isStickyHeader ? [0] : undefined}
            {...flatListProps}
        />
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colorPalette.background,
        flex: 1
    },
});

function useAndroidPaddings (): ViewStyle | undefined {
    const safeAreaInsets = useSafeAreaInsets();
    const navigationHeaderHeight = useContext(HeaderHeightContext) ?? 0;

    if (Platform.OS !== 'android') {
        return undefined;
    }

    return {
        paddingTop: navigationHeaderHeight > 0 ? 0 : safeAreaInsets.top,
        paddingBottom: safeAreaInsets.bottom,
        paddingLeft: safeAreaInsets.left,
        paddingRight: safeAreaInsets.right,
    };
}