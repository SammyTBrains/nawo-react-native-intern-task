import { Text, StyleSheet, View, Image } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import HomeHeader from "../components/Home/HomeHeader";
import UserInfoSummary from "../components/Home/UserInfoSummary";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <UserInfoSummary />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary,
    padding: 16,
  },
});
