import { useSearchParams } from "react-router-dom";
import FilterSection from "../../component/FilterSection";
import { useEffect, useState } from "react";

function HomeHeader() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isActive, setIsActive] = useState(7);

  const options = [
    { value: 7, text: "Last 7 days" },
    { value: 30, text: "Last 30 days" },
    { value: 90, text: "Last 90 days" },
  ];

  function handleClick(value) {
    searchParams.set("last", value);
    setSearchParams(searchParams);
    setIsActive(value);
  }

  useEffect(() => {
    setIsActive(Number(searchParams.get("last") || 7));
  }, [searchParams]);

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold dark:text-gray-200">Dashboard</h1>
      <FilterSection
        options={options}
        handleClick={handleClick}
        isClicked={isActive}
      />
    </div>
  );
}

export default HomeHeader;
