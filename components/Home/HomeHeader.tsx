import { Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { GlobalStyles } from "../../constants/styles";

const HomeHeader = () => {
  return (
    <View style={styles.homeHeader}>
      <View style={styles.homeHeaderLeft}>
        <Text style={styles.welcomeText}>Hello John</Text>
        <Text style={styles.headerFinanceStatusText}>
          Your finances are looking good
        </Text>
      </View>
      <View style={styles.homeHeaderRight}>
        <View style={styles.iconBG}>
          <Ionicons
            name="notifications-outline"
            color={GlobalStyles.colors.purple}
            size={24}
          />
        </View>
        <View style={styles.iconBG}>
          <Ionicons
            name="search-outline"
            color={GlobalStyles.colors.purple}
            size={24}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  homeHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
  },
  homeHeaderLeft: {
    justifyContent: "space-around",
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: "medium",
    fontFamily: "Inter",
    color: "white",
  },
  headerFinanceStatusText: {
    fontSize: 12,
    color: "white",
  },
  homeHeaderRight: {
    gap: 10,
    flexDirection: "row",
  },
  iconBG: {
    width: 38,
    height: 38,
    borderRadius: 30,
    backgroundColor: GlobalStyles.colors.primaryDarker,
    justifyContent: "center",
    alignItems: "center",
  },
});
