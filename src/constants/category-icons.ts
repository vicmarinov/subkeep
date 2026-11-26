import { type SFSymbol } from 'expo-symbols';
import { type MaterialIconsIconName } from '@react-native-vector-icons/material-icons';

type CategoryIcons = Record<string, {
    ios: SFSymbol;
    android: MaterialIconsIconName;
    color: string;
    backgroundColor: string;
}>;

const categoryIcons: CategoryIcons = {
    'Entertainment': {
        ios: 'tv.fill',
        android: 'live-tv',
        color: '#ba1a1a',
        backgroundColor: '#ffdad6'
    },
    'Music': {
        ios: 'music.note',
        android: 'music-note',
        color: '#ba1a1a',
        backgroundColor: '#ffdad6'
    },
    'Gaming': {
        ios: 'gamecontroller.fill',
        android: 'sports-esports',
        color: '#ba1a1a',
        backgroundColor: '#ffdad6'
    },
    'Software': {
        ios: 'square.grid.2x2.fill',
        android: 'apps',
        color: '#0158be',
        backgroundColor: '#d8e2ff'
    },
    'Cloud Storage': {
        ios: 'cloud.fill',
        android: 'cloud',
        color: '#0158be',
        backgroundColor: '#d8e2ff'
    },
    'News': {
        ios: 'newspaper.fill',
        android: 'newspaper',
        color: '#825100',
        backgroundColor: '#ffddb9'
    },
    'Education': {
        ios: 'graduationcap.fill',
        android: 'school',
        color: '#825100',
        backgroundColor: '#ffddb9'
    },
    'Health': {
        ios: 'heart.fill',
        android: 'favorite',
        color: '#006c4a',
        backgroundColor: '#e9f0ed'
    },
    'Shopping': {
        ios: 'bag.fill',
        android: 'shopping-bag',
        color: '#825100',
        backgroundColor: '#ffddb9'
    },
    'Finance': {
        ios: 'creditcard.fill',
        android: 'credit-card',
        color: '#006c4a',
        backgroundColor: '#e9f0ed'
    },
    'Other': {
        ios: 'ellipsis.circle.fill',
        android: 'pending',
        color: '#5c5c5c',
        backgroundColor: '#d9d9d9'
    }
};

export default categoryIcons;