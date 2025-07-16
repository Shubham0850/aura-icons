import React from "react";

const Laptop = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="{props.width || 24}" height="{props.height || 24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="17" width="{props.width || 24}" height="{props.height || 24}" rx="1" stroke={`${props.stroke || "black"}` } strokeWidth="2"/>
<rect x="3" y="5" width="{props.width || 24}" height="{props.height || 24}" rx="1" stroke={`${props.stroke || "black"}` } strokeWidth="2"/>
<path d="M14 6L10 6" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round"/>
</svg>
);

export default Laptop;
