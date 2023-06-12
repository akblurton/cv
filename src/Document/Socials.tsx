import { StyleSheet, View, Text, Link, Image } from "@react-pdf/renderer";
import Github from "../assets/logos/github.png";
import LinkedIn from "../assets/logos/linkedin.png";
import NPM from "../assets/logos/npm.png";

import FontFamily from "./font";
const styles = StyleSheet.create({
  socials: {
    fontFamily: FontFamily,
    paddingHorizontal: "0.5cm",
    paddingVertical: "0.5cm",
    display: "flex",
    flexDirection: "row",
    marginHorizontal: "2cm",
    // marginTop: "1cm",
  },
  cell: {
    fontSize: "10pt",
    flex: "1",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  link: {
    color: "#5f6d43",
  },
  logo: {
    width: "0.7cm",
    height: "0.7cm",
    marginRight: "0.3cm",
  },
});
const Socials: React.FC = () => {
  return (
    <View style={styles.socials}>
      <View style={styles.cell}>
        <Image src={Github} style={styles.logo} />
        <Text>
          <Link src="https://github.com/akblurton" style={styles.link}>
            akblurton
          </Link>
        </Text>
      </View>
      <View style={styles.cell}>
        <Image src={LinkedIn} style={styles.logo} />
        <Text>
          <Link src="https://linkedin.com/in/akblurton" style={styles.link}>
            /in/akblurton
          </Link>
        </Text>
      </View>
      <View style={styles.cell}>
        <Image src={NPM} style={styles.logo} />
        <Text>
          <Link src="https://npmjs.com/~ashleyblurton" style={styles.link}>
            ashleyblurton
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default Socials;
