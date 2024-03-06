import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center">
      <Link to="/" className="block py-2 px-4 hover:bg-gray-700">
        <h1 className="text-white  text-2xl font-bold">Home</h1>
      </Link>

      <h1 className="text-white text-2xl font-bold">Mobile First Dashboard</h1>
    </div>
  );
};

export default Header;
