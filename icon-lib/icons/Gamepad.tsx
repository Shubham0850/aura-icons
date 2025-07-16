import React from "react";

const Gamepad = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10.0005C2 7.04238 4.55409 4.73096 7.49752 5.0253L11.403 5.41585C11.8 5.45555 12.2 5.45555 12.597 5.41585L16.5025 5.0253C19.4459 4.73096 22 7.04238 22 10.0005V16C22 19.5932 17.3041 20.9552 15.3815 17.9196C14.0112 15.7559 10.8803 15.6836 9.4116 17.7818L9.12736 18.1878C6.93073 21.3259 2 19.7716 2 15.9411V10.0005Z" stroke="black" strokeWidth="2"/>
<circle cx="18" cy="9.97554" r="1.3" fill="black"/>
<circle cx="16" cy="12.9756" r="1.2" fill="black"/>
<path d="M8 13.4756L8 9.47559" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 11.4756H10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);

export default Gamepad;
