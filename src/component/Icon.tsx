import React from 'react';
import type { ReactElement } from 'react';
import DOMPurify from 'dompurify';
import parse, { Element } from 'html-react-parser';

interface IconProps {
	svg: string;
	className?: string;
	width?: string;
	height?: string;
	title?: string;
	color?: string;
}

export default function Icon({ svg, className, width = '24px', height = '24px', title = 'Icon', color = '#888' }: IconProps): ReactElement {
	const sanitizedSvg = DOMPurify.sanitize(svg);
	const parsedSvg = parse(sanitizedSvg, {
		replace: (domNode) => {
			if (domNode instanceof Element && 'attribs' in domNode) {
				// Update stroke color
				if (domNode.attribs?.stroke) {
					domNode.attribs.stroke = color;
				}
				// Update width and height if applicable
				if (domNode.name === 'svg') {
					domNode.attribs.width = width;
					domNode.attribs.height = height;
				}
			}
			return domNode;
		}
	});

	return (
		<div className={className}>
			<svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="iconTitle">
				<title id="iconTitle">{title}</title>
				{parsedSvg}
			</svg>
		</div>
	);
}