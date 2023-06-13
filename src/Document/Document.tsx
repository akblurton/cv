import { Document as Doc } from "@react-pdf/renderer";
import Page from "./Page";

import Socials from "./Socials";
import Summary from "./Summary";
import Career from "./Career";

import "../data/career";

const Document: React.FC = () => {
  return (
    <Doc title="Curriculum Vitae" author="Ashley Blurton">
      <Page>
        <Socials />
        <Summary />
      </Page>
      <Page>
        <Career />
      </Page>
    </Doc>
  );
};

export default Document;
