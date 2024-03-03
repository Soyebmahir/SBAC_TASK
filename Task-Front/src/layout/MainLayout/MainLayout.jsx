import { Outlet } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";

// import Footer from "../../components/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="   ">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
