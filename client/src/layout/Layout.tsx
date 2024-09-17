import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";


const Layout = () => {
  const { pathname} = useLocation();
  const isHomePage = pathname === "/";
  const isLoginPage = pathname === "/login";
  const isSpecialPage = ["/", "/iglesias", "/perfil", "/login", "/register", "/nueva-iglesia"].includes(pathname);
  
  return (
    <div className={`container mx-auto px-5 pb-5 md:pb-0 flex flex-col ${isHomePage ? "h-screen" : ""}`}>
      <Navbar />
      <div className={isSpecialPage ? "lg:h-outlet" : ""}>
        <div className={`h-full flex flex-col ${isLoginPage ? "md:flex-row" : "lg:flex-row"} gap-6 lg:gap-0`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};


export default Layout
