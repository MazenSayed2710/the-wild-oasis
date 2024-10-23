import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useBookingsAfterDate } from "./useBookingsAfterDate";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../component/Spinner";
import { useDarkContext } from "../hooks/useDarkContext";

function Sales() {
  const { bookings, isLoading } = useBookingsAfterDate();
  const { isDark } = useDarkContext();
  const [searchParams] = useSearchParams();

  const last = searchParams.get("last") || 7;

  if (isLoading) return <Spinner />;

  const allDays = eachDayOfInterval({
    start: subDays(new Date(), last - 1),
    end: new Date(),
  });

  const data = allDays.map((day) => ({
    label: format(day, "MMM d yyyy"),
    totalSales: bookings
      .filter((booking) => isSameDay(booking.created_at, day))
      .reduce((acc, cur) => cur.totalPrice + acc, 0),
    extrasSales: bookings
      .filter((booking) => isSameDay(booking.created_at, day))
      .reduce((acc, cur) => cur.extrasPrice + acc, 0),
  }));

  return (
    <div
      className=" flex flex-col gap-5 bg-gray-50 p-4 dark:bg-gray-800"
      style={{ gridColumn: "1 / 3" }}
    >
      <h2 className="ml-[20px] text-xl font-bold text-gray-700 dark:text-gray-100">
        Sales from {format(subDays(new Date(), last), "MMM d yyyy")} —{" "}
        {format(new Date(), "MMM d yyyy")}
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={isDark ? { fill: "white" } : { fill: "black" }}
          />
          <YAxis
            unit="$"
            tick={isDark ? { fill: "white" } : { fill: "black" }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="totalSales"
            fill={isDark ? "#4c1d95" : "#a78bfa"}
            stroke={isDark ? "#3730a3" : "#4338ca"}
            strokeWidth={2}
          />
          <CartesianGrid strokeDasharray="3 3" stroke="#6b7280" />
          <Area
            type="monotone"
            dataKey="extrasSales"
            stroke="#16a34a"
            fill={isDark ? "#14532d" : "#bbf7d0"}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Sales;
