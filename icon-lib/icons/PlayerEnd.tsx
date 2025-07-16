import React from "react";

const PlayerEnd = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="{props.width || 24}" height="{props.height || 24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2497_26064)">
<path d="M17 10.2679C18.3333 11.0377 18.3333 12.9623 17 13.7321L8 18.9282C6.66667 19.698 5 18.7358 5 17.1962L5 6.80385C5 5.26425 6.66667 4.302 8 5.0718L17 10.2679Z" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinejoin="round"/>
<path d="M20 5V19" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2497_26064">
<rect width="{props.width || 24}" height="{props.height || 24}" fill="white"/>
</clipPath>
</defs>
</svg>
);

export default PlayerEnd;
