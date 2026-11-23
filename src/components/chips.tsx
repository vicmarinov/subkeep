import { FlatList, Pressable, Text, StyleSheet } from 'react-native';
import colorPalette from '../constants/color-palette';

type ChipValue = string | number;

type ChipsProps<T, V extends ChipValue> = {
    data: readonly T[];
    keyExtractor: (item: T, index: number) => string;
    valueExtractor: (item: T) => V;
    selectedValue: V;
    setSelectedValue: (value: V) => void;
}

export default function Chips<T, V extends ChipValue> ({
    data,
    keyExtractor,
    valueExtractor,
    selectedValue,
    setSelectedValue
}: ChipsProps<T, V>) {
    const select = (value: V) => setSelectedValue(value);

    const renderItem = ({ item }: {item: T}) => {
        const value = valueExtractor(item);
        const isSelected = value === selectedValue;

        const props = { value, isSelected, select };
        return <ChipsItem {...props} />;
    }

    const props = {
        data,
        keyExtractor,
        renderItem,
        horizontal: true,
        style: styles.list,
        contentContainerStyle: styles.listContentContainer,
        showsHorizontalScrollIndicator: false
    };
    
    return <FlatList {...props} />;
}

type ChipItemProps<V extends ChipValue> = {
    value: V,
    isSelected: boolean,
    select: (value: V) => void
};

function ChipsItem<V extends ChipValue> ({
    value,
    isSelected,
    select
}: ChipItemProps<V>) {
    const itemStyles = ({ pressed }: { pressed: boolean; }) => [
        styles.item,
        isSelected && styles.selectedItem,
        pressed && styles.pressedItem
    ];

    const textStyles = [
        styles.itemText,
        isSelected && styles.selectedItemText
    ];

    return (
        <Pressable style={itemStyles} onPress={() => select(value)}>
            <Text style={textStyles}>{value}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    list: {
        flexGrow: 0
    },
    listContentContainer: {
        gap: 10
    },

    item: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 999,
        borderCurve: 'continuous',
        backgroundColor: colorPalette.inputBackground
    },
    selectedItem: {
        backgroundColor: colorPalette.accent
    },
    pressedItem: {
        opacity: 0.75
    },

    itemText: {
        fontSize: 20,
        color: colorPalette.text
    },
    selectedItemText: {
        color: colorPalette.lightest
    }
});