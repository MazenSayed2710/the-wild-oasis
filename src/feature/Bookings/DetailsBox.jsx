import { HiHomeModern } from "react-icons/hi2";
import { FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { format } from "date-fns";
import { dateDiffrent, numOfNights } from "../../../utils/helper";
import { BiMessageDetail } from "react-icons/bi";

function DetailsBox({ data }) {
  const {
    startDate,
    endDate,
    cabins,
    guests,
    totalPrice,
    numGuests,
    created_at,
    hasBreakfast,
    extrasPrice,
    observations,
    isPaid,
  } = data;
  const { name } = cabins;

  const { fullName, email, nationalID, countryFlag } = guests;

  return (
    <div>
      <div className=" flex items-center justify-between rounded-md bg-violet-500 p-8 font-semibold text-gray-200">
        <div className="flex items-center gap-2">
          <HiHomeModern className=" text-2xl" />
          <span>
            {numOfNights(startDate, endDate)} in Cabin {name}{" "}
          </span>
        </div>
        <div>
          {format(new Date(startDate), "EEE, MMM dd yyyy")}(
          {dateDiffrent(startDate)})-
          {format(new Date(startDate), "EEE, MMM dd yyyy")}
        </div>
      </div>

      <div className=" flex flex-col gap-5 bg-gray-50 p-8 dark:bg-gray-800 ">
        <div className="flex gap-5 text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-3">
            <img src={countryFlag} width={30} height={30} alt="flag" />
            <span className="font-semibold text-gray-900 dark:text-gray-200">
              {fullName} +{numGuests} guests
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span>•</span>
            <p>{email}</p>
          </div>
          <div className="flex items-center gap-3">
            <span>•</span>
            <p>National ID {nationalID}</p>
          </div>
        </div>
        {observations && (
          <div className="flex items-center gap-2 ">
            <BiMessageDetail className=" text-violet-500" />
            <p className=" font-semibold">Observations</p>
            <span>{observations}</span>
          </div>
        )}

        <div className="flex items-center gap-2 ">
          <FaRegCheckCircle className=" text-violet-500" />
          <p className=" font-semibold dark:text-gray-200">
            Breakfast included?
          </p>
          <span>{hasBreakfast ? "Yes" : "No"}</span>
        </div>
        <div
          className={`flex justify-between ${isPaid ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"} p-4 font-semibold `}
        >
          <div className="flex items-center gap-2">
            <AiOutlineDollar />
            <p>Total price</p>
            <span>
              $
              {extrasPrice
                ? `${totalPrice + extrasPrice}.00 ($${totalPrice} cabin + $${extrasPrice} breakfast)`
                : totalPrice.toLocaleString()}
            </span>
          </div>
          <h2 className="uppercase">
            {isPaid ? "paid" : "will pay at property"}
          </h2>
        </div>
        <div className="flex justify-end text-gray-600 dark:text-gray-300">
          <span className="text-sm ">
            Booked at {format(new Date(created_at), "EEE, MMM dd yyyy, h:mm a")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DetailsBox;
