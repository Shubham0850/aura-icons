import React from "react";

const PlayerNext = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="{props.width || 24}" height="{props.height || 24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2497_26065)">
<path d="M3 6.80377V17.1961C3 18.7357 4.66667 19.6979 6 18.9281L9 17.1961L9 6.80377L6 5.07171C4.66667 4.30191 3 5.26417 3 6.80377Z" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinejoin="round"/>
<path d="M21 10.2679C22.3333 11.0377 22.3333 12.9623 21 13.7321L12 18.9282C10.6667 19.698 9 18.7358 9 17.1962L9 6.80385C9 5.26425 10.6667 4.302 12 5.0718L21 10.2679Z" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2497_26065">
<rect width="{props.width || 24}" height="{props.height || 24}" fill="white"/>
</clipPath>
</defs>
</svg>
);

export default PlayerNext;
