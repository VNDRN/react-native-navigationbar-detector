import ReactNativeNavigationbarDetectorModule from "./ReactNativeNavigationbarDetectorModule";
import { NavigationBarType } from "./ReactNativeNavigationbarDetector.types";
export * from "./ReactNativeNavigationbarDetector.types";

const getAndroidNavigationBarTypeForInteger = (integer: number): NavigationBarType => {
  switch (integer) {
    case 0:
      return "threeButton";
    case 1:
      return "twoButton";
    case 2:
      return "gesture";
    default:
      return "threeButton";
  }
};

export function getNavigationBarType() {
  const integer = ReactNativeNavigationbarDetectorModule.getNavigationBarTypeInteger();
  return getAndroidNavigationBarTypeForInteger(integer);
}
