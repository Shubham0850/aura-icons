import React from "react";

const Copy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="{props.width || 24}" height="{props.height || 24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2497_26033)">
<path d="M16 3H4V16" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 7H20V19C20 20.1046 19.1046 21 18 21H10C8.89543 21 8 20.1046 8 19V7Z" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2497_26033">
<rect width="{props.width || 24}" height="{props.height || 24}" fill="white"/>
</clipPath>
</defs>
</svg>
);

export default Copy;
