import React from 'react';
import { View, Image } from 'react-native'
import colors from '../config/colors';
import LayoutView from './LayoutView';

function ChatBubbleView({me, you, children }) {

    const child = React.Children.only(children)

    return (
        <View style={{
            flexDirection: me || !you ? 'row-reverse' : 'row',
            alignItems: 'center',
            marginVertical: 5
        }}>
            <Image source={require('../assets/testImage.jpg')} style={{
                height: 45,
                width: 45,
                borderRadius: 15
            }}/>
            <View style={{
                backgroundColor: me || !you ? 'lightgreen' : colors.lightGray,
                borderRadius: 15,
                padding: 15,
                alignSelf: 'flex-' + (me || !you ? 'end' : 'start'),
                marginHorizontal: 10
            }}>
                { React.cloneElement(child, {
                    style: {
                        ...child.props.style,
                        maxWidth: 250,
                        maxHeight: 250
                    }
                }) }
            </View>
        </View>
    );
}

export default ChatBubbleView;