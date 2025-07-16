import React from "react";

const OldschoolGamepad = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="{props.width || 24}" height="{props.height || 24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="8" width="{props.width || 24}" height="{props.height || 24}" rx="5" stroke={`${props.stroke || "black"}` } strokeWidth="2"/>
<path d="M12 7.5V7C12 6.17157 11.3284 5.5 10.5 5.5V5.5C9.67157 5.5 9 4.82843 9 4V3" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round"/>
<circle cx="18" cy="13.5" r="1.3" fill="black"/>
<circle cx="16" cy="16.5" r="1.3" fill="black"/>
<path d="M8 17L8 13" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 15H10" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);

export default OldschoolGamepad;
