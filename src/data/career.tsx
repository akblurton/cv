import { parseISO as parse } from "date-fns";
import * as Logos from "../assets/logos";

type CareerEntry = {
  employer: string;
  companySize: [number, number];
  industry: string | string[];
  tech: string[];
  role: string;
  summary: string;
  personalHighlights: string[];
  logo?: string;
  website?: string;
  dateStart: Date;
  dateEnd?: Date;
};

const career: CareerEntry[] = [
  {
    employer: "Minimum",
    companySize: [15, 15],
    industry: [
      "Carbon Inventory",
      "B2B",
      "Start-up",
      "SaaS",
      "AWS Amplify",
      "Github Actions",
    ],
    tech: [
      "Typescript",
      "React",
      "Redux",
      "RTK Query",
      "Turborepo",
      "Styled Components",
      "Auth0",
    ],
    role: "Senior Frontend Engineer",
    summary: `Joined founding frontend engineer to double team size and work on
      new features alongside existing backend team.
    `,
    personalHighlights: [
      `Used previous turborepo knowledge to add optimised
      build cacheing to our existing monorepo, reducing incremental builds by a
      factor of 10`,
      `Worked with existing engineer and newly hired head of design to plan and
      build a UI component library within the monorepo, speeding up development
      time for all engineers significantly`,
      `Converted all existing network REST calls to RTK Query, resulting in less
      code duplication, better type checking, and increased guard behaviour on
      erroneous network calls.`,
    ],
    website: "https://stock.blend.media/360-stock",
    dateStart: parse("2022-10-11"),
    dateEnd: parse("2022-06-01"),
    logo: Logos.Minimum,
  },
  {
    employer: "Ember",
    companySize: [20, 20],
    tech: [
      "Typescript",
      "React",
      "React Native",
      "Expo",
      "Next.js",
      "GraphQL",
      "Turborepo",
      "GCP",
      "ConcourseCI",
    ],
    industry: ["Finance", "Taxation", "B2B", "Start-up", "SaaS"],
    role: "Senior Fullstack Engineer",
    summary: `Hired as new member of the product engineering team, role involved
     building out newly scoped features and bug fixes.`,
    personalHighlights: [
      `Lead engineering work to convert the existing
       monolith code repository to a monorepo using the turborepo build system.
       Involved updating and fixing react-native build systems, updates to CI
       tooling, and upgrading of most expo dependencies.
    `,
      `
      Took over technical lead responsibilities for newly created squad
      dedicated to feature rollout (separated from backend platform and
      maintenance teams). Majority of time spend working alongside product &
      design leads to define upcoming sprints. Additionally mentored remaining
      engineers on the team on best practices for testing and react.
    `,
    ],
    website: "https://stock.blend.media/360-stock",
    dateStart: parse("2022-06-17"),
    dateEnd: parse("2022-10-01"),
    logo: Logos.Ember,
  },
  {
    employer: "Freetrade",
    companySize: [200, 300],
    tech: [
      "Typescript",
      "React",
      "Next.js",
      "GraphQL",
      "Apollo GraphQL",
      "GCP",
      "Firestore",
      "Algolia",
    ],
    industry: ["Finance", "Stock Exchange", "Start-up", "SaaS"],
    role: "Senior Fullstack Engineer",
    summary: `Hired as part of the new web platform squad at Freetrade to port
    their existing iOS/Android offering to the web for desktop/power users.
    `,
    personalHighlights: [
      `Lead API design and implementation for search feature. Work included RFC
      proposal to discovery engineering squads and liaising between teams to
      determine timelines, planning of sprint task work for the web squad, and
      building new API application via an express.js microservice deployed via
      terraform`,
      `Handled vast majority of conversion work from our REST based BFF
       (backend-for-frontend) to a GraphQL implementation, including integration
       and unit test suites.`,
    ],
    website: "https://stock.blend.media/360-stock",
    dateStart: parse("2022-03-10"),
    dateEnd: parse("2022-06-01"),
    logo: Logos.Freetrade,
  },
  {
    employer: "Blend Media",
    companySize: [5, 40],
    tech: [
      "Javascript",
      "React",
      "Redux",
      "Redux Saga",
      "WebGL",
      "WebVR",
      "Styled Components",
      "Elixir",
      "Postgres",
      "ElasticSearch",
    ],
    industry: [
      "Stock Content",
      "VR",
      "AR",
      "XR",
      "360 Video/Images",
      "Start-up",
    ],
    role: "Senior Frontend Engineer / Technical Lead",
    summary: `Hired as the founding frontend engineer to replace outdated Vue.js
    & Elixir template based application implemented by the interim CTO.
    Eventually lead to promotion of technical lead as team expanded and led
    agile SDLC process across design, backend, and frontend disciplines`,
    personalHighlights: [
      `Wrote a bespoke 360 video/image viewer with cubemap, equirectangular, and
       SBS/OU 3D support to replace out of the box offerings that relied on the
      Three.js API. The Native WebGL implementation reduced our player code
      bundle size from ~250KB gzipped to ~25KB gzipped, whilst supporting
      additional features such as native VR headset playback via the newly
      available WebVR APIs`,
      `After company downsize, took on fullstack responsibilities and aided the CTO in the maintenance & improvement of our Elixir backend API.`,
    ],
    website: "https://stock.blend.media/360-stock",
    dateStart: parse("2017-03-21"),
    dateEnd: parse("2022-01-20"),
    logo: Logos.BlendMedia,
  },
];

// Just in case I ever forget to order things correctly
career.sort((a, b) => b.dateStart.getTime() - a.dateStart.getTime());

type OldJob = {
  employer: string;
  role: string;
  dateStart: Date;
  dateEnd: Date;
  tech: string[];
};

export const oldCareer: OldJob[] = [
  {
    employer: "Thin Martian",
    role: "Senior Developer",
    tech: ["Javascript", "React", "Redux", "Redux Thunk", "PHP", "Laravel"],
    dateStart: parse("2016-02-02"),
    dateEnd: parse("2017-03-01"),
  },
  {
    employer: "Loyalive",
    role: "Web Developer",
    tech: ["Javascript", "Angular V1", "Stylus", "Python", "Django"],
    dateStart: parse("2015-07-02"),
    dateEnd: parse("2015-12-11"),
  },
  {
    employer: "The Hive Group",
    role: "Mid-Weight Developer",
    tech: ["Javascript", "PHP", "Laravel", "iOS"],
    dateStart: parse("2014-09-01"),
    dateEnd: parse("2015-07-01"),
  },
  {
    employer: "The Hive Group",
    role: "Junior Developer",
    tech: ["Javascript", "PHP", "Laravel", "iOS"],
    dateStart: parse("2013-03-01"),
    dateEnd: parse("2014-09-01"),
  },
];
export default career;
