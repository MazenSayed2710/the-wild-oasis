import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { useStaysAfterDate } from "./useStaysAfterDate";
import Spinner from "../../component/Spinner";
import { useDarkContext } from "../hooks/useDarkContext";
import { useSearchParams } from "react-router-dom";

function StayDuration() {
  const { confirmedStays, isLoading } = useStaysAfterDate();
  const { isDark } = useDarkContext();
  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;

  function calcValue(firstNum, secondNum, moreThan = false) {
    let data = [];

    if (moreThan) {
      data = confirmedStays.filter((booking) => booking.numNights >= firstNum);
    } else if (!secondNum) {
      data = confirmedStays.filter((booking) => booking.numNights === firstNum);
    } else {
      data = confirmedStays.filter(
        (booking) =>
          booking.numNights >= firstNum && booking.numNights <= secondNum,
      );
    }

    return data.length;
  }

  const startDataLight = [
    {
      duration: "1 night",
      value: calcValue(1),
      color: "#ef4444",
    },
    {
      duration: "2 nights",
      value: calcValue(2),
      color: "#f97316",
    },
    {
      duration: "3 nights",
      value: calcValue(3),
      color: "#eab308",
    },
    {
      duration: "4-5 nights",
      value: calcValue(4, 5),
      color: "#84cc16",
    },
    {
      duration: "6-7 nights",
      value: calcValue(6, 7),
      color: "#22c55e",
    },
    {
      duration: "8-14 nights",
      value: calcValue(8, 14),
      color: "#14b8a6",
    },
    {
      duration: "15-21 nights",
      value: calcValue(15, 21),
      color: "#3b82f6",
    },
    {
      duration: "21+ nights",
      value: calcValue(21, 0, true),
      color: "#a855f7",
    },
  ];

  const startDataDark = [
    {
      duration: "1 night",
      value: calcValue(1),
      color: "#b91c1c",
    },
    {
      duration: "2 nights",
      value: calcValue(2),
      color: "#c2410c",
    },
    {
      duration: "3 nights",
      value: calcValue(3),
      color: "#a16207",
    },
    {
      duration: "4-5 nights",
      value: calcValue(4, 5),
      color: "#4d7c0f",
    },
    {
      duration: "6-7 nights",
      value: calcValue(6, 7),
      color: "#15803d",
    },
    {
      duration: "8-14 nights",
      value: calcValue(8, 14),
      color: "#0f766e",
    },
    {
      duration: "15-21 nights",
      value: calcValue(15, 21),
      color: "#1d4ed8",
    },
    {
      duration: "21+ nights",
      value: calcValue(21, 0, true),
      color: "#7e22ce",
    },
  ];

  return (
    <div className=" flex flex-col gap-5 bg-gray-50 p-4 dark:bg-gray-800">
      <h2 className="ml-[20px] text-xl font-bold text-gray-700 dark:text-gray-100">
        Stay duration summary
      </h2>

      {!confirmedStays.length ? (
        <h1 className="ml-[20px]">
          There are no stay duration summary at last{" "}
          {searchParams.get("last") || "7"} days
        </h1>
      ) : (
        <PieChart width={550} height={250}>
          <Pie
            data={isDark ? startDataDark : startDataLight}
            dataKey="value"
            innerRadius={70}
            outerRadius={90}
            paddingAngle={3}
            nameKey="duration"
            cy={110}
            cx={100}
          >
            {startDataLight.map((entry) => (
              <Cell
                stroke={entry.color}
                key={entry.duration}
                fill={entry.color}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            iconType="circle"
            layout="vertical"
            align="right"
            verticalAlign="middle"
          />
        </PieChart>
      )}
    </div>
  );
}

export default StayDuration;
