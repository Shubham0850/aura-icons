const Divider: React.FC<{ category: string }> = ({ category }) => {
  return (
    <div className="flex items-center my-8 relative">
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"/>
      <span className="bg-[#f5f5f5] px-4 text-gray-500 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 capitalize font-semibold">{category}</span>
    </div>
  );
};

export default Divider;
