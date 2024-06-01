import { Text, StyleSheet, View, Image } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import HomeHeader from "../components/Home/HomeHeader";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <View style={styles.userSummary}>
        <View style={styles.userSummaryTopDetails}>
          <View style={styles.userImageBG}>
            <Image
              source={require("../assets/images/userDummyImage.png")}
              style={{ width: 52, height: 52 }}
            />
          </View>
        </View>
      </View>
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
  userSummary: {
    padding: 10,
    marginTop: 16,
    backgroundColor: "#210FA4",
    borderRadius: 24,
  },
  userSummaryTopDetails: {
    alignItems: "center",
  },
  userImageBG: {
    backgroundColor: "#BDD6FF",
    width: 52,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 52,
  },
});
