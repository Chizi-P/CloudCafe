import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import LayoutView from '../view/LayoutView';

function AboutScreen(props) {
    return (
        <SafeAreaView>
            <LayoutView margin={25}>
                <Text>關於</Text>
            </LayoutView>
        </SafeAreaView>
    );
}

export default AboutScreen;