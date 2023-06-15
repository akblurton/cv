import { StyleSheet, Text } from "@react-pdf/renderer";
import { BOLD } from "./font";

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontFamily: BOLD,
    fontSize: "16pt",
    marginBottom: "0.2cm",
  },
  paragraph: {
    fontSize: "9pt",
    marginBottom: "0.4cm",
  },
});

type TypographyComponent = React.FC<{ children: React.ReactNode }>;

export const Heading: TypographyComponent = ({ children }) => (
  <Text style={styles.heading}>{children}</Text>
);

export const Paragraph: TypographyComponent = ({ children }) => (
  <Text style={styles.paragraph}>{children}</Text>
);
