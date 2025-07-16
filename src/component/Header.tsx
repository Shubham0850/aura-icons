import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";

const styles = {
  link: "text-base font-medium text-zinc-800 transition-colors duration-200 hover:text-zinc-600 focus:text-zinc-600",
  mobileLink:
    "inline-flex py-2 text-base font-medium text-zinc-800 transition-colors duration-200 hover:text-zinc-600 focus:text-zinc-600",
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
    <header className="max-w-5xl mx-auto m-4">
      {/* Top Nav (Card) */}
      <div className="bg-white shadow-md border rounded-[25px] px-3 sm:px-4 lg:px-4">
        <nav className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <Link href="#" title="Aura UI" className="flex">
                <img
                  className="w-auto h-8"
                  src="/logo.png"
                  alt="Aura UI Logo"
                />
              </Link>
            </div>

            <div className="hidden lg:flex space-x-4">
              <Link href="/about" className={styles.link}>
                About
              </Link>

              <Link
                href="https://www.auraui.com"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                AuraUI
              </Link>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex p-1 text-black transition-all duration-200 rounded-md lg:hidden hover:opacity-70"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <RxCross2 size={24} /> : <FiMenu size={24} />}
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-5">
            <div className="relative group mx-auto transition-all duration-300 w-full max-w-[280px] focus-within:max-w-[320px]">
              <input
                type="text"
                ref={inputRef}
                value={searchTerm}
                placeholder="Search icons..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-20 py-2 border border-gray-200 rounded-xl bg-gray-50 text-gray-500 transition-all duration-300 ease-in-out focus:ring-1 focus:ring-neutral-400 focus:outline-none focus-visible:outline-none"
              />
              <img
                src="/icons/general/search.svg"
                alt="Search"
                className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 border border-gray-200 rounded-md bg-white px-2 py-1 text-xs text-gray-500 shadow-sm font-bold pointer-events-none">
                ⌘ K
              </span>
            </div>

            <div className="flex space-x-4">
              <Link
                href="https://github.com/Shubham0850/aura-icons"
                target="_blank"
              >
                <div className="flex items-center p-2 border border-gray-200 justify-center rounded-xl bg-white shadow-sm transition-all duration-300 hover:border-zinc-300 hover:bg-zinc-100">
                  <BsGithub size={20} />
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Nav Below Header */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden px-3 sm:px-4 ${
          isMenuOpen
            ? "max-h-[300px] opacity-100 mt-2"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md">
          <div className="flex flex-col px-6 space-y-2">
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
              AuraUI
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
