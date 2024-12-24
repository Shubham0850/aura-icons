import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const styles = {
  link: "text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600",
  mobileLink:
    "inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600",
  joinButton:
    "inline-flex justify-center px-4 py-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md items-center hover:bg-blue-700 focus:bg-blue-700",
};

const Header = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md border rounded-[25px] m-4 max-w-5xl mx-auto">
      <div className="px-3 sm:px-4 lg:px-4">
        <nav className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <Link href="#" title="Aura UI" className="flex">
                <img
                  className="w-auto h-5 lg:h-6"
                  src="https://www.auraui.com/logo-light.png"
                  alt="Aura UI Logo"
                />
              </Link>
            </div>

            <div className="hidden lg:flex space-x-4">
              <Link href="/usages" className={styles.link}>
                Usages
              </Link>
              <Link href="/about" className={styles.link}>
                About
              </Link>
              <Link
                href="https://www.auraui.com"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                auraUI
              </Link>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex p-1 bg-zinc-200 text-black transition-all duration-200 rounded-md lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <RxCross2 size={24} /> : <FiMenu size={24} />}
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-5">
            <div className="relative max-w-2xl mx-auto">
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
            <div className="flex space-x-4">
              <div className="flex items-center p-2 border border-gray-200 justify-center rounded-xl bg-white shadow-sm">
                <img
                  src="/icons/general/home-1.svg"
                  alt="Home"
                  className="w-5 h-5 text-gray-400"
                />
              </div>
              <div className="flex items-center justify-center p-2 border border-gray-200 rounded-xl bg-white shadow-sm">
                <img
                  src="/icons/general/home-1.svg"
                  alt="GitHub"
                  className="w-5 h-5 text-gray-400"
                />
              </div>
              <div className="flex items-center justify-center p-2 border border-gray-200 rounded-xl bg-white shadow-sm">
                <img
                  src="/icons/general/home-1.svg"
                  alt="Discord"
                  className="w-5 h-5 text-gray-400"
                />
              </div>
            </div>
          </div>
        </nav>

        {isMenuOpen && (
          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <Link href="#" className={styles.mobileLink} title="Features">
                  Features
                </Link>
                <Link href="#" className={styles.mobileLink}>
                  Usages
                </Link>
                <Link href="#" className={styles.mobileLink}>
                  About
                </Link>
                <Link
                  href="https://www.auraui.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.mobileLink}
                >
                  auraUI
                </Link>
              </div>
            </div>

            <div className="px-6 mt-6">
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
