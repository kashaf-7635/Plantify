import { StyleSheet, Text, Animated } from 'react-native';
import Fonts from '../../../utils/fonts';
import Colors from '../../../utils/colors';
import { moderateScale } from '../../../utils/scaling';

const Philosopher = ({
  children,
  weight = 'regular',
  size = 14,
  color = Colors.textPrimary,
  align = 'left',
  opacity = 1,
  animated = false,
  textConfig,
}) => {
  const weightStyle = styles[weight];
  const isAnimatedSize = typeof size !== 'number';
  const isAnimatedOpacity = typeof opacity !== 'number';

  const sizeStyle = isAnimatedSize
    ? { fontSize: size }
    : { fontSize: moderateScale(size) };

  const opacityStyle = isAnimatedOpacity ? { opacity: opacity } : { opacity };

  const colorStyle = { color };
  const alignStyle = { textAlign: align };

  const AnimatedText = Animated.Text;

  return animated ? (
    <AnimatedText
      {...textConfig}
      style={[
        styles.text,
        weightStyle,
        sizeStyle,
        colorStyle,
        alignStyle,
        opacityStyle,
      ]}
    >
      {children}
    </AnimatedText>
  ) : (
    <Text
      {...textConfig}
      style={[
        styles.text,
        weightStyle,
        sizeStyle,
        colorStyle,
        alignStyle,
        opacityStyle,
      ]}
    >
      {children}
    </Text>
  );
};

export default Philosopher;

const styles = StyleSheet.create({
  text: {},
  regular: {
    fontFamily: Fonts.Philosopher.regular,
  },
  bold: {
    fontFamily: Fonts.Philosopher.bold,
  },
  semibold: {
    fontFamily: Fonts.Philosopher.semibold,
  },
});
