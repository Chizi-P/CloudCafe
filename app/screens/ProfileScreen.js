import React from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import colors from '../config/colors';
import LayoutView from '../view/LayoutView';

function ProfileScreen({ navigation }) {
    return (
        <SafeAreaView>

            {/* TODO: back button */}

            <ScrollView>
                <LayoutView margin={30} spacing={10}>
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

                    <Item type=' 名稱' value='用戶名' onPress={() => {

                    }}/>
                    <Divider/>
                    <Item type=' 電話' value='09487000000'/>
                    <Divider/>
                    <Item type=' 電郵' value='9487@gmail.com'/>
                    <Divider/>
                    <Item type=' 密碼' value={'************'}/>
                    <Divider/>
                    <Item type=' 登出' color={colors.clickable}/>
                    <Divider/>
                    <Item type=' 刪除帳號' color={colors.warning}/>
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
                    <Image source={ icon }/>
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