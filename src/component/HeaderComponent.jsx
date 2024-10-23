import { useState } from "react";
import FilterSection from "./FilterSection";
import SortSection from "./SortSection";
import { useSearchParams } from "react-router-dom";

function HeaderComponent({ filterOptions, sortOptions, title }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isClicked, setIsClicked] = useState(
    searchParams.get("status") || "all",
  );
  function handleClick(value) {
    searchParams.set("status", value);
    searchParams.get("page") > 0 && searchParams.set("page", 1);
    setSearchParams(searchParams);
    setIsClicked(value);
  }
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold dark:text-gray-200">{title}</h1>
      <div className="flex items-center justify-between gap-5">
        <FilterSection
          options={filterOptions}
          handleClick={handleClick}
          isClicked={isClicked}
        />
        <SortSection options={sortOptions} />
      </div>
    </div>
  );
}

export default HeaderComponent;
