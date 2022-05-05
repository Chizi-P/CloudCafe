import React from 'react';
import { Text, SafeAreaView } from 'react-native'
import LayoutView from '../view/LayoutView';

function LoginScreen2({ navigation }) {
    return (
        <SafeAreaView>
            <LayoutView margin={25} spacing={20}>
                <Text>login</Text>
                <Text onPress={() => navigation.navigate('Register')}>註冊</Text>
            </LayoutView>
            
        </SafeAreaView>
    );
}

export default LoginScreen2;