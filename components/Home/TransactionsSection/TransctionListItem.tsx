import { Text, StyleSheet, View } from "react-native";

type props = {
  nameLabel: string;
  name: string;
  bankDetails: string;
  amount: string;
};

const TransctionListItem = (props: props) => {
  const textColor = props.amount.startsWith("+") ? "#05EF40" : "white";

  return (
    <View style={styles.container}>
      <View style={styles.transactionListItemLeft}>
        <View style={styles.nameLabelContainer}>
          <Text style={styles.nameLabel}>{props.nameLabel}</Text>
        </View>
        <View>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.bankDetails}>{props.bankDetails}</Text>
        </View>
      </View>
      <Text style={[styles.amount, { color: textColor }]}>{props.amount}</Text>
    </View>
  );
};

export default TransctionListItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  transactionListItemLeft: {
    flexDirection: "row",
    gap: 8,
  },
  nameLabelContainer: {
    backgroundColor: "#EEF2F8",
    height: 36,
    width: 36,
    borderRadius: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  nameLabel: {
    fontSize: 14,
    fontWeight: 600,
    color: "#005CEE",
  },
  name: {
    color: "white",
    fontSize: 14,
    fontWeight: 500,
  },
  bankDetails: {
    color: "#CECCFF",
    fontSize: 12,
    fontWeight: 400,
  },
  amount: {
    fontSize: 14,
    fontWeight: 600,
  },
});
