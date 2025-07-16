import React from "react";
import type { ReactElement } from "react";
import DOMPurify from "isomorphic-dompurify";
import parse, { Element } from "html-react-parser";

interface IconProps {
  svg: string;
  className?: string;
  width?: string;
  height?: string;
  title?: string;
  color?: string;
}

export default function Icon({
  svg,
  className,
  width = "24px",
  height = "24px",
  title = "Icon",
  color = "#888",
}: IconProps): ReactElement {
  const sanitizedSvg = DOMPurify.sanitize(svg);

  const parsedSvg = parse(sanitizedSvg, {
    replace: (domNode) => {
      if (domNode instanceof Element && "attribs" in domNode) {
        if (domNode.attribs?.stroke) {
          domNode.attribs.stroke = color;
        }
        if (domNode.name === "svg") {
          domNode.attribs.width = width;
          domNode.attribs.height = height;
        }
      }
      return domNode;
    },
  });

  return (
    <div
      className={className}
      role="img"
      aria-label={title}
      style={{ width, height }}
    >
      {parsedSvg}
    </div>
  );
}
