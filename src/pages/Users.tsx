import { UserAddModal } from "@/components/customComponents/user/UserAddModal";
import { UserCard } from "@/components/customComponents/user/UserCard";
import { useAppSelectopr } from "@/redux/hooks";

const Users = () => {
  const { users } = useAppSelectopr((state) => state.userList);
  console.log(users);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2>User List</h2>
        <UserAddModal />
      </div>
      {/* User */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
