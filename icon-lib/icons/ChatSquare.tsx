import React from "react";

const ChatSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8H20C20.5523 8 21 8.44772 21 9V20L17.667 17.231C17.4875 17.0818 17.2608 17 17.0273 17H9C8.44771 17 8 16.5523 8 16V13M16 8V5C16 4.44772 15.5523 4 15 4H4C3.44772 4 3 4.44772 3 5V16.0003L6.33301 13.2308C6.51255 13.0817 6.73924 13 6.97266 13H8M16 8V12C16 12.5523 15.5523 13 15 13H8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);

export default ChatSquare;
