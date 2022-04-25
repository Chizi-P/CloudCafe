import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';
import LayoutView from '../view/LayoutView';
import colors from '../config/colors';
import BusinessHours from '../view/BusinessHoursView';
import CopyrightNoticeView from '../view/CopyrightNoticeView'
import MenuView from '../view/MenuView';
import StoreContactInformationView from '../view/StoreContactInformationView';
import InstantSeatInformationView from '../view/InstantSeatInformationView';

function DetailScreen({ 
    name = 'Simpe Kaffa Flagship 興波咖啡旗靚店',
    text = '我們致力於將咖啡香散播到城市每個角落'
    }) {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.lightGray}}>
            <ScrollView>
                <LayoutView margin={25} spacing={20} style={{maringTop: 15}}>
                    <Text style={{fontSize: 20, fontWeight: '500'}}>{ name }</Text>
                    <Text style={{fontSize: 14, fontWeight: '500', opacity: 0.5}}>{ text }</Text>
                    <BusinessHours/>
                    <InstantSeatInformationView/>
                    <MenuView/>
                    <StoreContactInformationView/>

                    <CopyrightNoticeView/>
                </LayoutView>
            </ScrollView>
        </SafeAreaView>
    );
}

export default DetailScreen;