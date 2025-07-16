import React from "react";

const Backspace = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="{props.width || 24}" height="{props.height || 24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2497_25986)">
<path d="M7.91987 5C7.33602 5 6.78132 5.25513 6.40136 5.69842L2.11564 10.6984C1.47366 11.4474 1.47366 12.5526 2.11564 13.3016L6.40136 18.3016C6.78132 18.7449 7.33602 19 7.91987 19L19 19C20.1046 19 21 18.1046 21 17L21 7C21 5.89543 20.1046 5 19 5L7.91987 5Z" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 10.0001L11 14.0001" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 10.0001L15 14.0001" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2497_25986">
<rect width="{props.width || 24}" height="{props.height || 24}" fill="white"/>
</clipPath>
</defs>
</svg>
);

export default Backspace;
