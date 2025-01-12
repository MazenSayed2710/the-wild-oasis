import { Link, useNavigate, useParams } from "react-router-dom";
import { useCheckIn } from "./useCheckIn";
import { useState } from "react";

function CheckBoxButtons({ data }) {
  const { bookingId } = useParams();
  const { checkin, isPending } = useCheckIn();
  const {
    totalPrice,
    extrasPrice,
    hasBreakfast,
    isPaid,
    cabinPrice,
    guests,
    status,
  } = data;
  const [paidConfirm, setPaidConfirm] = useState(isPaid);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const navigate = useNavigate();
  function handleClick() {
    checkin(bookingId, { onSuccess: () => navigate("/") });
  }
  return (
    <>
      {hasBreakfast && (
        <div className="flex items-center gap-3 bg-gray-50 p-5 dark:bg-gray-800 dark:text-gray-200">
          <input
            type="checkbox"
            id="breakfast"
            className="h-5 w-5"
            onChange={() => {
              setAddBreakfast((add) => !add);
              setPaidConfirm(false);
            }}
          />
          <label htmlFor="breakfast">
            Want to add breakfast for ${extrasPrice}.00?
          </label>
        </div>
      )}

      <div className="flex items-center gap-3 bg-gray-50 p-5 dark:bg-gray-800 dark:text-gray-200">
        <input
          type="checkbox"
          id="confirm"
          className="h-5 w-5"
          checked={paidConfirm}
          onChange={() => setPaidConfirm((paidConfirm) => !paidConfirm)}
          disabled={paidConfirm}
        />

        <label htmlFor="confirm">
          I confirm that {guests.fullName} has paid the total amount of $
          {(addBreakfast ? totalPrice : cabinPrice).toLocaleString()}.00{" "}
          {addBreakfast &&
            `($${cabinPrice}.00 cabin + $${extrasPrice}.00 breakfast)`}
        </label>
      </div>
      <div className="flex items-center justify-end gap-3">
        {status !== "checked-out" && (
          <button
            className="rounded-md bg-violet-500 p-2 font-semibold text-gray-200"
            onClick={handleClick}
            disabled={isPending || !paidConfirm}
          >
            {status === "unconfirmed" ? "Check in" : "Check Out"} booking #
            {bookingId}
          </button>
        )}
        <Link
          to={-1}
          className="rounded-md border border-gray-200 bg-gray-50 p-2 font-semibold text-gray-900"
        >
          Back
        </Link>
      </div>
    </>
  );
}

export default CheckBoxButtons;
