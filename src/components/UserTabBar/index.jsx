// UserTabBar.js

import { View, Platform, StyleSheet } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { PlatformPressable } from '@react-navigation/elements';
import Feather from '@react-native-vector-icons/feather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { scale, verticalScale, moderateScale } from '../../utils/scaling';
import Colors from '../../utils/colors';

export default function UserTabBar({ state, descriptors, navigation }) {
  const insets = useSafeAreaInsets();
  const { buildHref } = useLinkBuilder();
  const getIconName = (routeName, isFocused) => {
    switch (routeName) {
      case 'Home':
        return 'home';
      case 'Search':
        return 'search';
      case 'Notification':
        return 'bell';
      case 'Profile':
        return 'user';
      default:
        return 'questioncircleo';
    }
  };

  return (
    <View style={[styles.tabBarContainer, { paddingBottom: insets.bottom }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={index}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
          >
            <Feather
              name={getIconName(route.name, isFocused)}
              size={moderateScale(25)}
              color={isFocused ? Colors.primary800 : Colors.textDark}
            />
            {isFocused && <View style={styles.dot} />}
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    height: verticalScale(70),
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e6e6e6',
    alignItems: 'center',
    elevation: 5,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.textDark,
  },
});
