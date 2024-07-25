import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  const location = useLocation()
  return (
    <div className={`${location.pathname === "/" ? "h-screen" : "" } container mx-auto px-5 pb-5 md:pb-0 flex flex-col `}>
      <Navbar />
      <div className={location.pathname === "/"  || location.pathname === "/iglesias" ? "xl:h-outlet" : " "}>
        <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
