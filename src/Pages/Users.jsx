import UserForm from "../feature/user/UserForm";
import UserHeader from "../feature/user/UserHeader";

function Users() {
  return (
    <div className="m-auto  flex  max-w-[85rem] flex-col gap-10 p-10 text-gray-800">
      <UserHeader />
      <UserForm />
    </div>
  );
}

export default Users;
