import React from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import colors from '../config/colors';
import LayoutView from '../view/LayoutView';
import BackButtonView from '../view/BackButtonView';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ProfileScreen({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <LayoutView margin={30} spacing={10}>
                    
                    {/* Top Bar */}
                    <View style={{ height: 30 }}>
                        <BackButtonView navigation={navigation}/>
                    </View>

                    <View style={{
                        shadowColor: 'black',
                        shadowOffset:{width: 0, height: 10},
                        shadowOpacity: 0.4,
                        shadowRadius: 30,
                        elevation: 24,
                        paddingBottom: 50
                    }}>
                        <Image 
                            source={require('../assets/testImage.jpg')} 
                            style={{
                                height: 255,
                                width: 255,
                                alignSelf: 'center',
                                borderRadius: 10
                            }}
                        />
                    </View>

                    <Item 
                        type=' 名稱' 
                        value='用戶名' 
                        icon={require('../assets/BasilIconspng/512px/Outline/Communication/User.png')}
                        onPress={() => {

                        }}/>
                    <Divider/>
                    <Item 
                        type=' 電話' 
                        value='09487000000' 
                        icon={require('../assets/BasilIconspng/512px/Outline/Communication/Phone.png')}
                    />
                    <Divider/>
                    <Item 
                        type=' 電郵' 
                        value='9487@gmail.com'
                        icon={require('../assets/BasilIconspng/512px/Outline/Communication/Envelope.png')}
                    />
                    <Divider/>
                    <Item 
                        type=' 密碼' 
                        value={'************'}
                        icon={require('../assets/BasilIconspng/512px/Outline/Status/Lock.png')}
                    />
                    <Divider/>
                    <Item 
                        type=' 登出' 
                        color={colors.clickable}
                        icon={require('../assets/BasilIconspng/512px/Outline/Interface/Logout.png')}
                        onPress={async () => {
                            await AsyncStorage.removeItem('token')
                            navigation.navigate('Login')
                        }}
                    />
                    <Divider/>
                    <Item 
                        type=' 刪除帳號' 
                        color={colors.warning}
                        icon={require('../assets/BasilIconspng/512px/Outline/Interface/Trash-alt.png')}
                        onPress={async () => {
                            await AsyncStorage.removeItem('token')
                            navigation.navigate('Login')
                        }}
                    />
                    <Divider/>

                </LayoutView>
            </ScrollView>
        </SafeAreaView>
    );
}

function Item({ type, value, icon, onPress, color, style }) {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10}}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={ icon } style={{height: 14, width: 14, alignSelf: 'center'}}/>
                    <Text style={{color: color}}>{ type }</Text>
                </View>
                { value !== undefined ? <Text>{ value }</Text> : <></> }
            </View>
            
        </TouchableOpacity>
    )
}

function Divider({ style }) {
    return <View style={{height: 1, backgroundColor: colors.gray, ...style}}></View>
}


export default ProfileScreen;