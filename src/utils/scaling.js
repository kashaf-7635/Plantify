import { Dimensions } from 'react-native';

// Reference dimensions based on your Figma design (for example: iPhone 11)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Horizontal scale (e.g., width, paddingHorizontal)
export const horizontalScale = size => (SCREEN_WIDTH / guidelineBaseWidth) * size;

// Vertical scale (e.g., height, paddingVertical)
export const verticalScale = size => (SCREEN_HEIGHT / guidelineBaseHeight) * size;

// Moderate scale (e.g., fontSize) — allows tuning how much to scale
export const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;
