import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-40 h-screen bg-gray-800 text-white flex flex-col justify-between">
      <div className="mt-8">
        <Link to="/" className="block py-2 px-4 hover:bg-gray-700">
          User List
        </Link>
        <Link to="/add" className="block py-2 px-4 hover:bg-gray-700">
          Add User
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
