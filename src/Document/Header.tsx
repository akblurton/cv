import { StyleSheet, View, Text } from "@react-pdf/renderer";

import FontFamily, { BOLD } from "./font";
const styles = StyleSheet.create({
  header: {
    fontFamily: FontFamily,
    paddingHorizontal: "0.5cm",
    paddingVertical: "0.5cm",
    alignItems: "center",
  },
  name: {
    fontFamily: BOLD,
    fontSize: "12pt",
  },
  role: {
    fontSize: "12pt",
  },
});
const Header: React.FC = () => {
  return (
    <View fixed={true} style={styles.header}>
      <Text style={styles.name}>Ashley Blurton</Text>
      <Text style={styles.role}>Fullstack Engineer</Text>
    </View>
  );
};

export default Header;
