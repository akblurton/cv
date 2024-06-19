import { StyleSheet, View, Text, Link } from "@react-pdf/renderer";

import FontFamily from "./font";
const styles = StyleSheet.create({
  footer: {
    fontFamily: FontFamily,
    paddingHorizontal: "0.5cm",
    paddingVertical: "0.2cm",
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
  },
  typography: {
    flexDirection: "row",
    alignItems: "flex-end",
    display: "flex",
  },
  page: {
    flexGrow: 1,
    fontSize: 8,
  },
  gen: {
    textAlign: "right",
    width: "50%",
    fontSize: 8,
  },
  link: {
    color: "#5f6d43",
    fontSize: 8,
  },
});
const Footer: React.FC = () => {
  return (
    <View
      fixed={true}
      style={styles.footer}
      // @ts-ignore react-pdf has incorrect typings here
      render={({ totalPages, pageNumber }) => (
        <View style={styles.typography}>
          <Text style={styles.page}>
            {pageNumber} of {totalPages}
          </Text>
          <Text style={styles.gen}>
            Created with react-pdf |{" "}
            <Link style={styles.link} src="https://github.com/akblurton/cv">
              Github Source
            </Link>
          </Text>
        </View>
      )}
    ></View>
  );
};

export default Footer;
