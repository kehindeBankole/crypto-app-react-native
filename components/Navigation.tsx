import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import Onboarding from "../screens/onboarding";
import Home from "../screens/main/home/Home";
import { ms, vs } from "react-native-size-matters";
import { fonts } from "../constants/fonts";
import { HomeIcon, MarketIcon, NotificationIcon, SettingIcon } from "./icons";
import Market from "../screens/main/market";
import Settings from "../screens/main/settings";
import Notifications from "../screens/main/notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import About from "../screens/main/about";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#4766F9",
        tabBarInactiveTintColor: "#000000",
        tabBarLabelStyle: { fontFamily: fonts.SR, fontSize: 12 },
        tabBarStyle:
          Platform.OS === "android"
            ? {
                paddingBottom: 10,
                height: 70,
              }
            : {
                height: 100,
                paddingVertical: vs(10),
              },
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return <HomeIcon stroke={focused ? "#4766F9" : "#000000"} />;
          } else if (route.name === "Market") {
            return <MarketIcon stroke={focused ? "#4766F9" : "#000000"} />;
          } else if (route.name === "Notifications") {
            return (
              <NotificationIcon stroke={focused ? "#4766F9" : "#000000"} />
            );
          } else if (route.name === "Settings") {
            return <SettingIcon stroke={focused ? "#4766F9" : "#000000"} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Market" component={Market} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  const [isFirstTime, setIsFirstTime] = useState(null);
  async function checkVisit() {
    const value = await AsyncStorage.getItem("hasVisited");
    if (value !== null) {
      setIsFirstTime(value);
      console.log(value);
    }
  }
  useEffect(() => {
    checkVisit();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isFirstTime && <Stack.Screen name="Home" component={Onboarding} />}
        <Stack.Screen name="Landing" component={MyTabs} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
