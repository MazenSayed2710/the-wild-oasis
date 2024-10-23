import { useNavigate, useParams } from "react-router-dom";
import { useDeleteBooking } from "../feature/Bookings/useDeleteBooking";
import { useOutside } from "../feature/Bookings/useOutside";
import { IoMdClose } from "react-icons/io";
function DeleteConfirmation({ setIsClicked }) {
  const ref = useOutside(() => setIsClicked(false));
  const { bookingId } = useParams();

  function handleDelete() {
    mutate(bookingId, {
      onSuccess: () => {
        navigate("/bookings");
      },
    });
  }
  return (
    <div
      className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-gray-800 backdrop-blur-sm"
      style={{ backgroundColor: "rgb(31 41 55 / 60%)" }}
    >
      <div
        className=" fixed flex w-[500px] flex-col gap-4 rounded-md bg-gray-200 p-5 shadow-md"
        ref={ref}
      >
        <h2 className=" text-2xl font-semibold">Delete bookings</h2>
        <p className="text-xl text-gray-600">
          Are you sure you want to delete this booking permanently? This action
          cannot be undone.
        </p>
        <div className="flex justify-end gap-6 p-3">
          <button
            onClick={() => setIsClicked(false)}
            className="rounded-md border border-gray-400 p-4 font-semibold"
          >
            Cancel
          </button>
          <button
            className="rounded-md border bg-red-700 p-4 font-semibold text-gray-200"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
        <button
          className="absolute right-5 top-5 rounded-md p-1 text-xl font-bold hover:bg-gray-300"
          onClick={() => setIsClicked(false)}
        >
          <IoMdClose />
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmation;
