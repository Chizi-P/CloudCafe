import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native'
import BoxView from './BoxView';

function ScanButtonView({ onPress }) {
    // FIXME: scan icon source
    return (
        <TouchableOpacity onPress={onPress}>
            <BoxView w={33} h={33} r={10} style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/BasilIconspng/512px/Outline/Interface/Expand.png')} style={{height: 24, width: 24}}/>
            </BoxView>
        </TouchableOpacity>
    );
}

export default ScanButtonView;