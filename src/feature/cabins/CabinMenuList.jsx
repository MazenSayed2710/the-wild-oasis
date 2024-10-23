import Swal from "sweetalert2";
import { HiDuplicate } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";
function CabinMenuList({ id, setIsOpen, cabin, setOpenEditList }) {
  const { deleteCabin, isDeleting } = useDeleteCabin();
  const { createcabin, isCreating } = useCreateCabin();
  const { image, name, maxCapacity, regularPrice, discount, description } =
    cabin;

  function handleDuplicated() {
    setIsOpen(false);
    createcabin({
      image,
      maxCapacity,
      regularPrice,
      discount,
      description,
      name: `copy of ${name}`,
    });
  }

  function handleDelete() {
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
        deleteCabin(id);
      }
    });
  }
  return (
    <>
      <div className="absolute right-[23px] top-[90%] z-50 flex h-fit  w-44  flex-col items-start justify-center gap-2 bg-white text-gray-600 shadow-md dark:bg-gray-800 dark:text-gray-200">
        <button
          className="flex w-full items-center  gap-3 py-2 pl-5 text-sm hover:bg-blue-50 dark:hover:bg-gray-900"
          onClick={handleDuplicated}
          disabled={isCreating}
        >
          <HiDuplicate />
          <span>Duplicate</span>
        </button>

        <button
          className="flex w-full items-center  gap-3 py-2 pl-5 text-sm hover:bg-blue-50 dark:hover:bg-gray-900"
          onClick={() => {
            setOpenEditList((state) => !state);
            setIsOpen(false);
          }}
        >
          <MdModeEdit />
          <span>Edit</span>
        </button>

        <button
          className="flex w-full items-center  gap-3 py-2 pl-5 text-sm hover:bg-blue-50 dark:hover:bg-gray-900"
          onClick={handleDelete}
          disabled={isDeleting}
        >
          <RiDeleteBin6Line />
          <span>Delete</span>
        </button>
      </div>
    </>
  );
}

export default CabinMenuList;
