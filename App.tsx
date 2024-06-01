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
            headerShown: false,
            tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            tabBarShowLabel: false,
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "white",
          }}
        >
          <BottomTabs.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <BottomTabs.Screen
            name="Budgets"
            component={Budgets}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <Ionicons
                  name={focused ? "pie-chart" : "pie-chart-outline"}
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <BottomTabs.Screen
            name="Insights"
            component={Insights}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <Ionicons
                  name={focused ? "bar-chart" : "bar-chart-outline"}
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <BottomTabs.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <Ionicons
                  name={focused ? "person" : "person-outline"}
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </>
  );
}
