import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
function TableFooter({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  let page = searchParams.get("page") || 1;
  const from = (Number(page) - 1) * 10;
  const to = 10 * Number(page) - 1 >= count ? count : 10 * Number(page) - 1;

  function handleNext() {
    searchParams.set("page", Number(page) + 1);
    setSearchParams(searchParams);
  }
  function handlePrev() {
    searchParams.set("page", Number(page) - 1);
    setSearchParams(searchParams);
  }

  return (
    <div className="relative bottom-10 flex w-full items-center justify-between border border-t-0 border-gray-200 p-2 dark:border-gray-700 dark:text-gray-200">
      <p>
        Showing <span className="font-semibold">{from + 1}</span> to{" "}
        <span className="font-semibold">{to + 1}</span> of{" "}
        <span className="font-semibold">{count}</span> results
      </p>
      <div className="flex justify-between gap-7">
        <button
          disabled={from === 0}
          onClick={handlePrev}
          className="flex w-24 items-center justify-center rounded-md px-2 py-1 hover:bg-violet-500 hover:text-gray-200 disabled:hover:bg-[#898989] disabled:hover:text-gray-800"
        >
          <HiChevronLeft className="text-2xl" /> <span>Previous</span>
        </button>
        <button
          disabled={to === count}
          onClick={handleNext}
          className="flex w-24 items-center justify-center rounded-md px-2 py-1 hover:bg-violet-500 hover:text-gray-200 disabled:hover:bg-[#898989] disabled:hover:text-gray-800"
        >
          <span>Next</span>
          <HiChevronRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
export default TableFooter;
