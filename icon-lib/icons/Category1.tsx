import React from "react";

const Category1 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="{props.width || 24}" height="{props.height || 24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2497_25820)">
<circle cx="17" cy="7" r="3" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="7" cy="17" r="3" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 14H20V19C20 19.5523 19.5523 20 19 20H15C14.4477 20 14 19.5523 14 19V14Z" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4H10V9C10 9.55228 9.55228 10 9 10H5C4.44772 10 4 9.55228 4 9V4Z" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2497_25820">
<rect width="{props.width || 24}" height="{props.height || 24}" fill="white"/>
</clipPath>
</defs>
</svg>
);

export default Category1;
