import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import LayoutView from '../view/LayoutView';

function AppNewsScreen(props) {
    return (
        <SafeAreaView>
            <LayoutView margin={25}>
                <Text>最新</Text>
            </LayoutView>
        </SafeAreaView>
    );
}

export default AppNewsScreen;