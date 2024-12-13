import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white py-8">
      {/* Top notification bar */}
      <div className="absolute top-0 w-full bg-black text-white text-sm py-2 text-center z-10">
        Built faster websites with AlignUI PRO components!
        <a href="#" className="underline ml-2">Learn more</a>
      </div>

      <div className="max-w-5xl mx-auto mt-12 sm:mt-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Main hero container with border */}
        <div className="border border-gray-200 rounded-lg p-8 pb-12 sm:p-12 sm:pb-16 bg-white relative overflow-hidden">
          {/* Trusted by badge */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded-full py-1 px-3 shadow-sm">
              {/* Example of user avatars; you can replace with actual images */}
              <div className="flex -space-x-2 overflow-hidden">
                <Image
                  src="/user1.jpg"
                  alt="User 1"
                  width={24}
                  height={24}
                  className="rounded-full border border-white"
                />
                <Image
                  src="/user2.jpg"
                  alt="User 2"
                  width={24}
                  height={24}
                  className="rounded-full border border-white"
                />
                <Image
                  src="/user3.jpg"
                  alt="User 3"
                  width={24}
                  height={24}
                  className="rounded-full border border-white"
                />
                <Image
                  src="/user4.jpg"
                  alt="User 4"
                  width={24}
                  height={24}
                  className="rounded-full border border-white"
                />
              </div>
              <span className="text-sm text-gray-700">
                Trusted by <span className="font-semibold">1,500+</span> Figma users for seamless design!
              </span>
            </div>
          </div>

          {/* Hero Heading */}
          <h1 className="text-center text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Founder & Startup <span className="text-pink-500">perfectly aligned</span>
          </h1>
          <p className="text-center text-gray-600 max-w-md mx-auto mb-10">
            Flexible components, consistent UI, quick development, easy integration.
          </p>

          {/* Badges */}
          <div className="flex items-center justify-center space-x-4 mb-10 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              {/* React icon example (replace with your own) */}
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0L7.8 7.8H0L6.6 12.6L4.8 20.4L12 15.6L19.2 20.4L17.4 12.6L24 7.8H16.2L12 0Z"/></svg>
              <span>Built for React</span>
            </div>
            <span className="text-gray-300">·</span>
            <div className="flex items-center space-x-1">
              {/* Tailwind icon example (replace with your own) */}
              <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9.75 4c-2.897 0-4.998 1.263-6.21 3.134-.123.177-.076.425.099.54.59.38 1.231.575 1.968.575 1.249 0 2.269-.69 3.164-1.626.629-.675 1.214-1.302 1.867-1.738.61-.41 1.241-.71 1.902-.835.086-.017.171-.035.258-.055C11.52 3.876 10.642 4 9.75 4zm4.5 0c-2.897 0-4.998 1.263-6.21 3.134-.123.177-.076.425.1.54.588.378 1.23.573 1.967.573 1.249 0 2.27-.69 3.164-1.626.628-.675 1.214-1.302 1.866-1.738.61-.41 1.242-.71 1.902-.835.086-.017.171-.035.258-.055C16.02 3.876 15.142 4 14.25 4zm-9 9c-2.897 0-4.998 1.263-6.21 3.134-.123.177-.076.425.099.54.59.38 1.231.576 1.968.576 1.249 0 2.269-.69 3.164-1.626.629-.675 1.214-1.302 1.867-1.739.61-.41 1.241-.71 1.902-.834.086-.018.171-.036.258-.056C7.52 12.876 6.642 13 5.75 13zm9 0c-2.897 0-4.998 1.263-6.21 3.134-.123.177-.076.425.099.54.59.38 1.231.576 1.968.576 1.249 0 2.269-.69 3.164-1.626.629-.675 1.214-1.302 1.867-1.739.61-.41 1.241-.71 1.902-.834.086-.018.171-.036.258-.056C16.02 12.876 15.142 13 14.25 13z"/></svg>
              <span>Styled with TailwindCSS</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="#"
              className="inline-block bg-black text-white py-3 px-6 rounded-full hover:bg-gray-900 transition-colors"
            >
              Get Started — It’s free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
