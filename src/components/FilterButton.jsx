import { memo } from "react";

const FilterButton = memo(({ label, count, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`exp-filter-compact ${isActive ? "exp-filter-active" : ""}`}
      aria-pressed={isActive}
      aria-label={`Filter by ${label}`}
    >
      {label} <span className="filter-count">({count})</span>
    </button>
  );
});

FilterButton.displayName = "FilterButton";

export default FilterButton;
