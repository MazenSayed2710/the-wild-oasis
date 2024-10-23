import { Link, useNavigate, useParams } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import Swal from "sweetalert2";
import { useBooking } from "./useBooking";
import { useDeleteBooking } from "./useDeleteBooking";
import Spinner from "../../component/Spinner";
import BookingStatus from "./BookingStatus";
import DetailsBox from "./DetailsBox";
import { useCheckOut } from "../check-in-out/useCheckOut";
function BookingDetails() {
  const { bookingId } = useParams();
  const { mutate: deleteBooking } = useDeleteBooking();
  const navigate = useNavigate();
  const { data, isLoading } = useBooking(bookingId);
  const { checkout, isPending } = useCheckOut();

  function handleDelete() {
    Swal.fire({
      title: "Delete bookings",
      text: " Are you sure you want to delete this booking permanently? This action cannot be undone.",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#b91c1c",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBooking(bookingId, {
          onSuccess: () => {
            navigate("/bookings");
          },
        });
      }
    });
  }

  if (isLoading) return <Spinner />;

  const { status } = data;

  return (
    <div className="m-auto flex max-w-[70rem] flex-col gap-10 p-8 text-gray-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <h2 className=" text-3xl font-bold">Booking # {bookingId}</h2>
          <BookingStatus status={status} />
        </div>
        <Link
          to={-1}
          className="flex items-center font-semibold text-violet-500"
        >
          <HiArrowLongLeft />
          Back
        </Link>
      </div>

      <DetailsBox data={data} />

      <div className="flex items-center justify-end gap-3">
        {data.status === "unconfirmed" ? (
          <Link
            to={`/checkin/${bookingId}`}
            className="rounded-md bg-violet-500 p-3 font-semibold text-gray-200"
          >
            Check in
          </Link>
        ) : data.status === "checked-in" ? (
          <button
            className="rounded-md bg-violet-500 p-3 font-semibold text-gray-200"
            onClick={() =>
              checkout(bookingId, { onSuccess: () => navigate("/") })
            }
            disabled={isPending}
          >
            Check out
          </button>
        ) : (
          ""
        )}

        <button
          className="rounded-md bg-red-700 p-3 font-semibold text-gray-200"
          onClick={handleDelete}
        >
          Delete booking
        </button>
        <Link
          to={-1}
          className="rounded-md border border-gray-200 bg-gray-50 p-3 font-semibold text-gray-900"
        >
          Back
        </Link>
      </div>
    </div>
  );
}

export default BookingDetails;
