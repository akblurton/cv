import { ReactNode } from "react";
import { Page as P, StyleSheet, View } from "@react-pdf/renderer";

import Background from "./Background";
import Header from "./Header";
import Footer from "./Footer";

import FontFamily from "./font";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "1.5cm",
    fontFamily: FontFamily,
    paddingVertical: "0.5cm",
  },
});
const Page: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <P size="A4">
      <Background />
      <Header />
      <View style={styles.container}>{children}</View>
      <Footer />
    </P>
  );
};

export default Page;
