import { Outlet } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";

// import Footer from "../../components/Footer";

const MainLayout = () => {
  return (
    <div className="px-10">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
