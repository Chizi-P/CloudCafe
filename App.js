import 'react-native-gesture-handler'
import { Text, View, StatusBar } from 'react-native'
import colors from './app/config/colors'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from './app/screens/WelcomeScreen'
import HomeScreen from './app/screens/HomeScreen'
import DetailScreen from './app/screens/DetailScreen'
import FavoriteScreen from './app/screens/FavoriteScreen'
import SearchScreen from './app/screens/SearchScreen'
import SettingsScreen from './app/screens/SettingsScreen'
import HelpScreen from './app/screens/HelpScreen'
import AppNewsScreen from './app/screens/AppNewsScreen'
import AboutScreen from './app/screens/AboutScreen'
import ProfileScreen from './app/screens/ProfileScreen'
import ScanScreen from './app/screens/ScanScreen'
import ChatScreen from './app/screens/ChatScreen'
import OrderScreen from './app/screens/OrderScreen'

const Stack = createNativeStackNavigator()

// import { createDrawerNavigator } from '@react-navigation/drawer';
// const Drawer = createDrawerNavigator();

export default function App() {
    // StatusBar.setBackgroundColor('black', true)
    StatusBar.setBarStyle('dark-content')
    return (
        <NavigationContainer
            theme={{
                ...DefaultTheme,
                colors: {
                    ...DefaultTheme.colors,
                    background: colors.background
                },
            }}
        >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
                <Stack.Screen name="Help" component={HelpScreen} />
                <Stack.Screen name="AppNews" component={AppNewsScreen} />
                <Stack.Screen name="About" component={AboutScreen} />
                <Stack.Screen name="Favorite" component={FavoriteScreen} />
                <Stack.Screen name="Scan" component={ScanScreen} />
                <Stack.Screen name="Order" component={OrderScreen} />
            </Stack.Navigator>

            {/* <Drawer.Navigator>
                <Drawer.Screen name="Feed" component={V} />
            </Drawer.Navigator> */}

        </NavigationContainer>
    )
}

function V() {
    return (
        <View><Text>123123</Text></View>
    )
}
