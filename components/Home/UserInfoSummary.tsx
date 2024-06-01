import { Text, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { UserDummySVG } from "../svgs";

const UserInfoSummary = () => {
  return (
    <View style={styles.userSummary}>
      <View style={styles.userSummaryTopDetails}>
        <View style={styles.userImageBG}>
          <UserDummySVG />
        </View>
        <View style={{ marginVertical: 16, gap: 16 }}>
          <View style={{ gap: 8 }}>
            <Text style={styles.userSummaryTopText}>
              Your available balance is
            </Text>
            <Text style={styles.userSummaryTopPrice}>N20,983</Text>
          </View>
          <Text style={styles.userSummaryTopText}>
            By this time last month, you spent slightly higher (N22,719)
          </Text>
        </View>
      </View>
      <View style={styles.userSummaryBankDetails}>
        <View style={styles.userSummaryBankDetailsRow}>
          <Text style={styles.bankDetailsText}>Kuda Bank</Text>
          <Text style={styles.bankDetailsText}>N12,000.00</Text>
        </View>
        <View style={styles.userSummaryBankDetailsRow}>
          <Text style={styles.bankDetailsText}>GT Bank</Text>
          <Text style={styles.bankDetailsText}>N950.00</Text>
        </View>
        <View style={styles.userSummaryBankDetailsRow}>
          <Text style={styles.bankDetailsText}>PiggyVest</Text>
          <Text style={styles.bankDetailsText}>N1,050.00</Text>
        </View>
      </View>
    </View>
  );
};

export default UserInfoSummary;

const styles = StyleSheet.create({
  userSummary: {
    padding: 24,
    marginTop: 16,
    backgroundColor: GlobalStyles.colors.primaryDeepDark,
    borderRadius: 24,
    alignItems: "center",
  },
  userSummaryTopDetails: {
    alignItems: "center",
    width: 192,
  },
  userImageBG: {
    backgroundColor: "#BDD6FF",
    width: 52,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 52,
  },
  userSummaryTopText: { textAlign: "center", color: "white", fontSize: 11 },
  userSummaryTopPrice: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  userSummaryBankDetails: {
    width: "100%",
    marginTop: 24,
    gap: 16,
    marginBottom: 8,
  },
  userSummaryBankDetailsRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  bankDetailsText: {
    color: "white",
    fontSize: 12,
    fontWeight: "medium",
  },
});
