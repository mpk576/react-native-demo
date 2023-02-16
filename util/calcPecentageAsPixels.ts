import { Dimensions } from "react-native";

export default function calcPercentageAsPixels(percentage: number): number {
  const screenWidth = Dimensions.get("window").width;
  const pixels = screenWidth * (percentage / 100);
  console.log("screen width", screenWidth);
  console.log("percentage", percentage);
  console.log("pixels", pixels);
  return pixels;
}
