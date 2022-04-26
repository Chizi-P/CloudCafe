import React from 'react';
import { Text, Image, TextInput } from 'react-native';
import colors from '../config/colors';
import BoxView from './BoxView';
import LayoutView from './LayoutView';

function SearchBarView({ style }) {
    // FIXME: search icon source

    const height = 33
    const paddingHorizontal = 10

    // const [placeholder, setPlaceholder] = React.useState('搜尋')

    return (
        <BoxView h={height} r={10} style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: paddingHorizontal,
            ...style
        }}>
            <TextInput style={{flex: 1}} 
                // onFocus={() => {
                //     setPlaceholder('')
                // }}
                // onBlur={() => {
                //     setPlaceholder('搜尋')
                // }}
                placeholder='搜尋'
            />
            <LayoutView horizontal margin={10} spacing={3} style={{ position: 'absolute'}}>
                <Image source={ '' } style={{
                    width: 18, 
                    height: 18,
                }}/>
                {/* <Text style={{
                    color: colors.gray
                }}>{ placeholder }</Text> */}
            </LayoutView>
        </BoxView>
    );
}

export default SearchBarView;