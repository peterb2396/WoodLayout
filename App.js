import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Projects from './screens/Projects';
import Stock from './screens/Stock';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
    
          if (route.name === 'Projects') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'Stock') {
            iconName = focused ? 'hammer' : 'hammer-outline';
          } 
    
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      >
        <Tab.Screen name="Projects" children={()=><Projects projects_ = {[]}/>}/>
        <Tab.Screen name="Stock" children={()=><Stock types_ = {[]}/>}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
