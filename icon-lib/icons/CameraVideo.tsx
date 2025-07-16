import React from "react";

const CameraVideo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="{props.width || 24}" height="{props.height || 24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2497_26073)">
<path d="M3 5H17V17C17 18.1046 16.1046 19 15 19H5C3.89543 19 3 18.1046 3 17V5Z" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinejoin="round"/>
<path d="M17 9L19.7575 8.31063C20.3886 8.15285 21 8.63021 21 9.28078V14.7192C21 15.3698 20.3886 15.8472 19.7575 15.6894L17 15V9Z" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2497_26073">
<rect width="{props.width || 24}" height="{props.height || 24}" fill="white"/>
</clipPath>
</defs>
</svg>
);

export default CameraVideo;
