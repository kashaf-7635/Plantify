import React, { forwardRef } from 'react';
import { View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const BottomSheet = forwardRef(({ children }, ref) => {
  return (
    <View style={{ flex: 1 }}>
      <RBSheet
        ref={ref}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}
      >
        {children}
      </RBSheet>
    </View>
  );
});

export default BottomSheet;
