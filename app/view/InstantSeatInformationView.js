import React from 'react';
import { View, Text } from 'react-native';
import colors from '../config/colors';
import LayoutView from '../view/LayoutView';
import DetailCardView from './DetailCardView';

function InstantSeatInformationView({ style }) {
    return (
        <DetailCardView style={style}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Text style={{fontSize: 14}}>目前座位</Text>
                <Text style={{fontSize: 14, color: colors.clickable}}>收起</Text>
            </View>
        </DetailCardView>
    );
}

export default InstantSeatInformationView;