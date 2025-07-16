import React from "react";

const VolumeOff1 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="{props.width || 24}" height="{props.height || 24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 6.3706C14 4.65827 11.9884 3.73774 10.6926 4.85712L7.36317 7.73321C6.99988 8.04704 6.53583 8.21972 6.05576 8.21973L4.49998 8.21974C3.11928 8.21975 2 9.33903 2 10.7197V14.0127C2 15.3934 3.11929 16.5127 4.5 16.5127H6.0558C6.53587 16.5127 6.99993 16.6854 7.36322 16.9992L10.6926 19.8753C11.9884 20.9947 14 20.0741 14 18.3618V12.3662V6.3706Z" stroke={`${props.stroke || "black"}` } strokeWidth="2"/>
<path d="M18 14.1215L22.2426 9.87891" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 9.87894L22.2426 14.1216" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);

export default VolumeOff1;
