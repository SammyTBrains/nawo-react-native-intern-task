import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import HomeHeader from "../components/Home/HomeHeader";
import UserInfoSummary from "../components/Home/UserInfoSummary";
import TransactionSortLink from "../components/Home/TransactionSortLink";
import ArrowButton from "../components/UI/ArrowButton";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <UserInfoSummary />
        <TransactionSortLink />
        <View style={styles.budgetsSection}>
          <Text style={styles.budgetsHeaderLabel}>My Budgets</Text>
          <View style={styles.budgetsCard}>
            <View style={styles.budgetCardsTopRow}>
              <Text
                style={{ color: "white", fontSize: 12, fontWeight: "medium" }}
              >
                You have
              </Text>
              <ArrowButton
                style={{ height: 24, width: 24, borderRadius: 24 }}
              />
            </View>
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
  budgetsSection: {
    marginTop: 32,
  },
  budgetsHeaderLabel: { color: "#C1B9F9", fontSize: 13, fontWeight: "bold" },
  budgetsCard: {
    padding: 24,
    marginTop: 16,
    backgroundColor: GlobalStyles.colors.primaryLight,
    borderRadius: 24,
  },
  budgetCardsTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
