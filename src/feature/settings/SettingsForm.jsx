import Spinner from "../../component/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSettings } from "./useUpdateSettings";

function SettingsForm() {
  const { settings, isLoading } = useSettings();
  const { updatesettings, isUpdating } = useUpdateSettings();

  if (isLoading) return <Spinner />;
  const {
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    breakfastPrice,
  } = settings;
  const handelUpdate = (e, field) => {
    if (!e.target.value) return;
    updatesettings({ [field]: e.target.value });
  };
  return (
    <form className="flex flex-col gap-2 bg-gray-50 p-5 dark:bg-gray-800">
      <div
        className="grid border-b border-gray-200 p-3 dark:border-gray-700"
        style={{ gridTemplateColumns: "24rem 25rem" }}
      >
        <label
          htmlFor="name"
          className=" font-semibold text-gray-700 dark:text-gray-100"
        >
          Minimum nights/booking
        </label>
        <input
          className="custom-input dark:border-gray-500  dark:bg-gray-800 dark:text-gray-100"
          type="number"
          defaultValue={minBookingLength}
          onBlur={(e) => handelUpdate(e, "minBookingLength")}
          disabled={isUpdating}
        />
      </div>

      <div
        className="grid border-b border-gray-200 p-3 dark:border-gray-700"
        style={{ gridTemplateColumns: "24rem 25rem" }}
      >
        <label
          htmlFor="name"
          className=" font-semibold text-gray-700 dark:text-gray-100"
        >
          Maximum nights/booking
        </label>
        <input
          className="custom-input dark:border-gray-500 dark:bg-gray-800 dark:text-gray-100"
          type="number"
          defaultValue={maxBookingLength}
          onBlur={(e) => updatesettings({ maxBookingLength: e.target.value })}
          disabled={isUpdating}
        />
      </div>

      <div
        className="grid border-b border-gray-200 p-3 dark:border-gray-700"
        style={{ gridTemplateColumns: "24rem 25rem" }}
      >
        <label
          htmlFor="name"
          className=" font-semibold text-gray-700 dark:text-gray-100"
        >
          Maximum guests/booking
        </label>
        <input
          className="custom-input dark:border-gray-500 dark:bg-gray-800 dark:text-gray-100"
          type="number"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) =>
            updatesettings({ maxGuestsPerBooking: e.target.value })
          }
          disabled={isUpdating}
        />
      </div>

      <div className="grid  p-3" style={{ gridTemplateColumns: "24rem 25rem" }}>
        <label
          htmlFor="name"
          className=" font-semibold text-gray-700 dark:text-gray-100"
        >
          Breakfast price
        </label>
        <input
          className="custom-input dark:border-gray-500 dark:bg-gray-800 dark:text-gray-100"
          type="number"
          defaultValue={breakfastPrice}
          onBlur={(e) => updatesettings({ breakfastPrice: e.target.value })}
          disabled={isUpdating}
        />
      </div>
    </form>
  );
}

export default SettingsForm;
