import { Heading } from "./Typography";

import careerHistory, { oldCareer } from "../data/career";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Image from "./Image";
import { BOLD } from "./font";
import { format } from "date-fns";

const styles = StyleSheet.create({
  entry: {
    marginBottom: "0.5cm",
    padding: "0.3cm",
    border: "0.05cm solid #F2F2F2",
    backgroundColor: "#FFFFFF",
    borderRadius: "3px",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    flexShrink: 0,
    width: "0.7cm",
    height: "0.7cm",
    objectFit: "contain",
    objectPositionX: "center",
    marginRight: "0.25cm",
  },
  jobtitle: {
    fontSize: "9pt",
  },
  role: {
    fontFamily: BOLD,
    color: "#5f6d43",
  },
  meta: {
    fontSize: "9pt",
    flexGrow: 1,
    alignItems: "flex-end",
  },
  summary: {
    fontSize: "9pt",
    marginTop: "0.5cm",
  },
  techstack: {
    fontSize: "7pt",
    marginTop: "0.5cm",
    color: "#5f6d43",
  },
  title: {
    marginTop: "0.4cm",
    fontSize: "9pt",
    fontFamily: BOLD,
  },
  highlight: {
    marginTop: "0.2cm",
    fontSize: "9pt",
  },
});

const Career: React.FC = () => {
  return (
    <>
      <Heading>Career History</Heading>
      {careerHistory.map((job, index) => (
        <View wrap={false} style={styles.entry} key={index}>
          <View style={styles.header}>
            {job.logo ? (
              <Image style={styles.logo} src={job.logo} />
            ) : (
              <View style={styles.logo} />
            )}
            <View style={styles.jobtitle}>
              <Text>{job.employer}</Text>
              <Text style={styles.role}>{job.role}</Text>
            </View>
            <View style={styles.meta}>
              <Text>
                {format(job.dateStart, "MMM yyyy")}
                {job.dateEnd ? ` - ${format(job.dateEnd, "MMM yyyy")}` : ""}
              </Text>
            </View>
          </View>
          <View style={styles.summary}>
            <Text>{job.summary.replace(/\s+/g, " ").trim()}</Text>
          </View>
          <Text style={styles.title}>Highlights</Text>
          {job.personalHighlights.map((highlight, index) => (
            <Text key={index} style={styles.highlight}>
              {highlight.replace(/\s+/g, " ").trim()}
            </Text>
          ))}
          <View style={styles.techstack}>
            <Text>{job.tech.join(", ")}</Text>
          </View>
        </View>
      ))}
      §
      {oldCareer.map((job, index) => (
        <View wrap={false} style={styles.entry} key={index}>
          <View style={styles.header}>
            <View style={styles.jobtitle}>
              <Text>{job.employer}</Text>
              <Text style={styles.role}>{job.role}</Text>
            </View>
            <View style={styles.meta}>
              <Text>
                {format(job.dateStart, "MMM yyyy")}
                {job.dateEnd ? ` - ${format(job.dateEnd, "MMM yyyy")}` : ""}
              </Text>
            </View>
          </View>
          <View style={styles.techstack}>
            <Text>{job.tech.join(", ")}</Text>
          </View>
        </View>
      ))}
    </>
  );
};

export default Career;
