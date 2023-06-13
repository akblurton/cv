import { ReactNode } from "react";
import { Page as P } from "@react-pdf/renderer";
import Background from "./Background";
import Header from "./Header";
import Footer from "./Footer";

const Page: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <P size="A4">
      <Background />
      <Header />
      {children}
      <Footer />
    </P>
  );
};

export default Page;
