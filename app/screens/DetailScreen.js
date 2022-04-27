import React from 'react';
import { View, SafeAreaView, Text, ScrollView, Image } from 'react-native';
import LayoutView from '../view/LayoutView';
import colors from '../config/colors';
import BusinessHours from '../view/DetailCard/BusinessHoursView';
import CopyrightNoticeView from '../view/DetailCard/CopyrightNoticeView'
import MenuView from '../view/DetailCard/MenuView';
import StoreContactInformationView from '../view/DetailCard/StoreContactInformationView';
import InstantSeatInformationView from '../view/DetailCard/InstantSeatInformationView';

function DetailScreen({ route }) {

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.lightGray}}>
            <ScrollView>
                <Image source={ route.params.image } style={{width: '100%', height: 300}}/>
                <LayoutView margin={25} spacing={20} style={{maringTop: 15}}>
                    <Text style={{fontSize: 20, fontWeight: '500'}}>{ route.params.name }</Text>
                    <Text style={{fontSize: 14, fontWeight: '500', opacity: 0.5}}>{ route.params.text }</Text>
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