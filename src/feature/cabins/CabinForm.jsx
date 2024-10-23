import { useOutside } from "../hooks/useOutside";
import { useForm } from "react-hook-form";
import { useEditCabin } from "./useEditCabin";
import { useCreateCabin } from "./useCreateCabin";

const inputStyle =
  "w-68 rounded-md border border-gray-500 p-2 dark:bg-gray-800";

const lableStyle = "font-semibold text-gray-800 dark:text-gray-100";

function CabinForm({ setOpenForm, cabin = {}, aim }) {
  const ref = useOutside(() => setOpenForm(false));
  const { name, maxCapacity, regularPrice, discount, id, description } = cabin;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { editCabin, isEditing } = useEditCabin();
  const { createcabin, isCreating } = useCreateCabin();
  function handleSubmitting(data, id) {
    aim === "edit" ? editCabin({ ...data, id }) : createcabin(data);
    setOpenForm(false);
  }
  return (
    <div className="fixed left-0 top-0 z-[1]  flex h-full w-full items-center justify-center bg-transparent backdrop-blur-sm ">
      <form
        onSubmit={handleSubmit((data) => {
          handleSubmitting(data, id);
        })}
        className="flex w-[40%] flex-col gap-6 rounded-md bg-white p-10 shadow-custom dark:bg-gray-800 "
        ref={ref}
      >
        <div className="cabin-input  dark:border-gray-700">
          <label htmlFor="name" className={lableStyle}>
            Cabin name
          </label>
          <input
            type="text"
            id="name"
            defaultValue={name || ""}
            className={inputStyle}
            {...register("name", { required: "This feild is requierd" })}
          />
          <p className="ml-10 text-red-800">{errors?.name?.message}</p>
        </div>

        <div className="cabin-input dark:border-gray-700">
          <label htmlFor="capacity" className={lableStyle}>
            Maximum capacity
          </label>
          <input
            type="number"
            id="capacity"
            defaultValue={maxCapacity}
            {...register("maxCapacity", { required: "This field is requierd" })}
            className={inputStyle}
          />
          <p className="ml-10 text-red-800">{errors?.maxCapacity?.message}</p>
        </div>

        <div className="cabin-input dark:border-gray-700">
          <label htmlFor="price" className={lableStyle}>
            Regular price
          </label>
          <input
            type="number"
            id="price"
            defaultValue={regularPrice}
            className={inputStyle}
            {...register("regularPrice", {
              required: "This field is requierd",
            })}
          />
          <p className="ml-10 text-red-800">{errors?.regularPrice?.message}</p>
        </div>

        <div className="cabin-input dark:border-gray-700">
          <label htmlFor="discount" className={lableStyle}>
            Discount
          </label>
          <input
            type="number"
            id="discount"
            defaultValue={discount}
            className={inputStyle}
            {...register("discount", {
              required: "This field is requierd",
            })}
          />
          <p className="ml-10 text-red-800">{errors?.discount?.message}</p>
        </div>

        <div className="cabin-input dark:border-gray-700">
          <label htmlFor="description" className={lableStyle}>
            Description for website
          </label>
          <textarea
            id="description"
            defaultValue={description}
            className={inputStyle}
            {...register("description", {
              required: "This field is requierd",
            })}
          />
          <p className="ml-10 text-red-800">{errors?.description?.message}</p>
        </div>

        <div className="cabin-input dark:border-gray-700">
          <label htmlFor="photo" className={lableStyle}>
            Cabin photo
          </label>
          <input
            type="file"
            id="photo"
            className=" w-68 rounded-md p-2"
            {...register("image", { required: "This field is requierd" })}
          />
          <p className="ml-10 text-red-800">{errors?.image?.message}</p>
        </div>
        <div className="flex justify-end gap-5">
          <button
            className="rounded-md border border-gray-300 px-5 py-3"
            onClick={() => setOpenForm(false)}
          >
            Cancel
          </button>
          <button
            className=" rounded-md bg-violet-600 px-5 py-3 font-bold text-gray-200 dark:text-gray-200"
            disabled={isEditing || isCreating}
          >
            {aim === "edit" ? "Edit" : "Add"} cabin
          </button>
        </div>
      </form>
    </div>
  );
}

export default CabinForm;
