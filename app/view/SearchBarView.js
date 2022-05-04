import React from 'react';
import { Text, Image, TextInput } from 'react-native';
import colors from '../config/colors';
import BoxView from './BoxView';
import LayoutView from './LayoutView';

function SearchBarView({ style }) {
    // FIXME: search icon source

    const height = 33
    const paddingHorizontal = 10

    const [focus, setFocus] = React.useState(false)
    const [placeholder, setPlaceholder] = React.useState('搜尋')
    const [text, onChangeText] = React.useState('')

    return (
        <BoxView h={height} r={10} style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: paddingHorizontal,
            ...style
        }}>
            <TextInput 
                style={{flex: 1}} 
                    value={text} 
                    onChangeText={onChangeText}
                    onFocus={() => {
                        setFocus(true)
                    }}
                    onBlur={() => {
                        setFocus(false)
                        onChangeText('')
                    }}
            />
            { !focus ? 
                <LayoutView horizontal margin={10} spacing={3} style={{ position: 'absolute'}}>
                    <Image source={require('../assets/BasilIconspng/512px/Outline/Interface/Search.png')} style={{
                        width: 18, 
                        height: 18,
                    }}/>
                    <Text style={{
                        color: colors.gray
                    }}>{ placeholder }</Text>
                </LayoutView>
                : <></>
            }

        </BoxView>
    );
}

export default SearchBarView;