import React from "react";

const PlayerPrevious = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="{props.width || 24}" height="{props.height || 24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2497_26059)">
<path d="M21 17.1962L21 6.80393C21 5.26433 19.3333 4.30208 18 5.07188L15 6.80393L15 17.1962L18 18.9283C19.3333 19.6981 21 18.7358 21 17.1962Z" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinejoin="round"/>
<path d="M3 13.7321C1.66667 12.9623 1.66667 11.0377 3 10.2679L12 5.0718C13.3333 4.302 15 5.26425 15 6.80385L15 17.1962C15 18.7358 13.3333 19.698 12 18.9282L3 13.7321Z" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2497_26059">
<rect width="{props.width || 24}" height="{props.height || 24}" fill="white"/>
</clipPath>
</defs>
</svg>
);

export default PlayerPrevious;
