import { Link, useParams } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";

function CheckHeader() {
  const { bookingId } = useParams();
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <h2 className=" text-3xl font-bold dark:text-gray-200">
          Check in Booking # {bookingId}
        </h2>
      </div>
      <Link to={-1} className="flex items-center font-semibold text-violet-500">
        <HiArrowLongLeft />
        Back
      </Link>
    </div>
  );
}

export default CheckHeader;
