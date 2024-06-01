import { SvgXml } from "react-native-svg";

export const ProgressBarSVG = () => {
  const svgMarkup = `
  <svg width="303" height="4" viewBox="0 0 303 4" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect opacity="0.3" width="303" height="3.88889" rx="1.94444" fill="#32FC65"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.94444C0 0.870558 0.870557 0 1.94444 0H231.102V3.88889H1.94444C0.870555 3.88889 0 3.01833 0 1.94444Z" fill="#32FC65"/>
  </svg>
  
  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;
  return <SvgImage />;
};
