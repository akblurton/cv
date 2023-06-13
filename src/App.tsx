import { PDFViewer, StyleSheet } from "@react-pdf/renderer";
import Document from "./Document";

const styles = StyleSheet.create({
  viewer: {
    width: "100vw",
    height: "100vh",
    border: 0,
  },
});

function App() {
  return (
    <PDFViewer style={styles.viewer}>
      <Document />
    </PDFViewer>
  );
}

export default App;
