import { Text, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary,
    padding: 14,
  },
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
    backgroundColor: GlobalStyles.colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
  },
});
