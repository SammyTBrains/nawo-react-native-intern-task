import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import HomeHeader from "../components/Home/HomeHeader";
import UserInfoSummary from "../components/Home/UserInfoSummary";
import { ArrowSVG, TransactionLinkLogo } from "../components/svgs";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HomeHeader />
        <UserInfoSummary />
        <View style={styles.transactionSortLink}>
          <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
            <View style={styles.transacLinkImageContainer}>
              <TransactionLinkLogo />
            </View>
            <View
              style={{
                justifyContent: "space-between",
                width: 162,
                gap: 8,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 14, fontWeight: "bold" }}
              >
                Sort your transactions
              </Text>
              <Text style={{ color: "white", fontSize: 12 }}>
                Get points for sorting your transactions
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 30,
              backgroundColor: "#2310B2",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ArrowSVG />
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
    alignItems: "center",
    justifyContent: "space-between",
  },
  transacLinkImageContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#5844EE",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
