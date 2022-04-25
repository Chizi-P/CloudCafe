import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './app/config/colors';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import HomeScreen from './app/screens/HomeScreen';
import DetailScreen from './app/screens/DetailScreen';
import FavoriteScreen from './app/screens/FavoriteScreen';
import SearchScreen from './app/screens/SearchScreen';
import SettingScreen from './app/screens/SettingScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import ScanScreen from './app/screens/ScanScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer 
      theme={{...DefaultTheme, 
        colors: {
          ...DefaultTheme.colors,
          background: colors.background
        }
      }}>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Detail" component={DetailScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        
        <Stack.Screen name="Search" component={SearchScreen}/>
        <Stack.Screen name="Setting" component={SettingScreen}/>
        <Stack.Screen name="Favorite" component={FavoriteScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Scan" component={ScanScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
