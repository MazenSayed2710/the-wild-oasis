import Spinner from "../../component/Spinner";
import TableBody from "./TableBody";
import TableHeader from "../../component/TableHeader";
import { useBookings } from "./useBookings";
import TableFooter from "./TableFooter";

function BookingsTable() {
  const { bookings, isLoading, count } = useBookings();

  if (isLoading) return <Spinner />;

  if (!bookings) return <h1>No bookings could be found</h1>;

  return (
    <>
      <table className="w-full rounded-md border border-gray-200 dark:border-gray-700">
        <TableHeader>
          <th>CABISN</th>
          <th>GUEST</th>
          <th>DATES</th>
          <th>STATUS</th>
          <th>AMOUNT</th>
        </TableHeader>
        <TableBody bookings={bookings} />
      </table>
      {count > 9 && <TableFooter bookings={bookings} count={count} />}
    </>
  );
}

export default BookingsTable;
