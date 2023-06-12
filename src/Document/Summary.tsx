import { StyleSheet, View, Text } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

import Image from "./Image";
import skills from "./skills";

import FontFamily from "./font";
const styles = StyleSheet.create({
  header: {
    fontFamily: FontFamily,
    paddingHorizontal: "1.5cm",
    paddingVertical: "0.5cm",
  },
  title: {
    fontWeight: "bold",
    fontSize: "16pt",
    marginBottom: "0.2cm",
  },
  paragraph: {
    fontSize: "10pt",
    marginBottom: "0.4cm",
  },
  skills: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "0.3cm",
    marginTop: "0.2cm",
    marginBottom: "0.5cm",
  },
  skill: {
    padding: "0.3cm",
    backgroundColor: "#F2F2F2",
    borderRadius: "3px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10pt",
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

const Summary: React.FC = () => {
  return (
    <View fixed={true} style={styles.header}>
      <Text style={styles.title}>At a Glance</Text>
      <Text style={styles.paragraph}>
        I am a fullstack engineer with over a decade of experience in the
        industry. Primarily stationed in the fast moving world of start ups, I
        am a firm believer that engineers should be engaged with the product
        process from day 1.
      </Text>
      <Text style={styles.paragraph}>
        With a background in frontend engineering, I am obsessive over the
        little details in UI/UX- pushing for that "something extra" when time
        allows to elevate a product to first class. Working in React codebases
        for over 7 years has given me a wealth of knowledge on how to optimize,
        build, and structure web applications regardless of the domain or end
        user.
      </Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        necessitatibus recusandae minus nemo magnam, voluptas maiores suscipit
        eum amet cum. Facilis ipsam quos incidunt architecto ex. Quis unde amet
        incidunt.
      </Text>
      <Text style={styles.title}>Proficiencies</Text>
      <View style={styles.skills}>
        {skills.map(({ name, icon }, index) => (
          <View
            style={
              [
                styles.skill,
                index % 2 && { backgroundColor: "#E9E9E9" },
              ].filter(Boolean) as Style[]
            }
            key={name}
          >
            <Image style={styles.skillLogo} src={icon} />
            <Text>{name}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.title}>My Role</Text>
      <Text style={styles.paragraph}>
        I am at my best when I'm getting stuck into a product. Whether that's
        rapidly building prototypes, aiding in the discovery process, or
        maintaining long term offerings; I'm happy as long as I'm making an
        impact.
      </Text>
    </View>
  );
};

export default Summary;
