import { UserAddModal } from "@/components/customComponents/user/UserAddModal";

const Users = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2>User List</h2>
        <UserAddModal />
      </div>
    </div>
  );
};

export default Users;
