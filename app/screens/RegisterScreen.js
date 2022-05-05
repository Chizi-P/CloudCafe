import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import LayoutView from '../view/LayoutView'
import colors from '../config/colors';
import BackButtonView from '../view/BackButtonView';
import BouncyCheckbox from "react-native-bouncy-checkbox";

function RegisterScreen({ navigation }) {

    const [email, onChangeEmail] = React.useState('')
    const [password, onChangePassword] = React.useState('')
    const [confirmPassword, onChangeConfirmPassword] = React.useState('')
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false)
    const bouncyCheckboxRef = React.useRef()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LayoutView spacing={20} margin={50}>
                <BackButtonView navigation={navigation}/>
                <Text style={{ fontSize:20 }}>註冊小咖帳號</Text>
                <Text style={{ fontSize:14 }}>一起度過如沐春風的午后時光</Text>
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
                <TextInputBar 
                    value={confirmPassword}
                    onChangeText={onChangeConfirmPassword}
                    placeholder='確認密碼'
                    image={require('../assets/BasilIconspng/512px/Outline/Status/Checked-box.png')} 
                    secureTextEntry={true}
                    style={
                        (password == '' || confirmPassword == '') 
                        ? {}
                        : password == confirmPassword 
                        ? {backgroundColor: 'rgba(0, 200, 0, 0.5)'}
                        : {backgroundColor: 'rgba(200, 0, 0,0.5)'}
                    }
                />
                <LayoutView horizontal spacing={5} style={{alignItems: 'center'}}>
                    <BouncyCheckbox 
                        text="請同意"
                        ref={bouncyCheckboxRef}
                        onPress={isChecked => setToggleCheckBox(isChecked)}
                        textStyle = {{ textDecorationLine : "none", fontSize: 12, color: 'black' }}
                        iconStyle = {{ borderRadius: 8 }}
                    />
                    <Text style={{fontSize:12,  color: '#2A94F5'}}>《用戶協議》</Text>
                </LayoutView>
                <TouchableOpacity 
                    style={{ ...styles.Box, backgroundColor: colors.clickable, ...styles.cardShadow}}
                    onPress={() => {
                        if (password != confirmPassword) {
                            
                        }
                        if (!toggleCheckBox) {
                            // TODO: 提示沒有勾選同意
                            // bouncyCheckboxRef.current
                        }
                    }}
                >
                    <Text style={{
                        fontSize: 20,
                        margin: 20, 
                        alignSelf:'center',
                        color: colors.lightGray, 
                        fontWeight: 'bold'
                    }}>SUBMIT</Text>
                </TouchableOpacity>
            </LayoutView>
        </SafeAreaView>
    )
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
                        style={{ color: 'black', flex: 1 }}
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
    }
})



export default RegisterScreen;