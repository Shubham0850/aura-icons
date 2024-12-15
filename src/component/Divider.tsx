const Divider: React.FC<{ category: string }> = ({ category }) => {
  return (
    <div className="flex items-center my-8">
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"/>
    </div>
  );
};

export default Divider;
