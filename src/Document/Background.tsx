import { Image, StyleSheet } from "@react-pdf/renderer";
import BG from "../assets/bg";

const styles = StyleSheet.create({
  pageBackground: {
    position: "absolute",
    minWidth: "100%",
    minHeight: "100%",
    height: "100%",
    width: "100%",
    zIndex: -1,
    opacity: 0.3,
  },
});

const Background: React.FC = () => {
  if (/noimages/.test(global?.window?.location?.search ?? "")) {
    return null;
  }
  return <Image fixed={true} style={styles.pageBackground} src={BG} />;
};

export default Background;
