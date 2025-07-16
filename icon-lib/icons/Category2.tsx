import React from "react";

const Category2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="{props.width || 24}" height="{props.height || 24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="3.5" y="4" width="{props.width || 24}" height="{props.height || 24}" rx="2.5" stroke={`${props.stroke || "black"}` } strokeWidth="2"/>
<rect x="3.5" y="14" width="{props.width || 24}" height="{props.height || 24}" rx="2.5" stroke={`${props.stroke || "black"}` } strokeWidth="2"/>
<rect x="13.5" y="4" width="{props.width || 24}" height="{props.height || 24}" rx="2.5" stroke={`${props.stroke || "black"}` } strokeWidth="2"/>
<rect x="13.5" y="14" width="{props.width || 24}" height="{props.height || 24}" rx="2.5" stroke={`${props.stroke || "black"}` } strokeWidth="2"/>
</svg>
);

export default Category2;
