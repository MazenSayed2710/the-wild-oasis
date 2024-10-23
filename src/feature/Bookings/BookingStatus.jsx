const statusStyle =
  "rounded-full  px-[7px] py-[5px] text-xs font-semibold uppercase ";

function BookingStatus({ status }) {
  return (
    <>
      {status === "unconfirmed" ? (
        <span className={`${statusStyle}  bg-blue-100 text-blue-900`}>
          {status}
        </span>
      ) : status === "checked-in" ? (
        <span className={`${statusStyle}  bg-green-100 text-green-900`}>
          {status}
        </span>
      ) : (
        <span className={`${statusStyle}  bg-gray-200 text-gray-600`}>
          {status}
        </span>
      )}
    </>
  );
}

export default BookingStatus;
