import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const Layout = () => {
  return (
    <div className="h-screen sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1280px] xl:max-w-[1366px] mx-auto px-5 flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="h-outlet">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout