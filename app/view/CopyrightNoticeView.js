import React from 'react';
import { View, Text } from 'react-native';
import colors from '../config/colors';

function CopyrightNoticeView({ style }) {
    return (
        <View style={{paddingVertical: 10, ...style}}>
            <Text style={{textAlign:'center', color: colors.gray, fontSize: 10}}>
                版權所有©小咖公司
            </Text>
            <Text style={{textAlign:'center', color: colors.gray, fontSize: 10}}>
                Copyright 2022 CloudCoffee All rights reserved.
            </Text>
        </View>
    );
}

export default CopyrightNoticeView;