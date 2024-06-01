import { Text, StyleSheet, View, ScrollView } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeHeader from "../components/Home/HomeHeader";
import UserInfoSummary from "../components/Home/UserInfoSummary";
import TransactionSortLink from "../components/Home/TransactionSortLink";
import BudgetsSection from "../components/Home/BudgetsSection";
import ArrowButton from "../components/UI/ArrowButton";
import TransctionListItem from "../components/Home/TransctionListItem";

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
            <TransctionListItem
              name="John Ogaga"
              nameLabel="J"
              bankDetails="Zenith Bank 12:03 AM"
              amount="+N20,983"
            />
            <TransctionListItem
              name="Habib Yogurt"
              nameLabel="H"
              bankDetails="GT-Bank 12:03 AM"
              amount="-N20,983"
            />
            <TransctionListItem
              name="Kane Ritchie"
              nameLabel="K"
              bankDetails="Kuda Bank 12:03 AM"
              amount="-N20,000"
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
  transactionsSection: {
    marginTop: 32,
  },
  transactionsHeaderLabel: {
    color: GlobalStyles.colors.secondaryLight,
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
