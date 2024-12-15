import React from 'react';
import type { ReactElement } from 'react';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

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
	const parsedSvg = parse(sanitizedSvg);

	return (
		<div className={className}>
			<svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="iconTitle">
				<title id="iconTitle">{title}</title>
				{parsedSvg}
			</svg>
		</div>
	);
}