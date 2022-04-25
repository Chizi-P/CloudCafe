import React from 'react';
import { View } from 'react-native';
import colors from '../config/colors'

function BoxView({ children, h = 64, w = 64, r = 15, style }) {
    
    return (
        <View style={{
            backgroundColor: colors.lightGray,
            height: h,
            width: w,
            borderRadius: r,
            ...style
        }}>
            {children}
        </View>
    );
}

export default BoxView;