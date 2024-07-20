import { Link } from "react-router-dom";
import {
  ArrowRightEndOnRectangleIcon,
  Bars3Icon,
  HomeIcon,
  InformationCircleIcon,
  MapPinIcon,
  PhoneIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const Navbar = () => {
  const navItems = [
    { name: "Home", icon: HomeIcon },
    { name: "About", icon: InformationCircleIcon },
    { name: "Contact", icon: PhoneIcon },
    { name: "Agents", icon: UserGroupIcon },
  ];
  return (
    <nav className="h-[100px] flex justify-between items-center">
      <div className="flex items-center flex-3 gap-12">
        <Link
          to="/"
          className="font-bold text-xl flex items-center gap-2 transition-all duration-400 hover:scale-105"
        >
          <MapPinIcon className="size-6 text-current" />
          <span className="md:hidden lg:inline-block">Tu Iglesia AIEE</span>
        </Link>
        {navItems.map((item) => (
          <a
            key={item.name}
            href="/"
            className="transition-all duration-400 hover:scale-105 hidden md:block"
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="hidden md:flex md:items-center md:justify-end md:flex-2 bg-transparent h-full lg:bg-blue-200">
        <div className="flex items-center font-bold">
          <a
            href="/"
            className="py-3 px-6 my-5 transition-all duration-400 hover:scale-105"
          >
            Sign in
          </a>
          <a
            href="/"
            className="py-3 px-6 m-5 bg-[#fece51] transition-all duration-400 hover:scale-105"
          >
            Sign up
          </a>
        </div>
      </div>

      <div className="fixed bottom-7 right-10 md:hidden text-right">
        <Menu>
          <MenuButton className="inline-flex items-center rounded-md bg-black text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            <Bars3Icon className="size-8" />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="bg-black w-52 origin-top-right rounded-xl border border-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            {navItems.map((item) => (
              <MenuItem key={item.name}>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  <item.icon className="size-4 fill-white/30" />
                  {item.name}
                </button>
              </MenuItem>
            ))}

            <div className="flex flex-col">
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  <UserIcon className="size-4 fill-white/30" />
                  Sign in
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                  <ArrowRightEndOnRectangleIcon className="size-4 fill-white/30" />
                  Sign up
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
