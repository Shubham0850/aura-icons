import React from "react";

const Attachment = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="{props.width || 24}" height="{props.height || 24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2497_26034)">
<path d="M6 15L6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9V17C18 19.2091 16.2091 21 14 21C11.7909 21 10 19.2091 10 17V9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9V17" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2497_26034">
<rect width="{props.width || 24}" height="{props.height || 24}" fill="white"/>
</clipPath>
</defs>
</svg>
);

export default Attachment;
