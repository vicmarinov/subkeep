import { Platform } from 'react-native';
import { SymbolView, type SFSymbol } from 'expo-symbols';
import MaterialIcons, { type MaterialIconsIconName } from '@react-native-vector-icons/material-icons';
import colorPalette from '../constants/color-palette';

interface IconProps {
    iosName: SFSymbol;
    androidName: MaterialIconsIconName;
    color?: string;
    size?: number;
}

export default function Icon ({
    iosName,
    androidName,
    color = colorPalette.blackText,
    size = 25
}: IconProps) {
    if (Platform.OS === 'ios') {
        return (
            <SymbolView
                name={iosName}
                tintColor={color}
                style={{ width: size, height: size }}
                resizeMode='scaleAspectFit'
            />
        );
    }

    return (
        <MaterialIcons
            name={androidName}
            color={color}
            size={size}
        />
    );
}