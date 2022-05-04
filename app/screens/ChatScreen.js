import React from 'react';
import { View, Text, SafeAreaView, Image, Linking, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LayoutView from '../view/LayoutView';
import ChatBubbleView from '../view/ChatBubbleView'
import BackButtonView from '../view/BackButtonView';
import colors from '../config/colors';
import uuid from 'react-native-uuid'

function ChatScreen({ navigation }) {


    const user = React.useRef({name: '客戶'}).current
    const [msg, setMsg] = React.useState('')
    const chatData = React.useRef([]).current

    React.useEffect(async () => {
        chatData = JSON.parse(await AsyncStorage.getItem('chatData'))
        if (chatData == null) chatData = []
    }, [])

    async function send(msg) {
        chatData.push({sender: 'me', msg: msg})
        return await AsyncStorage.setItem('chatData', JSON.stringify(chatData))
    }

    

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss} style={{flex: 1}}>
            <SafeAreaView style={{flex: 1}}>
                    
                <LayoutView margin={25} spacing={15}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <BackButtonView navigation={navigation}/>
                        <Text>客服</Text>
                        {/* 站位 */}
                        <Text>    </Text>
                    </View>
                    
                    <FlatList
                        data={chatData}
                        renderItem={({ item }) => (
                            <ChatBubbleView me={item.sender == 'me'}>
                                <Text>{ item.msg }</Text>
                                {/* <Image source={require('../assets/testImage.jpg')}/> */}
                            </ChatBubbleView>
                        )}
                        keyExtractor={() => uuid.v4()}
                    />

                </LayoutView>
                <KeyboardAvoidingView behavior="position" style={{position: 'absolute', bottom: 0, width: '100%'}}>
                    <TextInput 
                        value={msg}
                        onChangeText={setMsg}
                        onSubmitEditing={async () => {
                            try {
                                await send(msg)
                            } catch (e) {
                                console.error(e)
                            }
                            setMsg('')
                        }}
                        style={{
                            backgroundColor: colors.gray,
                            height: 50,
                            width: '100%',
                        }}
                    />
                </KeyboardAvoidingView>
            
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

export default ChatScreen;