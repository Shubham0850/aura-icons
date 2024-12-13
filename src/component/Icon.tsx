import React, { type ReactElement } from 'react'
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

interface IconProps {
  svg: string;
  className?: string;
}

export default function Icon({ svg, className }: IconProps): ReactElement {
  const sanitizedSvg = DOMPurify.sanitize(svg);
  const parsedSvg = parse(sanitizedSvg);

  return (
    <div className={className}>
      {parsedSvg}
    </div>
  );
}