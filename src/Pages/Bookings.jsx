import { format } from "date-fns";
import HeaderComponent from "../component/HeaderComponent";
import BookingsTable from "../feature/Bookings/BookingsTable";
import { supabase } from "../servicse/supabase";
import { useEffect } from "react";
function Bookings() {
  async function updateBookingDate(id) {
    const now = new Date();

    const formattedDate = format(now, "yyyy-MM-dd'T'HH:mm:ss");
    const { error } = await supabase
      .from("bookings")
      .update({ startDate: formattedDate })
      .eq("id", id);
    if (error) throw new Error(error.message);
  }
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
  useEffect(() => {
    setInterval(() => updateBookingDate(724), 24 * 60 * 60 * 1000);
    updateBookingDate();
  });
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
