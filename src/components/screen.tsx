import { type ReactNode } from 'react';
import { ScrollView } from 'react-native';
import colorPalette from '../constants/color-palette';

export default function Screen (
    { children }: { children: ReactNode; }
) {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{ backgroundColor: colorPalette.background }}
        >
            {children}
        </ScrollView>
    );
}