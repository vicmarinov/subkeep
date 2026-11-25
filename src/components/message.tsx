import { Text, StyleSheet } from 'react-native';
import colorPalette from '../constants/color-palette';

export default function Message (
    { text }: { text: string; }
) {
    return (
        <Text style={styles.text}>{text}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontStyle: 'italic',
        color: colorPalette.text,
        textAlign: 'center',
        padding: 10
    }
});