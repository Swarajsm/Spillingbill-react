import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screen/LoginScreen';
import HomeScreen from '../screen/HomeScreen';
export default function StackScreenNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator intialRouteName="login">
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="homeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
