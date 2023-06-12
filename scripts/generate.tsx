import React from "react";
import Document from "../src/Document";
import path from "path";
import { format } from "date-fns";
import { renderToFile } from "@react-pdf/renderer";

const now = format(new Date(), "MMMM-yyyy");
const fileName = path.resolve(process.cwd(), `CurriculumVitae-${now}.pdf`);

async function main() {
  console.log("Generating PDF");
  await renderToFile(<Document />, fileName);
  console.log("File generated at", fileName);
}

main();
