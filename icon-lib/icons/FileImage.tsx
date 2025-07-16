import React from "react";

const FileImage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="{props.width || 24}" height="{props.height || 24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2497_26018)">
<path d="M7 21C5.89543 21 5 20.1046 5 19V3H14L19 8V19C19 20.1046 18.1046 21 17 21H7Z" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 20L12 14L18 20" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="9.5" y="10.5" width="{props.width || 24}" height="{props.height || 24}" stroke={`${props.stroke || "black"}` } strokeWidth="3" strokeLinejoin="round"/>
<path d="M13 3V9H19" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2497_26018">
<rect width="{props.width || 24}" height="{props.height || 24}" fill="white"/>
</clipPath>
</defs>
</svg>
);

export default FileImage;
