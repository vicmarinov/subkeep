export function formatPrice (price: number): string {
    // TODO: Get the currency sign, currency sign position and decimal delimiter from the user settings
    const currencySign: string = '€';
    const isCurrencySignPrefixed: boolean = false;

    const decimalDelimiter: '.' | ',' = ',';

    const priceString = price
        .toFixed(2)
        .replaceAll(/[.,]/g, decimalDelimiter);

    const result = [
        priceString,
        currencySign
    ];

    if (isCurrencySignPrefixed) {
        result.reverse();
    }

    return result.join(' ');
}