import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./components/Login";
import Home from "./components/home/Home";
import Description from "./components/home/Description";
import Signup from "./components/SIgnup";

export default function App() {
  const Stack = createNativeStackNavigator();
  // useEffect(() => {
  //   StatusBar.setBarStyle("light-content");
  // });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name = "SignUp"
          options={{ headerShown: false}}
          component={Signup}
        />
        <Stack.Screen 
          name = "Login"
          options={{ headerShown: false}}
          component={Login}
        />
        <Stack.Screen 
          name = "Home"
          component={Home}
        />
        <Stack.Screen 
          name = "Description"
          // options={{ headerShown: false}}
          component={Description}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


