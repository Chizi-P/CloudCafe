import React from 'react';
import { View, SafeAreaView, Text, Switch, ScrollView, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackButtonView from '../view/BackButtonView'
import LayoutView from '../view/LayoutView'

function SettingsScreen({ navigation }) {

    const defaultSettings =  [
        { type: 'title', text: '一般' },
        { type: 'switch', text: '深色模式', value: false },
        { type: 'title', text: '通知' },
        { type: 'switch', text: '推薦新開的咖啡店', value: false },
        { type: 'switch', text: '推薦好評的咖啡', value: false },
        { type: 'title', text: '隱私' },
        { type: 'switch', text: '允許被附近的人搜尋', value: false },
        { type: 'switch', text: '允許陌生人來信', value: false },
        { type: 'title', text: '應用程式' },
        { type: 'navigation', text: '最新', to: 'AppNews' },
        { type: 'navigation', text: '幫助', to: 'Help' },
        { type: 'navigation', text: '關於', to: 'About' },
    ]

    const [settings, setSettings] = React.useState([])

    React.useEffect(async () => {
        try {
            const storagedSettings = await AsyncStorage.getItem('@settings')
            if (storagedSettings == null) {
                await AsyncStorage.setItem('@settings', JSON.stringify(defaultSettings))
                setSettings(defaultSettings)
            } else {
                setSettings(JSON.parse(storagedSettings))
            }
        } catch(e) {
            console.error(e)
        }
        
    }, [])

    React.useEffect(async () => {
        await AsyncStorage.setItem('@settings', JSON.stringify(settings))
    }, [settings])

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
            <LayoutView margin={25} spacing={20}>
                <BackButtonView navigation={navigation}/>

                { settings.map((e, i) => {
                    switch (e.type) {
                        case 'title':
                            return <Title text={e.text} key={i}/>
                        case 'switch':
                            return (
                                <SwitchItem 
                                    text={e.text} 
                                    key={i} 
                                    value={settings[i].value} 
                                    onValueChange={() => {
                                        setSettings(s => {
                                            let newS = [...s]
                                            newS[i].value = !newS[i].value
                                            return newS
                                        })
                                    }}
                                />
                            )
                        case 'navigation':
                            return <NavigationItem text={e.text} key={i} navigation={navigation} to={e.to}/>
                    }
                }) }
            </LayoutView>
            </ScrollView>
        </SafeAreaView>
    );
}

function Title({ text, style }) {
    return (
        <Text style={{fontWeight: 'bold', color: 'gray', ...style}}>{ text }</Text>
    )
}

function SwitchItem({ text, description, value, onValueChange, style }) {
    return (
        <View style={{height: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', ...style}}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}>{ text }</Text>
                { description ? <Text style={{color: 'gray'}}>{ description }</Text> : <></> }
            </View>
            <Switch value={value} onValueChange={onValueChange}/>
        </View>
    )
}

function NavigationItem({ text, description, navigation, to, style }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(to)}>
            <View style={{height: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', ...style}}>
                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}>{ text }</Text>
                    { description ? <Text style={{color: 'gray'}}>{ description }</Text> : <></> }
                </View>
                <Image source={require('../assets/BasilIconspng/512px/Outline/Interface/Caret_right.png')} style={{height: 25, width: 25}}/>
            </View>
        </TouchableOpacity>
    )
}

export default SettingsScreen;