import HeaderComponent from "../component/HeaderComponent";
import BookingsTable from "../feature/Bookings/BookingsTable";
function Bookings() {
  const filterOptions = [
    { value: "all", text: "All" },
    { value: "checked-out", text: "Check out" },
    { value: "checked-in", text: "Check in" },
    { value: "unconfirmed", text: "Unconfirmed" },
  ];
  const sortOptions = [
    { value: "startDate-des", text: "Sort by date (recent first)" },
    { value: "startDate-asc", text: "Sort by date (earlier first)" },
    { value: "totalPrice-des", text: "Sort by date (high first)" },
    { value: "totalPrice-asc", text: "Sort by date (low first)" },
  ];

  return (
    <div className="m-auto grid max-w-[85rem] gap-10  p-10 text-gray-800">
      <HeaderComponent
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        title="All bookings"
      />
      <BookingsTable />
    </div>
  );
}

export default Bookings;
