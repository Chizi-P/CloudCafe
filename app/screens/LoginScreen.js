import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import LayoutView from '../view/LayoutView'
import colors from '../config/colors';
import { color, shadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { setStatusBarHidden } from 'expo-status-bar';
import BackButtonView from '../view/BackButtonView';

// jsx 用 = , js object 用 :

function LoginScreen({ navigation }) {

    const [email, onChangeEmail] = React.useState('')
    const [password, onChangePassword] = React.useState('')

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LayoutView spacing={20} margin={50}>
                <BackButtonView navigation={navigation}/>
                <Text style={{fontSize:20}}>登入</Text>
                <Text style={{fontSize:14}}>歡迎回來，一杯香氣洋溢的咖啡正等你細品</Text>
                <TextInputBar 
                    value={email}
                    onChangeText={onChangeEmail}
                    placeholder='電郵'
                    image={require('../assets/BasilIconspng/512px/Outline/Communication/Envelope.png')}
                />
                <TextInputBar 
                    value={password}
                    onChangeText={onChangePassword}
                    placeholder='密碼'
                    image={require('../assets/BasilIconspng/512px/Outline/Status/Key.png')}
                    secureTextEntry={true}
                />
                <Text style={{fontSize:12, alignSelf:'flex-end', color: '#2A94F5'}}>忘記密碼?</Text>
                <TouchableOpacity onPress={() => {

                }}>
                    <View style={{ ...styles.Box, backgroundColor: colors.clickable, ...styles.cardShadow}}>
                        <Text style={{
                            fontSize:20,
                            margin:20, 
                            alignSelf:'center',
                            color: colors.lightGray, 
                            fontWeight: 'bold'}}
                        >LOGIN</Text>
                    </View>
                </TouchableOpacity>
                <LayoutView horizontal  spacing={5} style={{alignSelf:'center'}}>
                    <Text style={{fontSize:16, fontWeight: 'bold', color: '#2A94F5'}} onPress={() => navigation.navigate('Register')}>註冊帳號</Text>
                    <Text style={{fontSize:16}}>成為小咖會員</Text>
                </LayoutView>
            </LayoutView>
        </SafeAreaView>
    );
}

function TextInputBar({ placeholder, image, value, onChangeText, secureTextEntry, style }) {

    // const [placeholderState, setPlaceholderState] = React.useState(placeholder)
    const textInputRef = React.useRef()

    return (
        <TouchableWithoutFeedback onPress={() => textInputRef.current.focus()}>
            <View style={{ ...styles.Box, backgroundColor: colors.lightGray, ...style }}>
                <LayoutView horizontal spacing={10} margin={20}>
                    <Image source={image} style={{ height: 24, width: 24 }}/>
                    <TextInput 
                        value={value}
                        onChangeText={onChangeText}
                        ref={textInputRef}
                        style={{color: 'black', flex: 1}}
                        // onFocus={() => setPlaceholderState('')}
                        // onBlur={() => setPlaceholderState(value == '' ? placeholder : '')}
                        secureTextEntry={secureTextEntry}
                        placeholder={placeholder}
                        clearButtonMode='always'
                    >
                        {/* <Text style={{ color: colors.gray }}>{ placeholderState }</Text> */}
                    </TextInput>
                </LayoutView>
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({ 
    Box: {
        borderRadius: 15,
        // width: 314,
        height: 64,
    },

    cardShadow: {
        shadowColor: colors.clickable,  
        shadowOffset:{width:0, height:10},  
        shadowOpacity: 0.4,
        shadowRadius: 10,  
        elevation:0.4,
      },
})



export default LoginScreen;