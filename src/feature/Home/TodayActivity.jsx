import Spinner from "../../component/Spinner";
import ActivityRow from "./ActivityRow";
import { useTodayBookings } from "./useTodayBookings";

function TodayActivity() {
  const { bookings, isLoading } = useTodayBookings();

  if (isLoading) return <Spinner />;

  return (
    <div className="bg-gray-50 p-5 shadow-sm dark:bg-gray-800">
      <h2 className="text-xl  font-bold dark:text-gray-100">Today</h2>
      {!bookings.length && (
        <h1 className="mt-4 dark:text-gray-100">No activity today...</h1>
      )}
      <div className="flex flex-col py-5">
        {bookings.map((booking) => (
          <ActivityRow booking={booking} key={booking.id} />
        ))}
      </div>
    </div>
  );
}

export default TodayActivity;
