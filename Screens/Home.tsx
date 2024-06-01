import { Text, StyleSheet, View, ScrollView } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeHeader from "../components/Home/HomeHeader";
import UserInfoSummary from "../components/Home/UserInfoSummary";
import TransactionSortLink from "../components/Home/TransactionSortLink";
import BudgetsSection from "../components/Home/BudgetsSection";
import TransactionsSection from "../components/Home/TransactionsSection/TransactionsSection";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <UserInfoSummary />
        <TransactionSortLink />
        <BudgetsSection />
        <TransactionsSection />
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
});
