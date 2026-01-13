import { memo } from "react";
import FilterButton from "./FilterButton";

const FilterCard = memo(
  ({ icon, label, options, activeFilters, onFilterChange, getCount }) => {
    return (
      <div className="filter-card">
        <div className="filter-card-header">
          <span className="filter-icon">{icon}</span>
          <span className="filter-label">{label}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {options.map((opt) => (
            <FilterButton
              key={opt}
              label={opt}
              count={getCount(opt)}
              isActive={activeFilters.includes(opt)}
              onClick={() => onFilterChange(opt)}
            />
          ))}
        </div>
      </div>
    );
  }
);

FilterCard.displayName = "FilterCard";

export default FilterCard;
