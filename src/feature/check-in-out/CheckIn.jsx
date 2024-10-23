import DetailsBox from "../Bookings/DetailsBox";
import Spinner from "../../component/Spinner";
import { useBooking } from "../Bookings/useBooking";
import { useParams } from "react-router-dom";
import CheckBoxButtons from "./CheckBoxButtons";
import CheckHeader from "./CheckHeader";
function CheckIn() {
  const { bookingId } = useParams();
  const { data, isLoading } = useBooking(bookingId);

  if (isLoading) return <Spinner />;

  return (
    <div className="m-auto flex max-w-[70rem] flex-col gap-10 p-8 text-gray-800">
      <CheckHeader />

      <DetailsBox data={data} />

      <CheckBoxButtons data={data} />
    </div>
  );
}

export default CheckIn;
