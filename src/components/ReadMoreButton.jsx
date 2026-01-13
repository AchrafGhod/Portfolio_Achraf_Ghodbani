const ReadMoreButton = ({ isExpanded, onToggle }) => (
  <button
    onClick={onToggle}
    className="inline-flex items-center gap-2 text-blue-50 hover:text-blue-50/80 font-medium text-xs md:text-sm lg:text-base transition-colors duration-300 group w-fit"
  >
    {isExpanded ? (
      <>
        Voir moins
        <span className="transition-transform group-hover:-translate-y-0.5">↑</span>
      </>
    ) : (
      <>
        Voir plus
        <span className="transition-transform group-hover:translate-y-0.5">↓</span>
      </>
    )}
  </button>
);

export default ReadMoreButton;
