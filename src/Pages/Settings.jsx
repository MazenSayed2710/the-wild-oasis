import SettingsForm from "../feature/settings/SettingsForm";
import SettingsHeader from "../feature/settings/SettingsHeader";
function Settings() {
  return (
    <div className="m-auto  flex  max-w-[85rem] flex-col gap-10 p-10 text-gray-800">
      <SettingsHeader />
      <SettingsForm />
    </div>
  );
}

export default Settings;
