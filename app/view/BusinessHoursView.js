import React from 'react';
import { View, Text } from 'react-native';
import colors from '../config/colors';
import LayoutView from './LayoutView';
import DetailCardView from './DetailCardView';

function BusinessHours({ style }) {
    return (
        <DetailCardView style={style}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Text style={{fontSize: 14}}>營業時間</Text>
                <Text style={{fontSize: 14, color: colors.clickable}}>收起</Text>
            </View>
            {/* //TODO: */}

        </DetailCardView>

    );
}

export default BusinessHours;