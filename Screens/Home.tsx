import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import HomeHeader from "../components/Home/HomeHeader";
import UserInfoSummary from "../components/Home/UserInfoSummary";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HomeHeader />
        <UserInfoSummary />
        <View style={styles.transactionSortLink}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#5844EE",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/images/tabler_discount.png")}
              style={{ width: 22, height: 22 }}
            />
          </View>
        </View>
      </ScrollView>
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
  transactionSortLink: {
    padding: 24,
    marginTop: 16,
    backgroundColor: GlobalStyles.colors.primaryDeepDark,
    borderRadius: 24,
    flexDirection: "row",
  },
});
