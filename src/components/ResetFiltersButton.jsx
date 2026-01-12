import { memo } from "react";

const ResetFiltersButton = memo(({ onClick }) => {
  return (
    <div className="flex justify-center">
      <button type="button" onClick={onClick} className="reset-filters-btn">
        ✕ Reset filters
      </button>
    </div>
  );
});

ResetFiltersButton.displayName = "ResetFiltersButton";

export default ResetFiltersButton;
