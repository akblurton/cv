import { Document as Doc } from "@react-pdf/renderer";
import Page from "./Page";

import Socials from "./Socials";
import Summary from "./Summary";
import Career from "./Career";
import Interests from "./Interests";

import "../data/career";

const Document: React.FC = () => {
  return (
    <Doc title="Curriculum Vitae" author="Ashley Blurton">
      <Page>
        <Socials />
        <Summary />
        <Career />
        <Interests />
      </Page>
    </Doc>
  );
};

export default Document;
