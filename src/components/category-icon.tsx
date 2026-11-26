import { View, StyleSheet } from 'react-native';
import Icon from './icon';
import categoryIcons from '../constants/category-icons';

export default function CategoryIcon (
    { categoryName }: { categoryName: string | null; }
) {
    const iconData = categoryIcons[categoryName ?? 'Other'];

    return (
        <View style={[
            styles.container,
            { backgroundColor: iconData.backgroundColor }
        ]}>
            <Icon
                iosName={iconData.ios}
                androidName={iconData.android}
                color={iconData.color}
                size={30}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        aspectRatio: 1,

        borderRadius: 10,

        justifyContent: 'center',
        alignItems: 'center'
    }
});