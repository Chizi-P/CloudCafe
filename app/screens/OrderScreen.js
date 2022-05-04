import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native'
import LayoutView from '../view/LayoutView';
import BackButtonView from '../view/BackButtonView';
import BoxView from '../view/BoxView';
import colors from '../config/colors';

function OrderScreen({ navigation }) {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.lightGray}}>
            <LayoutView margin={25} spacing={20}>
                <BackButtonView navigation={navigation}/>

                <LayoutView horizontal spacing={15} style={{alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 20}}>訂餐</Text><Text>預定您的餐點，不要再為等候煩惱</Text>
                </LayoutView>

                <LayoutView horizontal spacing={15} style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 20}}>取餐時間：</Text>
                    <Text style={{fontSize: 16}}>今天 下午</Text>
                    <View style={{backgroundColor: colors.lightGray, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 8}}><Text>4:20</Text></View>
                </LayoutView>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Image source={require('../assets/拿鐵.jpg')} style={{height: 114, width: 166, borderRadius: 12}}/>
                    <View>
                        <View style={{backgroundColor: '#ECDE5C', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 8}}><Text>限時優惠</Text></View>
                        
                    </View>
                    <Text>1</Text>
                </View>
                <Text style={{color: 'gray'}}>美式咖啡加入小農鮮奶，乳香厚重但是自然</Text>
            
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Image source={require('../assets/蛋糕.jpg')} style={{height: 114, width: 166, borderRadius: 12}}/>
                    <Text>0</Text>
                </View>
                <Text style={{color: 'gray'}}>香濃細滑的巧克力和奶油，再加上酥脆的薑餅乾，口感豐富層次鮮明，搭配上一杯清甜的果香紅茶那就更加完美。</Text>

                <View style={{height: 90, backgroundColor: 'white', borderRadius: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center',  padding: 25}}>
                    <View style={{justifyContent: 'center'}}>
                        <Text>數量        1</Text>
                        <Text>結算共 $ 60</Text>
                    </View>
                    <View style={{backgroundColor: '#FFF4D8', paddingHorizontal: 30, paddingVertical: 10, borderRadius: '100%'}}>
                        <Text>下單</Text>
                    </View>
                </View>
            
            </LayoutView>
        </SafeAreaView>
    );
}

export default OrderScreen;