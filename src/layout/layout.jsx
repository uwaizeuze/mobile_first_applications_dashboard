import Header from "../components/header";
import Sidebar from "../components/sidebar";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
