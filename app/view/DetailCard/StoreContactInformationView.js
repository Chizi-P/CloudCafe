import React from 'react';
import { View, Text, Image, Alert, TouchableOpacity, Linking } from 'react-native';
import colors from '../../config/colors';
import LayoutView from '../LayoutView';

function StoreContactInformationView({ 
    avatar = '',
    num = '0987000000',
    email = 'test@gmail.com',
    navigation,
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
                    <TouchableOpacity onPress={() => Linking.openURL('tel:+' + num)}>
                        <Box image={require('../../assets/BasilIconspng/512px/Solid/Communication/Phone.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        Linking.openURL('mailto:' + email)
                    }}>
                        <Box image={require('../../assets/BasilIconspng/512px/Solid/Communication/Envelope.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Chat')
                    }}>
                        <Box unavailable image={require('../../assets/BasilIconspng/512px/Solid/Communication/Comment.png')}/>
                    </TouchableOpacity>
                    
                </LayoutView>
                
            </LayoutView>
        </View>
    );
}

function Box({ image, unavailable, style }) {
    return ( 
        <View style={{
            height: 40,
            width: 40,
            backgroundColor: colors.lightGray, 
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            ...style
        }}>
            <Image source={image} style={{
                height: 24, 
                width: 24,
                tintColor: unavailable ? colors.gray : 'black'
            }}/>
        </View>
    )
}


export default StoreContactInformationView;