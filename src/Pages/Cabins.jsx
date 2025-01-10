import HeaderComponent from "../component/HeaderComponent";
import CabinTable from "../feature/cabins/CabinTable";

function Cabins() {
  const filterOptions = [
    { value: "all", text: "All" },
    { value: "no-discount", text: "No discount" },
    { value: "with-discount", text: "With discount" },
  ];
  const sortOptions = [
    { value: "name-asc", text: "Sort by name (A-Z)" },
    { value: "name-des", text: "Sort by name (Z-A)" },
    { value: "regularPrice-asc", text: "Sort by price (low first)" },
    { value: "regularPrice-des", text: "Sort by price (high first)" },
    { value: "maxCapacity-asc", text: "Sort by capacity (low first)" },
    { value: "maxCapacity-des", text: "Sort by capacity (high first)" },
  ];
  return (
    <div className="m-auto grid max-w-[85rem] gap-10  p-10 text-gray-800">
      <HeaderComponent
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        title="All cabins"
      />
      <CabinTable />
    </div>
  );
}

export default Cabins;
