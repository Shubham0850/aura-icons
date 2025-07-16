import React from "react";

const IPhone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="{props.width || 24}" height="{props.height || 24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="2" width="{props.width || 24}" height="{props.height || 24}" rx="3" stroke={`${props.stroke || "black"}` } strokeWidth="2"/>
<path d="M14 3L10 3" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round"/>
</svg>
);

export default IPhone;
