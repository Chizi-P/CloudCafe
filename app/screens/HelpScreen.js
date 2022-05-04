import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import LayoutView from '../view/LayoutView';

function HelpScreen(props) {
    return (
        <SafeAreaView>
            <LayoutView margin={25}>
                <Text>幫助</Text>
            </LayoutView>
        </SafeAreaView>
    );
}

export default HelpScreen;