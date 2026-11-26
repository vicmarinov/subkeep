import { type BoxShadowValue } from 'react-native';
import colorPalette from './color-palette';

export const shadow: BoxShadowValue = {
    offsetX: 0,
    offsetY: 0,
    color: colorPalette.text + '26',
    blurRadius: 15
};

export default shadow;