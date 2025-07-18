import React, { useState, useEffect, useRef } from "react";
import Icon from "./Icon";

interface IconInfoProps {
  iconInfo: { name: string | null; svg: string | null };
  setIconInfo: (iconInfo: { name: string | null; svg: string | null }) => void;
}

function IconInfo({ iconInfo, setIconInfo }: IconInfoProps) {
  const [copiedType, setCopiedType] = useState<"svg" | "jsx" | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show animation
    if (iconInfo.name && iconInfo.svg) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [iconInfo]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setIconInfo({ name: null, svg: null });
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIconInfo]);

  if (!iconInfo.name || !iconInfo.svg) return null;

  const fixSvgAttributes = (svg: string) => {
    return svg
      .replace(/stroke-width/g, "strokeWidth")
      .replace(/stroke-linecap/g, "strokeLinecap")
      .replace(/stroke-linejoin/g, "strokeLinejoin")
      .replace(/clip-path/g, "clipPath")
      .replace(/fill-rule/g, "fillRule")
      .replace(/clip-rule/g, "clipRule")
      .replace(/stroke="[^"]*"/g, 'stroke="currentColor"')
      .replace(/fill="[^"]*"/g, 'fill="currentColor"')
      .replace(/<svg([^>]+)>/, "<svg$1 {...props}>");
  };

  const handleCopySVG = (e: React.MouseEvent) => {
    e.stopPropagation();
    const fixedSvg = fixSvgAttributes(iconInfo.svg || "");
    navigator.clipboard.writeText(fixedSvg);
    setCopiedType("svg");
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleCopyJSX = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!iconInfo.name) return;
    const componentName = iconInfo.name
      .replace(/[^\w\s]/g, "") // remove special characters
      .replace(/[-_](\w)/g, (_, c) => c.toUpperCase()) // kebab/snake → camel
      .replace(/\s+(\w)/g, (_, c) => c.toUpperCase()) // spaces → camel
      .replace(/^\w/, (c) => c.toUpperCase()); // capitalize first letter

    const jsx = `<${componentName} />`;
    navigator.clipboard.writeText(jsx);
    setCopiedType("jsx");
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div
      ref={panelRef}
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl rounded-[25px] border border-gray-200 px-8 py-5 bg-white shadow-xl transition-all duration-300 ease-in-out ${
        visible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-800">
        {/* Icon Display */}
        <div className="flex items-center space-x-3">
          <Icon svg={iconInfo.svg} />
          <span className="font-medium">{iconInfo?.name}</span>
        </div>

        <div className="w-px h-6 bg-gray-300 hidden sm:block" />

        {/* Copy SVG */}
        <div
          onClick={handleCopySVG}
          className="flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition duration-200"
        >
          <span className="text-sm">
            {copiedType === "svg" ? "Copied" : "Copy SVG"}
          </span>
          {copiedType !== "svg" && (
            <img
              src="/icons/files/Copy.svg"
              alt="Copy SVG"
              className="w-5 h-5"
            />
          )}
        </div>

        <div className="w-px h-6 bg-gray-300 hidden sm:block" />

        {/* Copy JSX */}
        <div
          onClick={handleCopyJSX}
          className="flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition duration-200"
        >
          <span className="text-sm">
            {copiedType === "jsx" ? "Copied" : "Copy JSX"}
          </span>
          {copiedType !== "jsx" && (
            <img
              src="/icons/files/Copy.svg"
              alt="Copy JSX"
              className="w-5 h-5"
            />
          )}
        </div>

        <div className="w-px h-6 bg-gray-300 hidden sm:block" />

        {/* Close */}
        <div
          onClick={() => setIconInfo({ name: null, svg: null })}
          className="flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition duration-200"
        >
          <span className="text-sm">Close</span>
          <img
            src="/icons/interface/Close.svg"
            alt="Close"
            className="w-5 h-5"
          />
        </div>
      </div>
    </div>
  );
}

export default IconInfo;
