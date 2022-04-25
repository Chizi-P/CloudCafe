import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import BoxView from './BoxView';
import LayoutView from './LayoutView';

function BoxButtonView({ icon, text, onPress, style }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <BoxView style={{
                alignItems: 'center',
                ...style
                }}>
                <LayoutView margin={13} spacing={3}>
                    <Image source={ icon } style={{
                        height: 24,
                        width: 24
                    }} />
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 10,
                    }}>{ text }</Text>
                </LayoutView>
            </BoxView>
        </TouchableOpacity>
    );
}

export default BoxButtonView;