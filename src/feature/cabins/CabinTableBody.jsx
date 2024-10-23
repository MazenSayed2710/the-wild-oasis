import CabinTableRow from "./CabinTableRow";

function CabinTableBody({ cabins }) {
  return (
    <>
      <tbody className="rounded-md">
        {cabins.map((cabin) => (
          <CabinTableRow cabin={cabin} key={cabin.id} />
        ))}
      </tbody>
    </>
  );
}

export default CabinTableBody;
