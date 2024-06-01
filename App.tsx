import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RootNavParamList } from "./type-utilities/type";
import { GlobalStyles } from "./constants/styles";
import Home from "./Screens/Home";
import Budgets from "./Screens/Budgets";
import Insights from "./Screens/Insights";
import Profile from "./Screens/Profile";

const BottomTabs = createBottomTabNavigator<RootNavParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <BottomTabs.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "white",
            tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
            tabBarInactiveTintColor: "white",
          }}
        >
          <BottomTabs.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="Budgets"
            component={Budgets}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="pie-chart-outline" color={color} size={size} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="Insights"
            component={Insights}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="bar-chart-outline" color={color} size={size} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person-outline" color={color} size={size} />
              ),
            }}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </>
  );
}
