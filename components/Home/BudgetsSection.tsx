import { Text, StyleSheet, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import ArrowButton from "../../components/UI/ArrowButton";
import { ProgressBarSVG } from "../../components/svgs";

const BudgetsSection = () => {
  return (
    <View style={styles.budgetsSection}>
      <Text style={styles.budgetsHeaderLabel}>My Budgets</Text>
      <View style={styles.budgetsCard}>
        <View style={styles.budgetsCardTopSection}>
          <View style={styles.budgetsCardsTopRow}>
            <Text style={styles.budgetsCardText}>You have</Text>
            <ArrowButton style={{ height: 24, width: 24, borderRadius: 24 }} />
          </View>
          <Text style={styles.budgetsCardTopSectionPrice}>N29,880</Text>
          <Text style={styles.budgetsCardText}>
            Left out of N80,888 budgeted
          </Text>
        </View>
        <View style={{ marginVertical: 32 }}>
          <ProgressBarSVG />
        </View>
        <Text style={styles.budgetsCardText}>
          😱 Sapa go soon catch you bros, calm down!!
        </Text>
      </View>
    </View>
  );
};

export default BudgetsSection;

const styles = StyleSheet.create({
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
  budgetsCardTopSection: { gap: 16 },
  budgetsCardText: {
    color: "white",
    fontSize: 12,
    fontWeight: "medium",
  },
  budgetsCardTopSectionPrice: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  budgetsCardsTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
