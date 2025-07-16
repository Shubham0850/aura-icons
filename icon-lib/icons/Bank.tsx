import React from "react";

const Bank = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="{props.width || 24}" height="{props.height || 24}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 19H21M12 12V19M18 12V19M6 12V19M12.4472 3.22361L20.59 7.29502C21.4395 7.71974 21.1372 9 20.1875 9H3.81246C2.86276 9 2.56053 7.71974 3.40997 7.29502L11.5528 3.22361C11.8343 3.08284 12.1657 3.08284 12.4472 3.22361Z" stroke={`${props.stroke || "black"}` } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);

export default Bank;
