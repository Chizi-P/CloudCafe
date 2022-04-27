import React from 'react';
import uuid from 'react-native-uuid';
import { View, Text, SafeAreaView, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import BoxView from '../view/BoxView';
import LayoutView from '../view/LayoutView';
import SearchBarView from '../view/SearchBarView';
import CardView from '../view/CardView';
import BoxButtonView from '../view/BoxButtonView';
import colors from '../config/colors';
import ScanButtonView from '../view/ScanButtonView';
import user from '../config/user'

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <ScrollView>
                <View style={{
                    height: 30,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 25,
                    marginHorizontal: 25
                }}>

                    <Text onPress={() => navigation.navigate('Setting')} style={{paddingVertical: 5}}>設定</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <LayoutView horizontal spacing={7} style={{alignItems: 'center'}}>
                            
                                <Text >{ user.name }</Text>
                                <Image source={user.avatar} style={{
                                    
                                    height: 30,
                                    width: 30,
                                    borderRadius: 10,
                                    backgroundColor: colors.lightGray
                                }}/>
                            
                        </LayoutView>
                    </TouchableOpacity>

                </View>

                
                <LayoutView vertical margin={25} spacing={20}>
                    <Text style={{
                        fontSize: 20
                    }}>尋找您想去的 咖啡店</Text>

                    <LayoutView spacing={15} horizontal>
                        <BoxButtonView icon='' text='附近' onPress={() => navigation.navigate('')}/>
                        <BoxButtonView icon='' text='收藏' onPress={() => navigation.navigate('Favorite')}/>
                        <BoxButtonView icon='' text='人氣' onPress={() => navigation.navigate('')}/>
                        <BoxButtonView icon='' text='優惠' onPress={() => navigation.navigate('')}/>
                    </LayoutView>
                    
                    <LayoutView horizontal spacing={15}>
                        <SearchBarView />
                        <ScanButtonView onPress={() => navigation.navigate('Scan')}/>
                    </LayoutView>
                    
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}>為你推薦</Text>
                    
                    <FlatList 
                        data={CardData}
                        renderItem={({item}) => (
                            <CardView {...item} navigation={navigation}/>
                        )}
                        keyExtractor={() => uuid.v4()}
                        scrollEnabled={false}
                    />
                </LayoutView>
            </ScrollView>
            
        </SafeAreaView>
    );
}


let CardData = [
    {   
        image: require('./../assets/testImage.jpg'),
        name: 'Simpe Kaffa Flagship 興波咖啡旗艦店',
        distance : 400,
        numOfChairsRemaining: 16,
        text: '我們致力於將咖啡香散播到城市每個角落'
    }, {
        
        image: require('./../assets/testImage.jpg'),
        name: '小咖咖啡店',
        distance : 400,
        numOfChairsRemaining: 16
    }, {
        
        image: require('./../assets/testImage.jpg'),
        name: '小咖咖啡店',
        distance : 400,
        numOfChairsRemaining: 16
    }, {
        
        image: require('./../assets/testImage.jpg'),
        name: '小咖咖啡店',
        distance : 400,
        numOfChairsRemaining: 16
    }
]



export default HomeScreen;