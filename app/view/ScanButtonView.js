import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native'
import BoxView from './BoxView';

function ScanButtonView({ onPress }) {
    // FIXME: scan icon source
    return (
        <TouchableOpacity onPress={onPress}>
            <BoxView w={33} h={33} r={10}>
                <Image source={ '' }/>
            </BoxView>
        </TouchableOpacity>
    );
}

export default ScanButtonView;