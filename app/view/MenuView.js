import React from 'react';
import { View, Text } from 'react-native';
import colors from '../config/colors';
import LayoutView from '../view/LayoutView';
import DetailCardView from './DetailCardView';

function MenuView({ style }) {
    return (
        <DetailCardView style={style}>
            <Text>菜單</Text>
        </DetailCardView>
    );
}

export default MenuView;