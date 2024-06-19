import { StyleSheet, View, Text } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

import Image from "./Image";
import { Heading, Paragraph } from "./Typography";

import skills from "../data/skills";

const styles = StyleSheet.create({
  skills: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "0.2cm",
    marginTop: "0.2cm",
    marginBottom: "0.5cm",
  },
  skill: {
    padding: "0.2cm",
    backgroundColor: "#F2F2F2",
    borderRadius: "3px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "8pt",
    flexShrink: 1,
    flexGrow: 1,
  },
  skillLogo: {
    width: "0.5cm",
    height: "0.5cm",
    marginRight: "0.2cm",
    objectFit: "contain",
  },
});

const Interests: React.FC = () => {
  return (
    <>
      <Heading>Personal Interests</Heading>
      <Paragraph>
        I love trying to solve all sorts of problems, even if mundane with code.
        This CV is written with React! Which helps me make better and more
        interesting formatting decisions and quicker updates
      </Paragraph>
      <Paragraph>
        My love of code based solutions has led me down the home automation
        black hole. Planning, testing, and experimenting with small changes in
        how my day to day life is automated is endlessly rewarding!
      </Paragraph>
      <Paragraph>
        Picked up an obsessive coffee hobby during 2020 lockdowns and since
        channelled that passion into planning a mobile app for myself and other
        enthusiasts to help track results, preferences, and other small things
        like bean stock.
      </Paragraph>
    </>
  );
};

export default Interests;
