import React from "react";

const CreditCard2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="{props.width || 24}" height="{props.height || 24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="4" width="{props.width || 24}" height="{props.height || 24}" rx="5" stroke={`${props.stroke || "black"}` } strokeWidth="2"/>
<path d="M2 9.5H22" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 15.5H11" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);

export default CreditCard2;
