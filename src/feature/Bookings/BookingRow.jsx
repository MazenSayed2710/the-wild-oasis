import { format } from "date-fns";
import { dateDiffrent, numOfNights } from "../../../utils/helper";
import BookingStatus from "./BookingStatus";
import Menu from "../../component/Menu";
import BookingMenuList from "./BookingMenuList";
import { useState } from "react";

function BookingRow({ booking }) {
  const { cabins, status, endDate, startDate, guests, totalPrice } = booking;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <tr className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
      <td>{cabins.name}</td>
      <td className=" text-left">
        <p className="font-semibold">{guests.fullName}</p>
        <p className=" text-sm text-gray-400">{guests.email}</p>
      </td>
      <td>
        <div className="font-semibold">
          <span> {dateDiffrent(startDate)}</span>
          {""}→<span>{numOfNights(startDate, endDate)} stay</span>
        </div>
        <div className="text-sm text-gray-500">
          {format(new Date(startDate), " MMM dd yyyy")}-
          {format(new Date(startDate), " MMM dd yyyy")}
        </div>
      </td>
      <td>
        <BookingStatus status={status} />
      </td>
      <td>${totalPrice.toLocaleString()}.00</td>
      <td className="relative">
        <Menu isOpen={isOpen} setIsOpen={setIsOpen}>
          <BookingMenuList data={booking} setIsOpen={setIsOpen} />
        </Menu>
      </td>
    </tr>
  );
}

export default BookingRow;
