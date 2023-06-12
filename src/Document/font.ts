import { Font } from "@react-pdf/renderer";

import Regular from "@fontsource/lato/files/lato-latin-400-normal.woff";
import ItalicRegular from "@fontsource/lato/files/lato-latin-400-italic.woff";
import Bold from "@fontsource/lato/files/lato-latin-700-normal.woff";
import ItalicBold from "@fontsource/lato/files/lato-latin-700-italic.woff";

const FONT_FAMILY = "Lato";
Font.register({
  family: FONT_FAMILY,
  fonts: [
    { src: Regular },
    { fontStyle: "italic", src: ItalicRegular },
    { fontWeight: "bold", src: Bold },
    { fontWeight: "bold", fontStyle: "italic", src: ItalicBold },
  ],
});

export default FONT_FAMILY;
