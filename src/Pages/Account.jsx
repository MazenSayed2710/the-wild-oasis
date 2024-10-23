import AccountHeader from "../feature/Account/AccountHeader";
import UpdatePassword from "../feature/Account/UpdatePassword";
import UpdateUser from "../feature/Account/UpdateUser";

function Account() {
  return (
    <div className="m-auto grid max-w-[85rem] gap-10  p-10 text-gray-800">
      <AccountHeader />
      <UpdateUser />
      <UpdatePassword />
    </div>
  );
}

export default Account;
