import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white py-8">
      {/* Top notification bar */}
      <div className="absolute top-0 w-full bg-black text-white text-sm py-2 text-center z-10">
        Built faster websites with auraUI PRO components!
        <a href="https://www.auraui.com" className="underline ml-2">
          Learn more
        </a>
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
                Trusted by <span className="font-semibold">1,500+</span> Figma
                users for seamless design!
              </span>
            </div>
          </div>

          {/* Hero Heading */}
          <h1 className="text-center text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Founder & Startup{" "}
            <span className="text-pink-500">perfectly aligned</span>
          </h1>
          <p className="text-center text-gray-600 max-w-md mx-auto mb-10">
            Flexible components, consistent UI, quick development, easy
            integration.
          </p>

          {/* Badges */}
          <div className="flex items-center justify-center space-x-4 mb-10 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <span>Built for React</span>
            </div>
            <span className="text-gray-300">·</span>
            <div className="flex items-center space-x-1">
              <span>Styled with TailwindCSS</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="/"
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
