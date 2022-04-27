import React from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';
import LayoutView from '../LayoutView';
import DetailCardView from './DetailCardView';

function StoreContactInformationView({ 
    avatar = '',
    num = '0987000000',
    style 
    }) {
    return (
        <View style={{backgroundColor: 'white', borderRadius: 20, ...style}}>
            <LayoutView horizontal spacing={10} margin={20} style={{justifyContent: 'space-between'}}>
                <LayoutView horizontal spacing={10}>
                    <Box image={ avatar }/>
                    <LayoutView spacing={8}>
                        <Text style={{fontSize: 14}}>電話</Text>
                        <Text style={{fontSize: 12, fontWeight: '300'}}>{ num }</Text>
                    </LayoutView>
                </LayoutView>
                
                <LayoutView horizontal spacing={10} >
                    <TouchableOpacity onPress={() => {
                        Alert.alert("致電店家",
                        num,
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            }, {
                                text: "OK", 
                                onPress: () => console.log("OK Pressed") 
                            }
                        ])
                    }}>
                        <Box image={ '' }/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Box image={ '' }/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Box image={ '' }/>
                    </TouchableOpacity>
                    
                </LayoutView>
                
            </LayoutView>
        </View>
    );
}

function Box({ image, style }) {
    return ( 
        <Image source={image} style={{
            height: 40, 
            width: 40, 
            backgroundColor: 
            colors.lightGray, 
            borderRadius: 10, 
            ...style
        }}/>
    )
}


export default StoreContactInformationView;