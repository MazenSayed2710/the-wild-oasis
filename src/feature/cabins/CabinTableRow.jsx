import { useState } from "react";
import Menu from "../../component/Menu";
import CabinMenuList from "./CabinMenuList";
import CabinForm from "./CabinForm";

function CabinTableRow({ cabin }) {
  const { image, name, maxCapacity, regularPrice, discount, id } = cabin;
  const [isOpen, setIsOpen] = useState(false);
  const [openEditList, setOpenEditList] = useState(false);
  return (
    <tr className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
      <td className="w-[130px] p-0">
        <img
          src={image}
          width={100}
          height={70}
          alt="cabin img"
          className=" h-[66px] object-cover"
        />
      </td>
      <td className="font-semibold">{name}</td>
      <td>
        <div>
          <span>Fits up to {maxCapacity} guests </span>
        </div>
      </td>
      <td className=" font-semibold">${regularPrice}.00</td>
      {discount ? <td>${discount}.00</td> : <td>&mdash; </td>}
      <td className="relative">
        {" "}
        <Menu isOpen={isOpen} setIsOpen={setIsOpen}>
          <CabinMenuList
            setIsOpen={setIsOpen}
            id={id}
            cabin={cabin}
            setOpenEditList={setOpenEditList}
          />
        </Menu>
      </td>
      {openEditList && (
        <CabinForm setOpenForm={setOpenEditList} cabin={cabin} aim="edit" />
      )}
    </tr>
  );
}

export default CabinTableRow;
