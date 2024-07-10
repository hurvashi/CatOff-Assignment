import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./components/Login";
import Home from "./components/home/Home";
import Description from "./components/home/Description";
import Signup from "./components/SIgnup";
import GameDashboard from "./components/home/GameDashboard";

export default function App() {
  const Stack = createNativeStackNavigator();
  
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
         <Stack.Screen 
          name = "GameDashboard"
          // options={{ headerShown: false}}
          component={GameDashboard}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const GameDashboardScreen = ({ route }) => {
  const { gameDetails } = route.params;
  return <GameDashboard gameDetails={gameDetails} />;
};

