import { Text, StyleSheet, View, Image } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import HomeHeader from "../components/Home/HomeHeader";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <View style={styles.userSummary}>
        <View style={styles.userSummaryTopDetails}>
          <View style={styles.userImageBG}>
            <Image
              source={require("../assets/images/userDummyImage.png")}
              style={{ width: 52, height: 52 }}
            />
          </View>
          <View style={{ marginVertical: 16, gap: 16 }}>
            <View style={{ gap: 8 }}>
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 11 }}
              >
                Your available balance is
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 28,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                N20,983
              </Text>
            </View>
            <Text style={{ textAlign: "center", color: "white", fontSize: 11 }}>
              By this time last month, you spent slightly higher (N22,719)
            </Text>
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
    padding: 16,
  },
  userSummary: {
    padding: 24,
    marginTop: 16,
    backgroundColor: "#210FA4",
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
  userSummaryT: {},
});
