import BookingRow from "./BookingRow";

function TableBody({ bookings }) {
  return (
    <tbody className="rounded-md">
      {bookings.map((booking) => (
        <BookingRow booking={booking} key={booking.id} />
      ))}
    </tbody>
  );
}

export default TableBody;
