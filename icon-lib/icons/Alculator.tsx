import React from "react";

const Alculator = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="{props.width || 24}" height="{props.height || 24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="2" width="{props.width || 24}" height="{props.height || 24}" rx="4" stroke={`${props.stroke || "black"}` } strokeWidth="2"/>
<rect x="8" y="6" width="{props.width || 24}" height="{props.height || 24}" rx="1" stroke={`${props.stroke || "black"}` } strokeWidth="2"/>
<path d="M9 18H8" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round"/>
<path d="M9 14H8" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round"/>
<path d="M15 18H16" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round"/>
<path d="M15 14L16 14" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round"/>
</svg>
);

export default Alculator;
