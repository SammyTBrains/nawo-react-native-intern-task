import { SvgXml } from "react-native-svg";

export const ArrowSVG = () => {
  const svgMarkup = `
  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.00342 6L0.968306 2.2476C0.715351 2.01237 0.715351 1.61184 0.968306 1.37661V1.37661C1.19657 1.16434 1.55001 1.16434 1.77827 1.37661L6.75 6L1.77827 10.6234C1.55001 10.8357 1.19657 10.8357 0.968306 10.6234V10.6234C0.715351 10.3882 0.715351 9.98763 0.968306 9.7524L5.00342 6Z" fill="#978AF4" stroke="#978AF4" stroke-width="0.5"/>
  </svg>
  

  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;
  return <SvgImage />;
};
