const CardContentGrid = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-12 p-5 md:p-8 lg:p-12 pt-4 md:pt-6 lg:pt-10">
    {children}
  </div>
);

export default CardContentGrid;
