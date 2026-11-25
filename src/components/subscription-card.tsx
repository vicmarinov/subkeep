import { Text, View, StyleSheet } from 'react-native';
import type { Brief as SubscriptionBriefData } from '../types/subscriptions';
import { formatPrice } from '../utils/price-utils';
import colorPalette from '../constants/color-palette';
import shadow from '../constants/shadow';

export default function SubscriptionCard (
    { data }: { data: SubscriptionBriefData; }
) {
    return (
        <View style={styles.card}>
            <Text style={[styles.text, styles.name]}>{data.name}</Text>
            <Text style={styles.text}>{formatPrice(data.price)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        backgroundColor: colorPalette.lightest,
        overflow: 'hidden',
        borderRadius: 15,
        padding: 30,
        boxShadow: [shadow]
    },
    text: {
        fontSize: 20,
        color: colorPalette.blackText
    },
    name: {
        flexGrow: 1
    }
});