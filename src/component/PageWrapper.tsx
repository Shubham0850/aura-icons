interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const increments = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600];

  return (
    <div className="bg-[#F7F6F6] overflow-hidden">
      <div className="flex items-center absolute top-20 left-0 right-0 z-1">
        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl ">
        {/* Numbers and ticks */}
        <div className="absolute top-0 -left-10 flex flex-col justify-between items-center">
          {increments.map((num) => (
            <div key={num} className="my-12 -rotate-90">
              {/* Number */}
              <span className="text-[10px] text-gray-300 w-8 text-right">
                {num}
              </span>
              <div className="w-2 h-px mx-auto mt-1 bg-gray-300 -rotate-90" />
            </div>
          ))}
        </div>

        {/* Left vertical line */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

        {/* Right vertical line */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

        {/* Content */}
        <div className="relative px-4">
          {children}
        </div>

        {/* Numbers and ticks */}
        <div className="absolute top-0 -right-10 flex flex-col justify-between items-center">
          {increments.map((num) => (
            <div key={num} className="my-12 rotate-90">
              {/* Number */}
              <span className="text-[10px] text-gray-300 w-8 text-right">
                {num}
              </span>
              <div className="w-2 h-px mx-auto mt-1 bg-gray-300 -rotate-90" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
