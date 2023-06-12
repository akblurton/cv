import { Document as Doc, Page } from "@react-pdf/renderer";
import Background from "./Background";
import Header from "./Header";
import Socials from "./Socials";
import Summary from "./Summary";

const Document: React.FC = () => {
  return (
    <Doc title="Curriculum Vitae" author="Ashley Blurton">
      <Page size="A4">
        <Background />
        <Header />
        <Socials />
        <Summary />
      </Page>
    </Doc>
  );
};

export default Document;
