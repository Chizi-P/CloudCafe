import React from 'react';
import { View, Text, Image } from 'react-native';
import colors from '../../config/colors';
import LayoutView from '../LayoutView';
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
                {/* <Text style={{fontSize: 14, color: colors.clickable}}>收起</Text> */}
                <Image source={require('../../assets/BasilIconspng/512px/Outline/Interface/Caret down.png')} style={{height: 20, width: 20}}/>
            </View>
            {/* //TODO: */}

        </DetailCardView>

    );
}

export default BusinessHours;