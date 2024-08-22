import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useUserStore } from "../stores/auth.store";

const Layout = () => {
  const location = useLocation()
  return (
    <div className={`${location.pathname === "/" ? "h-screen" : "" } container mx-auto px-5 pb-5 md:pb-0 flex flex-col `}>
      <Navbar />
      <div className={location.pathname === "/"  || location.pathname === "/iglesias" || location.pathname === "/perfil" || location.pathname === "/login" || location.pathname === "/register"? "h-outlet" : " "}>
        <div className={`h-full flex flex-col ${location.pathname === "/login" ? "md:flex-row" : "lg:flex-row"} gap-5 lg:gap-0`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};


export default Layout
