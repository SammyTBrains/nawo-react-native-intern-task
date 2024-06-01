import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import HomeHeader from "../components/Home/HomeHeader";
import UserInfoSummary from "../components/Home/UserInfoSummary";
import TransactionSortLink from "../components/Home/TransactionSortLink";
import BudgetsSection from "../components/Home/BudgetsSection";
import ArrowButton from "../components/UI/ArrowButton";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <UserInfoSummary />
        <TransactionSortLink />
        <BudgetsSection />
        <View style={styles.transactionsSection}>
          <Text style={styles.transactionsHeaderLabel}>My Transactions</Text>
          <View style={styles.transactionsCard}>
            <View style={styles.transactionsCardsTopRow}>
              <Text style={styles.transactionsCardTopRowText}>
                Recent Transactions
              </Text>
              <ArrowButton
                style={{ height: 24, width: 24, borderRadius: 24 }}
              />
            </View>
            <View>
              <View
                style={{
                  backgroundColor: "#EEF2F8",
                  height: 36,
                  width: 36,
                  borderRadius: 36,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>J</Text>
              </View>
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
  transactionsSection: {
    marginTop: 32,
  },
  transactionsHeaderLabel: {
    color: "#C1B9F9",
    fontSize: 13,
    fontWeight: "bold",
  },
  transactionsCard: {
    padding: 24,
    marginTop: 16,
    backgroundColor: GlobalStyles.colors.primaryLight,
    borderRadius: 24,
  },
  transactionsCardsTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionsCardTopRowText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
