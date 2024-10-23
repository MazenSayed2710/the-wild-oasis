import { useState } from "react";
import Spinner from "../../component/Spinner";
import TableHeader from "../../component/TableHeader";
import CabinTableBody from "./CabinTableBody";
import { useCabins } from "./useCabins";
import CabinForm from "./CabinForm";

function CabinTable() {
  const { cabins, isLoading } = useCabins();

  const [showAddForm, setShowAddForm] = useState(false);

  if (isLoading) return <Spinner />;

  if (cabins.length === 0) return <h1>No cabins could be found</h1>;

  return (
    <>
      <table className="w-full rounded-md border border-gray-200 dark:border-gray-700">
        <TableHeader>
          <th></th>
          <th>CABIN</th>
          <th>CAPACITY</th>
          <th>PRICE</th>
          <th>DISCOUNT</th>
        </TableHeader>
        <CabinTableBody cabins={cabins} />
      </table>
      <button
        className="w-56 rounded-md bg-violet-600 px-5 py-3 font-bold text-gray-200 dark:text-gray-200"
        onClick={() => setShowAddForm(true)}
      >
        Add cabin
      </button>
      {showAddForm && <CabinForm setOpenForm={setShowAddForm} aim="add" />}
    </>
  );
}

export default CabinTable;
