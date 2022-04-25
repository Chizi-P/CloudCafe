import React from 'react';
import { View, Text } from 'react-native';
import colors from '../config/colors';
import LayoutView from '../view/LayoutView';

function DetailCardView({ children, title, style }) {
    return (
        <View style={{backgroundColor: 'white', borderRadius: 20, ...style}}>
            <LayoutView spacing={10} margin={20} >
                {/* {title != undefined ? <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{fontSize: 14}}>{ title }</Text>
                    <Text style={{fontSize: 14, color: colors.clickable}}>收起</Text>
                </View> : <View/>} */}
                { children }
                {/* //TODO: */}
            </LayoutView>
        </View>
    );
}

export default DetailCardView;