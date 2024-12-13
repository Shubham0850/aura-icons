const Divider: React.FC = () => {
  return (
    <div className="flex items-center w-full my-8">
      <div className="flex-grow border-t border-gray-200" />
      <div className="mx-4 flex items-center justify-center">
        {/* Center circle or icon */}
        <span className="w-3 h-3 rounded-full border border-gray-200 bg-white" />
      </div>
      <div className="flex-grow border-t border-gray-200" />
    </div>
  );
};

export default Divider;
