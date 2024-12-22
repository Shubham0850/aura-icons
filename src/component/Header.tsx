import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

const styles = {
	link: "text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600",
	mobileLink:
		"inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600",
	joinButton:
		"inline-flex justify-center px-4 py-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md items-center hover:bg-blue-700 focus:bg-blue-700",
};

const Header = ({ searchTerm, setSearchTerm }: { searchTerm: string; setSearchTerm: (term: string) => void }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.metaKey && event.key === 'k') {
				event.preventDefault();
				inputRef.current?.focus();
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="pb-6 bg-white lg:pb-0 max-w-5xl mx-auto shadow-md border rounded-[25px] m-4">
			<div className="mx-auto sm:px-4 lg:px-4">
				{/* lg+ */}
				<nav className="flex items-center justify-between py-3">
					<div className="flex items-center space-x-8">
						<div className="flex-shrink-0">
							<Link href="#" title="Aura UI" className="flex">
								<img
									className="w-auto h-4 lg:h-6"
									src="https://www.auraui.com/logo-light.png"
									alt="Aura UI Logo"
								/>
							</Link>

						</div>

						<Link href="/usages" className="text-sm font-semibold text-gray-500">
							Usages
						</Link>
						<Link href="/about" className="text-sm font-semibold text-gray-500">
							About
						</Link>
						<a href="https://www.auraui.com" target="_blank" rel="noreferrer" className="text-sm font-semibold text-gray-500">
							auraUI
						</a>
					</div>

					<button
						type="button"
						className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
						onClick={toggleMenu}
					>
						{/* {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )} */}
					</button>

					<div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-5">
						<div>
							{/* Search Input */}
							<div className="max-w-2xl mx-auto relative">
								<input
									type="text"
									ref={inputRef}
									value={searchTerm}
									placeholder="Search icons..."
									onChange={(e) => setSearchTerm(e.target.value)}
									className="w-full pl-12 pr-16 py-2 border border-gray-200 rounded-xl bg-gray-50 text-gray-500 focus:ring-1 focus:ring-[#333] focus:outline-none"
								/>
								<img
									src="/icons/general/search.svg"
									alt="Search"
									className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
								/>
								<span className="absolute right-2 top-1/2 transform -translate-y-1/2 border border-gray-200 rounded-md bg-white px-2 py-1 text-xs text-gray-500 shadow-sm font-bold">
									⌘ K
								</span>
							</div>
						</div>
						<div className="flex space-x-4">
							<div className="flex items-center p-2 border border-gray-200 justify-center rounded-xl bg-white shadow-sm">
								{/* Replace with your actual icons. Here is an example X (ex-Twitter) SVG */}
								<img src="/icons/general/home-1.svg" alt="GitHub" className="w-5 h-5 text-gray-400" />
							</div>

							<div className="flex items-center justify-center p-2 border border-gray-200 rounded-xl bg-white shadow-sm">
								{/* GitHub Icon */}
								<img src="/icons/general/home-1.svg" alt="GitHub" className="w-5 h-5 text-gray-400" />
							</div>

							<div className="flex items-center justify-center p-2 border border-gray-200 rounded-xl bg-white shadow-sm">
								{/* Discord Icon */}
								<img src="/icons/general/home-1.svg" alt="GitHub" className="w-5 h-5 text-gray-400" />
							</div>
						</div>
					</div>
				</nav>

				{/* xs to lg */}
				{isMenuOpen && (
					<nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
						<div className="flow-root">
							<div className="flex flex-col px-6 -my-2 space-y-1">
								<Link href="#" className={styles.mobileLink} title="Features">
									Features
								</Link>
								<Link href="#" className={styles.mobileLink} title="Solutions">
									Solutions
								</Link>
								<Link href="#" className={styles.mobileLink} title="Resources">
									Resources
								</Link>
								<Link href="#" className={styles.mobileLink} title="Pricing">
									Pricing
								</Link>
							</div>
						</div>

						<div className="px-6  mt-6">
							<Link href="#" className={styles.joinButton} role="button">
								Get started now
							</Link>
						</div>
					</nav>
				)}
			</div>
		</header>
	);
};

export default Header;
