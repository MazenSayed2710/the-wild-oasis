import { useEffect } from "react";
import Spinner from "../component/Spinner";
import { useCabins } from "../feature/cabins/useCabins";
import HomeBody from "../feature/Home/HomeBody";
import HomeHeader from "../feature/Home/HomeHeader";
import HomeStatstic from "../feature/Home/HomeStatstic";
import { useBookingsAfterDate } from "../feature/Home/useBookingsAfterDate";
import { useStaysAfterDate } from "../feature/Home/useStaysAfterDate";
import { updateBookingDate } from "../../utils/helper";

function Home() {
  const { isLoading: isLoading1 } = useBookingsAfterDate();
  const { isLoading: isLoading2 } = useStaysAfterDate();
  const { isLoading: isLoading3 } = useCabins();

  useEffect(() => {
    const dayInMilliseconds = 24 * 60 * 60 * 1000;
    const interval = setInterval(() => {
      updateBookingDate(723, "startDate", dayInMilliseconds);
      updateBookingDate(724, "endDate", dayInMilliseconds);
      updateBookingDate(741, "startDate", dayInMilliseconds);
    });
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="m-auto grid max-w-[85rem] gap-10  p-10 text-gray-800">
      <HomeHeader />
      {isLoading1 || isLoading2 || isLoading3 ? (
        <Spinner />
      ) : (
        <>
          <HomeStatstic />
          <HomeBody />
        </>
      )}
    </div>
  );
}

export default Home;
