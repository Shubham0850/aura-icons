import React from "react";

const Alculator = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="2" width="16" height="20" rx="4" stroke="black" strokeWidth="2"/>
<rect x="8" y="6" width="8" height="3" rx="1" stroke="black" strokeWidth="2"/>
<path d="M9 18H8" stroke="black" strokeWidth="2" strokeLinecap="round"/>
<path d="M9 14H8" stroke="black" strokeWidth="2" strokeLinecap="round"/>
<path d="M15 18H16" stroke="black" strokeWidth="2" strokeLinecap="round"/>
<path d="M15 14L16 14" stroke="black" strokeWidth="2" strokeLinecap="round"/>
</svg>
);

export default Alculator;
