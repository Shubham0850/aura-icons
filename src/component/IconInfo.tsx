import React, { useState } from "react";
import Icon from "./Icon";

interface IconInfoProps {
	iconInfo: { name: string | null, svg: string | null };
	setIconInfo: (iconInfo: { name: string | null, svg: string | null }) => void;
}

function IconInfo({ iconInfo, setIconInfo }: IconInfoProps) {
	const [isCopied, setIsCopied] = useState(false);

	if (!iconInfo.name || !iconInfo.svg) return null;

	const handleCopySVG = () => {
		navigator.clipboard.writeText(iconInfo.svg || '');
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2000);
	};

	const handleCopyJSX = () => {
		const svgToReactComponent = (svg: string) => {
			// Convert the SVG string to a React component string
			return `
				import React from 'react';

				const SvgIcon = (props) => (
					${svg.replace(/<svg/g, '<svg {...props}')}
				);

				export default SvgIcon;
			`;
		};

		const reactComponentString = svgToReactComponent(iconInfo.svg || '');
		navigator.clipboard.writeText(reactComponentString);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2000);
	};

	return (
		<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-xl shadow-xl rounded-[25px] bg-[#161616] border-2 border-[#73707064] px-6 py-4">
			<div className="flex items-center justify-between text-sm text-gray-300">
				{/* Copy SVG Section */}
				<div className="flex items-center space-x-2">
					<Icon svg={iconInfo.svg} />
					<span>{iconInfo?.name}</span>
				</div>

				{/* Divider */}
				<div className="w-px h-6 bg-gray-700" />

				{/* Copy SVG */}
				<div
					className="flex items-center space-x-2 cursor-pointer"
					onClick={handleCopySVG}
					onKeyDown={handleCopySVG}
				>
					{isCopied ? (
						<span className="text-white text-md">Copied</span>
					) : (
						<span className="text-white text-md">Copy SVG</span>
					)}
					{/* Placeholder icon: replace with a download icon */}
					<img src="/icons/general/home-1.svg" alt="GitHub" className="w-5 h-5 text-gray-400" />
				</div>

				{/* Divider */}
				<div className="w-px h-6 bg-gray-700" />

				{/* Copy JSX */}
				<div
					className="flex items-center space-x-2 cursor-pointer"
					onClick={handleCopyJSX}
					onKeyDown={handleCopyJSX}
				>
					{isCopied ? (
						<span className="text-white text-md">Copied</span>
					) : (
						<span className="text-white text-md">Copy JSX</span>
					)}
					{/* Placeholder icon: replace with a download icon */}
					<img src="/icons/general/home-1.svg" alt="GitHub" className="w-5 h-5 text-gray-400" />
				</div>

				{/* Divider */}
				<div className="w-px h-6 bg-gray-700" />

				{/* Clear All Section */}
				<div
					className="flex items-center space-x-2 cursor-pointer"
					onClick={() => setIconInfo({ name: null, svg: null })}
					onKeyDown={() => setIconInfo({ name: null, svg: null })}
				>
					<span>Close</span>
					{/* Placeholder icon: replace with a suitable icon */}
					<img src="/icons/general/home-1.svg" alt="GitHub" className="w-5 h-5 text-white" />
				</div>
			</div>
		</div>
	);
}

export default IconInfo;
