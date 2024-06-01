import { Text, StyleSheet, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import { ArrowSVG, TransactionLinkLogo } from "../../components/svgs";

const TransactionSortLink = () => {
  return (
    <View style={styles.transactionSortLink}>
      <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
        <View style={styles.transacLinkImageContainer}>
          <TransactionLinkLogo />
        </View>
        <View style={styles.transactionSortLinkLeft}>
          <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>
            Sort your transactions
          </Text>
          <Text style={{ color: "white", fontSize: 12 }}>
            Get points for sorting your transactions
          </Text>
        </View>
      </View>
      <View style={styles.arrowLinkSVGContainer}>
        <ArrowSVG />
      </View>
    </View>
  );
};

export default TransactionSortLink;

const styles = StyleSheet.create({
  transactionSortLink: {
    padding: 24,
    marginTop: 16,
    backgroundColor: GlobalStyles.colors.primaryDeepDark,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  transactionSortLinkLeft: {
    justifyContent: "space-between",
    width: 162,
    gap: 8,
  },
  transacLinkImageContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#5844EE",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowLinkSVGContainer: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: "#2310B2",
    alignItems: "center",
    justifyContent: "center",
  },
});
