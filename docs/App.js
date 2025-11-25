import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import SearchScreen from './screens/SearchScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#1a1a1a' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '🎌 Anime Wallpapers 4K' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Wallpaper' }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Rechercher' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
