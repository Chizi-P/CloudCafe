import React from 'react';
import { View, Text, Image } from 'react-native'
import colors from '../config/colors';
import ConditionsIconView from './ConditionsIconView';

function CardView({ 
    image, 
    name, 
    distance = '? ',
    numOfChairsRemaining = '?'
    }) {
    return (
        <View style={{
            paddingBottom: 20
        }}>
            <Image source={image} style={{
                backgroundColor: colors.lightGray,
                height: 200,
                width: '100%',
                borderRadius: 15
            }} />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginTop: 10,
                marginHorizontal: 10,
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '500'
                }}>{ name }</Text>

                <Text style={{
                    fontSize: 14,
                    fontWeight: '500'
                }}>{ distance }公尺</Text>

            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10
            }}>
                <Text style={{
                    fontSize: 14,
                }}>剩餘 { numOfChairsRemaining } 個位子</Text>

                <ConditionsIconView />
            </View>

        </View>
    );
}

export default CardView;