import { useCheckIn } from "../check-in-out/useCheckIn";
import { useCheckOut } from "../check-in-out/useCheckOut";

const arriveStyle = "bg-green-200";
const departingStyle = "bg-blue-200";

function ActivityRow({ booking }) {
  const {
    numNights,
    status,
    id,
    guests: { fullName, countryFlag },
  } = booking;

  const { checkin, isPending: isLoading1 } = useCheckIn();
  const { checkout, isPending: isLoading2 } = useCheckOut();

  function handelClick() {
    status === "unconfirmed" ? checkin(id) : checkout(id);
  }

  return (
    <div
      className="grid items-center gap-1 border-y border-gray-100 py-3 dark:border-gray-700"
      style={{ gridTemplateColumns: "20% 10% 25% 20% 20%" }}
    >
      <p
        className={`${status === "unconfirmed" ? arriveStyle : departingStyle} mr-2 rounded-full
          px-2 py-1 text-center text-sm `}
        style={{}}
      >
        {status === "checked-in" ? "Departing" : "Arriving"}
      </p>
      <img src={countryFlag} width={25} height={25} alt="flag" />
      <span className="dark:text-gray-200">{fullName}</span>
      <span className="dark:text-gray-200">{numNights} nights</span>
      <button
        onClick={handelClick}
        disabled={isLoading1 || isLoading2}
        className=" rounded-md bg-violet-500 px-2 py-1 text-[12px] font-semibold uppercase text-gray-200 hover:bg-violet-600"
      >
        {status === "unconfirmed" ? "Check In" : "Check out"}
      </button>
    </div>
  );
}
export default ActivityRow;
