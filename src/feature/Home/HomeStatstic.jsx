import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import StatsticBox from "./StatsticBox";
import { useBookingsAfterDate } from "./useBookingsAfterDate";
import Spinner from "../../component/Spinner";
import { useStaysAfterDate } from "./useStaysAfterDate";
import { useCabins } from "../cabins/useCabins";

function HomeStatstic() {
  const { bookings, isLoading: isLoading1, lastDays } = useBookingsAfterDate();
  const { confirmedStays, isLoading: isLoading2 } = useStaysAfterDate();
  const { cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  const sales = bookings?.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const chickInNights = confirmedStays.reduce(
    (acc, cur) => acc + cur.numNights,
    0,
  );
  const occupancyRate =
    Math.round((chickInNights / (cabins.length * lastDays)) * 100) + "%";
  return (
    <div
      className=" grid items-center  gap-4"
      style={{ gridTemplateColumns: "25% 25% 25% 25%" }}
    >
      <StatsticBox
        text="booking"
        num={bookings?.length}
        color={{ text: "#1e40af", bg: "#bfdbfe" }}
      >
        <HiOutlineBriefcase />
      </StatsticBox>

      <StatsticBox
        text="sales"
        num={`$${sales?.toLocaleString()}`}
        color={{ text: "#166534", bg: "#bbf7d0" }}
      >
        <HiOutlineBanknotes />
      </StatsticBox>

      <StatsticBox
        text="chick ins"
        num={confirmedStays?.length}
        color={{ text: "#3730a3", bg: "#ddd6fe" }}
      >
        <HiOutlineCalendarDays />
      </StatsticBox>

      <StatsticBox
        text="occupancy rate"
        num={occupancyRate}
        color={{ text: "#854d0e", bg: "#fef08a" }}
      >
        <HiOutlineChartBar />
      </StatsticBox>
    </div>
  );
}

export default HomeStatstic;
