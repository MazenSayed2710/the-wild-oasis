import Sales from "./Sales";
import StayDuration from "./StayDuration";
import TodayActivity from "./TodayActivity";

function HomeBody() {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "50% 50%", gap: "30px" }}
    >
      <TodayActivity />
      <StayDuration />
      <Sales />
    </div>
  );
}

export default HomeBody;
