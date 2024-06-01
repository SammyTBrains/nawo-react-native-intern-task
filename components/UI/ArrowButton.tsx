import { View, StyleSheet } from "react-native";
import { ArrowSVG } from "../svgs";

type Props = {
  style?: object;
};

const ArrowButton: React.FC<Props> = (props) => {
  return (
    <View style={[styles.arrowLinkSVGContainer, props.style]}>
      <ArrowSVG />
    </View>
  );
};

export default ArrowButton;

const styles = StyleSheet.create({
  arrowLinkSVGContainer: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: "#2310B2",
    alignItems: "center",
    justifyContent: "center",
  },
});
