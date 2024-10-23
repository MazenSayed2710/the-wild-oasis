const activeStyle = "bg-violet-500 text-gray-200";

function FilterSection({ options, handleClick, isClicked }) {
  return (
    <ul className="flex items-center gap-3 rounded-md bg-gray-50 p-1 dark:bg-gray-800 dark:text-gray-200">
      {options.map((option) => (
        <li
          key={option.value}
          className={`${isClicked === option.value && activeStyle} rounded-md px-2 py-1 hover:bg-violet-500 hover:text-gray-200 `}
        >
          <button onClick={() => handleClick(option.value)}>
            {option.text}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default FilterSection;
