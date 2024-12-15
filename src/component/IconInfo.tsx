import React from "react";

interface IconInfoProps {
	iconInfo: { name: string | null, svg: string | null };
	setIconInfo: (iconInfo: { name: string | null, svg: string | null }) => void;
}

function IconInfo({ iconInfo, setIconInfo }: IconInfoProps) {

	if (!iconInfo.name || !iconInfo.svg) return null

	return (
		<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-xl shadow-xl rounded-[25px] bg-[#161616] border-2 border-[#73707064] px-6 py-4">
			<div className="flex items-center justify-between text-sm text-gray-300">
				{/* Copy SVG Section */}
				<div className="flex items-center space-x-2">
					<span>{iconInfo?.name}</span>
					{/* Placeholder icon: replace with a clipboard icon */}
					<img src="/icons/general/home-1.svg" alt="GitHub" className="w-5 h-5 text-gray-400" />
				</div>

				{/* Divider */}
				<div className="w-px h-6 bg-gray-700" />

				{/* Download Section */}
				<div className="flex items-center space-x-2">
					<span className="text-orange-500">download (1)</span>
					{/* Placeholder icon: replace with a download icon */}
					<img src="/icons/general/home-1.svg" alt="GitHub" className="w-5 h-5 text-gray-400" />
				</div>

				{/* Divider */}
				<div className="w-px h-6 bg-gray-700" />

				{/* Clear All Section */}
				<div
					className="flex items-center space-x-2"
					onClick={() => setIconInfo({ name: null, svg: null })}
					onKeyDown={() => setIconInfo({ name: null, svg: null })}
				>
					<span>clear all</span>
					{/* Placeholder icon: replace with a suitable icon */}
					<img src="/icons/general/home-1.svg" alt="GitHub" className="w-5 h-5 text-white" />
				</div>
			</div>
		</div>
	);
}

export default IconInfo;
