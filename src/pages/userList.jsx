import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import UserCard from "../components/userCard";
import { message, Pagination } from "antd";

function UserList() {
  const { users, getUsers, deleteUser } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      message.success("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      message.error("Failed to delete user");
    }
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mx-9">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {users
          ?.slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map((user) => (
            <div key={user.id}>
              <UserCard
                user={user}
                handleDelete={() => handleDelete(user.id)}
              />
            </div>
          ))}
      </div>
      <div className="mt-4 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={users?.length}
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
}

export default UserList;
