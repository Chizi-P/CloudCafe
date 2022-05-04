import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function BackButtonView({ navigation, color, style }) {
    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={style}>
            <Image source={require('../assets/BasilIconspng/512px/Outline/Interface/Arrow_left.png')} 
                style={{
                    height: 24,
                    width: 24
                }}
            />
            {/* <Text style={{color: color || colors.clickable}}>返回</Text> */}
        </TouchableOpacity>
    );
}

export default BackButtonView;