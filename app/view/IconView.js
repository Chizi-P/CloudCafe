import React from 'react';
import { Image } from 'react-native'

function IconView({ src, style }) {
    return (
        <Image source={src} style={style}/>
    );
}

export default IconView;