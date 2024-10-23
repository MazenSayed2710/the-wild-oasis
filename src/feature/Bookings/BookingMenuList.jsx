import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDeleteBooking } from "./useDeleteBooking";
import Swal from "sweetalert2";
import { HiArrowDownOnSquare, HiArrowUpOnSquare } from "react-icons/hi2";
import { useCheckOut } from "../check-in-out/useCheckOut";
function BookingMenuList({ data, setIsOpen }) {
  const { id, status } = data;
  const { mutate: deleteBooking } = useDeleteBooking(id);
  const { checkout, isPending } = useCheckOut();
  function handleDelete(id) {
    setIsOpen(false);
    Swal.fire({
      title: "Delete bookings",
      text: " Are you sure you want to delete this booking permanently? This action cannot be undone.",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#b91c1c",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBooking(id);
      }
    });
  }

  return (
    <>
      <div className="absolute right-[23px] top-[90%] z-50 flex h-fit  w-44  flex-col items-start justify-center gap-2 bg-white text-gray-600 shadow-md dark:bg-gray-800 dark:text-gray-200">
        <Link
          to={`/bookings/${id}`}
          className="flex w-full items-center  gap-3 py-2 pl-5 text-sm hover:bg-blue-50 dark:hover:bg-gray-900"
        >
          <IoEyeOutline /> <span>See details</span>
        </Link>

        {status === "unconfirmed" ? (
          <Link
            to={`/checkin/${id}`}
            className="flex w-full items-center  gap-3 py-2 pl-5 text-sm hover:bg-blue-50 dark:hover:bg-gray-900"
          >
            <HiArrowDownOnSquare />
            <span>Check in</span>
          </Link>
        ) : status === "checked-in" ? (
          <button
            className="flex w-full items-center  gap-3 py-2 pl-5 text-sm hover:bg-blue-50 dark:hover:bg-gray-900"
            onClick={() => {
              checkout(id);
              setIsOpen(false);
            }}
            disabled={isPending}
          >
            <HiArrowUpOnSquare />
            <span>Check out</span>
          </button>
        ) : (
          ""
        )}
        <button
          className="flex w-full items-center  gap-3 py-2 pl-5 text-sm hover:bg-blue-50 dark:hover:bg-gray-900"
          onClick={() => handleDelete(id)}
        >
          {" "}
          <RiDeleteBin6Line className=" font-semibold text-gray-600" />
          <span>Delete booking</span>
        </button>
      </div>
    </>
  );
}

export default BookingMenuList;
