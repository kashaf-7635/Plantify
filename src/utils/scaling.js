// import { Dimensions } from 'react-native';

// // Reference dimensions based on your Figma design (for example: iPhone 11)
// const guidelineBaseWidth = 375;
// const guidelineBaseHeight = 812;

// const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// // Horizontal scale (e.g., width, paddingHorizontal)
// export const scale = size => (SCREEN_WIDTH / guidelineBaseWidth) * size;

// // Vertical scale (e.g., height, paddingVertical)
// export const verticalScale = size =>
//   (SCREEN_HEIGHT / guidelineBaseHeight) * size;

// // Moderate scale (e.g., fontSize) — allows tuning how much to scale
// export const moderateScale = (size, factor = 0.5) =>
//   size + (scale(size) - size) * factor;

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = size => (shortDimension / guidelineBaseWidth) * size;

export const verticalScale = size =>
  (longDimension / guidelineBaseHeight) * size;

export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const moderateVerticalScale = (size, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;
