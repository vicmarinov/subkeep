import { Text, View, StyleSheet } from 'react-native';
import type { Brief as SubscriptionBriefData } from '../types/subscriptions';
import CategoryIcon from './category-icon';
import { formatPrice } from '../utils/price-utils';
import colorPalette from '../constants/color-palette';
import shadow from '../constants/shadow';

export default function SubscriptionCard (
    { data }: { data: SubscriptionBriefData; }
) {
    return (
        <View style={styles.card}>
            <CategoryIcon categoryName={data.categoryName} />
            <Text style={[styles.text, styles.name]}>{data.name}</Text>
            <Text style={styles.text}>{formatPrice(data.price)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,

        backgroundColor: colorPalette.lightest,
        overflow: 'hidden',
        borderRadius: 25,
        padding: 15,
        paddingRight: 25,
        boxShadow: [shadow]
    },
    text: {
        fontSize: 20,
        color: colorPalette.blackText
    },
    name: {
        flexGrow: 1,
        color: colorPalette.blackText,
        fontWeight: '500'
    }
});