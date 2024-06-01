import { Text, StyleSheet, View } from "react-native";

import ArrowButton from "../../UI/ArrowButton";
import TransctionListItem from "./TransctionListItem";
import { GlobalStyles } from "../../../constants/styles";

const TransactionsSection = () => {
  return (
    <View style={styles.transactionsSection}>
      <Text style={styles.transactionsHeaderLabel}>My Transactions</Text>
      <View style={styles.transactionsCard}>
        <View style={styles.transactionsCardsTopRow}>
          <Text style={styles.transactionsCardTopRowText}>
            Recent Transactions
          </Text>
          <ArrowButton style={{ height: 24, width: 24, borderRadius: 24 }} />
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
  );
};

export default TransactionsSection;

const styles = StyleSheet.create({
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
