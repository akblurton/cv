import { Image as Img, View } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

interface ImageProps {
  src: string;
  style: undefined | Style | Style[];
}

const Image: React.FC<ImageProps> = ({ src, style }) => {
  if (/noimages/.test(global?.window?.location?.search ?? "")) {
    return <View style={style} />;
  }

  return <Img src={src} style={style} />;
};

export default Image;
