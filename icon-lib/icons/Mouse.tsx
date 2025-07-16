import React from "react";

const Mouse = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="{props.width || 24}" height="{props.height || 24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="5" y="2" width="{props.width || 24}" height="{props.height || 24}" rx="7" stroke={`${props.stroke || "black"}` } strokeWidth="2"/>
<path d="M12 6.5V8.5" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round"/>
</svg>
);

export default Mouse;
