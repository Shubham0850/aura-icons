import React from "react";

const PlayerStop = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="{props.width || 24}" height="{props.height || 24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2497_26061)">
<rect x="5" y="5" width="{props.width || 24}" height="{props.height || 24}" rx="2" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2497_26061">
<rect width="{props.width || 24}" height="{props.height || 24}" fill="white"/>
</clipPath>
</defs>
</svg>
);

export default PlayerStop;
