import React, { forwardRef } from 'react';
import { View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { verticalScale } from '../../utils/scaling';

const BottomSheet = forwardRef(({ children }, ref) => {
  return (

    <RBSheet
      ref={ref}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
        container: {
          height: verticalScale(223),
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          alignItems: 'center',
          paddingVertical: verticalScale(20),
          paddingHorizontal: verticalScale(10),
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

  );
});

export default BottomSheet;
