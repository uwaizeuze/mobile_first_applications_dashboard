import { Button, Card } from "antd";
import { Link } from "react-router-dom";
const UserCard = ({ user, handleDelete }) => {
  return (
    <Card bordered={true} style={{ width: 300 }}>
      <p>{user?.name}</p>
      <p className="mb-2">{user?.email}</p>
      <div className="flex justify-between items-center">
        <Link to={`/edit/${user?.id}`}>
          <Button>Edit</Button>
        </Link>

        <Button
          onClick={() => handleDelete(user?.id)}
          className="bg-red-500 text-white"
        >
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default UserCard;
