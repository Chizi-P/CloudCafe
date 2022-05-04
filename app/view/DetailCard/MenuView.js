import React from 'react';
import { View, Text, FlatList } from 'react-native';
import colors from '../../config/colors';
import LayoutView from '../LayoutView';
import DetailCardView from './DetailCardView';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
const Tab = createMaterialTopTabNavigator()

function MenuView({ style }) {

    const [select, setSelect] = React.useState(0)

    const options = [
        {
            text: '菜單'
        }, {
            text: '氣氛'
        }, {
            text: '優惠'
        }
    ]

    const menu = [
        {
            name: '淺陪手烘',
            price: 310
        }, {
            name: '義式烘焙',
            price: 140
        }, {
            name: '衣索比亞',
            price: 200
        }
    ]

    return (
        <DetailCardView style={style}>
            {/* <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}> */}
                {/* { options.map((option, i) => (
                    <>
                        <Text 
                            style={{
                                color: select == i ? colors.clickable : 'black', 
                                // backgroundColor: 'red', 
                                flex: 1, 
                                textAlign: 'center',
                                padding: 10
                            }} 
                            onPress={() => setSelect(i)}
                        >{ option.text }</Text>
                            
                        { i != (options.length - 1) ? <Text style={{padding: 10}}>|</Text> : <></> }
                    </>
                )) } */}
            {/* </View> */}
            {/* <View style={{flex: 1}}> */}
                <Tab.Navigator>
                    <Tab.Screen name="菜單" component={Menu} initialParams={{menu}}/>
                    <Tab.Screen name="氣氛" component={G} />
                    <Tab.Screen name="優惠" component={G} />
                </Tab.Navigator>
            {/* </View> */}
            {/* {
                select == 0 ? (
                    <FlatList 
                        data={menu}
                        renderItem={({ item }) => (
                            <View style={{flexDirection:'row', justifyContent: 'space-between', padding: 10}}>
                                <Text>{ item.name }</Text>
                                <Text>{ item.price }</Text>
                            </View>
                            
                        )}
                    />
                ) : 
                select == 1 ? (<></>) : 
                select == 2 ? (<></>) : {}
            } */}
        </DetailCardView>
    );
}

function Menu({ menu }) {
    return (
        <FlatList 
            data={menu}
            renderItem={({ item }) => (
                <View style={{flexDirection:'row', justifyContent: 'space-between', padding: 10}}>
                    <Text>{ item.name }</Text>
                    <Text>{ item.price }</Text>
                </View>
            )}
        />
    )
}

function G() {
    return (
        <View>
            <Text>321</Text>
        </View>

    )
}




export default MenuView;