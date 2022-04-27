import React from 'react';
import { View, Text, Image, Animated } from 'react-native';
import colors from '../../config/colors';
import LayoutView from '../LayoutView';
import DetailCardView from './DetailCardView';

function InstantSeatInformationView({ style }) {

    const [fold, setFold] = React.useState(true)
    const foldAnim = React.useRef(new Animated.Value(1)).current
    const foldYAnim = React.useRef(new Animated.Value(300)).current
    const [remaining, setRemaining] = React.useState(0)
    const [selectFloor, setSelectFloor] = React.useState(0)

    const foldIn = () => {
        Animated.timing(foldAnim, {
            toValue: 1, 
            duration: 300
        }).start()
        Animated.timing(foldYAnim, {
            toValue: 250, 
            duration: 300
        }).start()
    }

    const foldOut = () => {
        Animated.timing(foldAnim, {
          toValue: 0,
          duration: 300
        }).start()
        Animated.timing(foldYAnim, {
            toValue: 0,
            duration: 300
        }).start()
    }

    const datas = [
        {
            floor: '一樓',
            image: '',
            seats: []
        },
        {
            floor: '二樓',
            image: '',
            seats: []
        },
        {
            floor: '三樓',
            image: '',
            seats: []
        },
    ]

    return (
        <DetailCardView style={style}>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={{fontSize: 14}}>目前座位</Text>
                <Text style={{fontSize: 14, color: colors.clickable}} 
                    onPress={() => {
                        setFold(!fold)
                        if (fold) {
                            foldOut()
                        } else {
                            foldIn()
                        }
                    }}
                >收起</Text>
            </View>

            <Animated.View
                style={{
                    opacity: foldAnim,
                    maxHeight: foldYAnim
                }}
            >
                <LayoutView spacing={10}>
                    <LayoutView horizontal style={{justifyContent: 'space-between'}}>
                        <LayoutView horizontal spacing={10}>
                            <LayoutView horizontal>
                                <Text>空位 </Text>
                                <Image source={ '' } style={{backgroundColor: 'lightgray', height: 14, width: 14, alignSelf:'center'}} />
                            </LayoutView>
                            <LayoutView horizontal>
                                <Text>佔用 </Text>
                                <Image source={ '' } style={{backgroundColor: '#A5A5A5', height: 14, width: 14, alignSelf:'center'}} />
                            </LayoutView>
                            <LayoutView horizontal>
                                <Text>待檢查 </Text>
                                <Image source={ '' } style={{backgroundColor: '#AE8F82', height: 14, width: 14, alignSelf:'center'}} />
                            </LayoutView>
                        </LayoutView>
                        <Text style={{fontSize: 10, opacity: 0.5, alignSelf: 'flex-end'}}>剩餘 { remaining } 個座位</Text>
                    </LayoutView>

                    <View style={{
                        flexDirection: 'row', 
                        height: 37, 
                        borderWidth: 1, 
                        borderColor: 'rgba(0, 0, 0, 0.25)', 
                        justifyContent: 'space-around',
                        alignItems: 'center'
                        }}>
                        { datas.map((data, i) => (
                            <Text key={i} 
                                style={{ 
                                    ...selectFloor == i 
                                    ? { opacity: 1 }
                                    : { opacity: 0.5 } ,
                                    textAlign: 'center',
                                    flex: 1,
                                    padding: 9
                                }}
                                onPress={() => setSelectFloor(i)}
                            >{ data.floor }</Text>
                        )) }
                    </View>
                    
                    <Text style={{alignSelf: 'center', padding: 60}}>座位資訊</Text>
                </LayoutView>
            </Animated.View>
            
        </DetailCardView>
    );
}

export default InstantSeatInformationView;