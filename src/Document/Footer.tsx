import { StyleSheet, View, Text, Link } from "@react-pdf/renderer";

import FontFamily from "./font";
const styles = StyleSheet.create({
  header: {
    fontFamily: FontFamily,
    paddingHorizontal: "0.5cm",
    paddingVertical: "0.5cm",
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
  },
  gen: {
    textAlign: "right",
    fontSize: "8pt",
    justifyContent: "flex-end",
    flexDirection: "row",
    width: "100%",
  },
  link: {
    color: "#5f6d43",
  },
});
const Footer: React.FC = () => {
  return (
    <View fixed={true} style={styles.header}>
      <Text style={styles.gen}>
        Generated with react-pdf |{" "}
        <Link style={styles.link} src="https://github.com/akblurton/cv">
          Github Source
        </Link>
      </Text>
    </View>
  );
};

export default Footer;
