import { useSearchParams } from "react-router-dom";

function SortSection({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortType = searchParams.get("sort") || "";
  console.log(sortType);
  function handleChange(e) {
    searchParams.set("sort", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <select
      id={sortType}
      name={sortType}
      className="rounded-md px-3 py-2 outline-none dark:bg-gray-800 dark:text-gray-200"
      onChange={(e) => handleChange(e)}
      value={sortType}
    >
      {options.map((item) => (
        <option value={item.value} key={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  );
}

export default SortSection;
