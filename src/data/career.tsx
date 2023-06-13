import { parseISO as parse } from "date-fns";

type CareerEntry = {
  employer: string;
  companySize: [number, number];
  industry: string | string[];
  roleSummary: string;
  personalHighlights: string;
  logo?: string;
  website?: string;
  dateStart: Date;
  dateEnd?: Date;
};

const career: CareerEntry[] = [
  {
    employer: "Minimum",
    companySize: [15, 15],
    industry: ["Carbon Inventory", "B2B", "Start-up", "SaaS"],
    roleSummary: "",
    personalHighlights: "",
    website: "https://stock.blend.media/360-stock",
    dateStart: parse("2022-10-11"),
  },
  {
    employer: "Ember",
    companySize: [20, 20],
    industry: ["Finance", "Taxation", "B2B", "Start-up", "SaaS"],
    roleSummary: "",
    personalHighlights: "",
    website: "https://stock.blend.media/360-stock",
    dateStart: parse("2022-06-17"),
  },
  {
    employer: "Freetrade",
    companySize: [200, 300],
    industry: ["Finance", "Stock Exchange", "Start-up", "SaaS"],
    roleSummary: "",
    personalHighlights: "",
    website: "https://stock.blend.media/360-stock",
    dateStart: parse("2022-03-10"),
  },
  {
    employer: "Blend Media",
    companySize: [5, 40],
    industry: [
      "Stock Content",
      "VR",
      "AR",
      "XR",
      "360 Video/Images",
      "Start-up",
    ],
    roleSummary: "",
    personalHighlights: "",
    website: "https://stock.blend.media/360-stock",
    dateStart: parse("2017-03-21"),
  },
];

// Just in case I ever forget to order things correctly
career.sort((a, b) => b.dateStart.getTime() - a.dateStart.getTime());

export default career;
