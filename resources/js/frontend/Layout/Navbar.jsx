import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/solid";
import menu from "../../../../public/data/menus.json";
// import logo from "@/assets/images/Logo/mch-logo.png";
import logo from "@/assets/images/Logo/gcc-logo.png";
import UserDropdown from "@/SharedComponents/UserDropdown";

const Navbar = ({ user }) => {
    const { menus } = menu;
    const [openMenu, setOpenMenu] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-blue-700 shadow-md">
            <div className="max-w-7xl mx-auto px-4 lg:px-6">
                <div className="navbar text-white">
                    {/* LEFT */}
                    <div className="navbar-start gap-2">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2 rounded-md hover:bg-blue-800 transition"
                        >
                            <Bars3Icon className="h-6 w-6" />
                        </button>

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <img src={logo} className="h-10 lg:h-12" />
                            <span className="hidden sm:block text-lg font-semibold tracking-wide">
                                GAMCA SLIP CENTRE
                            </span>
                        </Link>
                    </div>

                    {/* CENTER MENU (Desktop) */}
                    <nav className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal gap-2 font-medium">
                            {menus.map((menu) => (
                                <li
                                    key={menu.id}
                                    className="relative"
                                    onMouseEnter={() => setOpenMenu(menu.id)}
                                    onMouseLeave={() => setOpenMenu(null)}
                                >
                                    <Link
                                        href={menu.path}
                                        className="px-3 py-2 text-lg rounded-md hover:bg-green-600 transition tracking-wide"
                                    >
                                        {menu.title}
                                    </Link>

                                    {/* Dropdown */}
                                    {menu?.dropdown?.length > 0 &&
                                        openMenu === menu.id && (
                                            <ul className="absolute top-full left-0 mt-2 w-52 bg-indigo-500 text-gray-700 rounded-xl shadow-lg p-2 z-50">
                                                {menu.dropdown.map((item) => (
                                                    <li key={item.id}>
                                                        <Link
                                                            href={item.path}
                                                            className="block px-3 py-2 rounded hover:bg-gray-100 transition"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* MOBILE HOTLINE CENTER */}
                    <div className="lg:hidden absolute left-1/2 -translate-x-1/2 text-center leading-tight">
                        <a href="tel:01812894971" className="group">
                            <div className="text-[12px] text-white tracking-wide">
                                Hotline
                            </div>
                            <div className="text-md font-semibold group-hover:underline">
                                01812894971
                            </div>
                        </a>
                    </div>

                    {/* RIGHT */}
                    <div className="navbar-end items-center gap-3">
                        {/* Desktop Hotline (Professional CTA) */}
                        <a
                            href="tel:01812894971"
                            className="hidden lg:flex items-center gap-2 px-4 py-2 transition group"
                        >
                            <PhoneIcon className="h-8 w-8 text-white" />

                            <div className="flex flex-col leading-tight">
                                <span className="text-lg text-white tracking-wide">
                                    Hotline
                                </span>
                                <span className="text-lg font-semibold tracking-wide">
                                    01812894971
                                </span>
                            </div>
                        </a>

                        {/* User Dropdown */}
                        <UserDropdown user={user} />
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            {mobileOpen && (
                <div className="lg:hidden bg-indigo-100 text-gray-800 shadow-md border-t">
                    <ul className="p-4 space-y-2 font-medium">
                        {menus.map((menu) => (
                            <li key={menu.id}>
                                <Link
                                    href={menu.path}
                                    className="block px-3 py-2 rounded hover:bg-red-400"
                                >
                                    {menu.title}
                                </Link>

                                {menu?.dropdown?.length > 0 && (
                                    <ul className="pl-4 mt-1 space-y-1">
                                        {menu.dropdown.map((item) => (
                                            <li key={item.id}>
                                                <Link
                                                    href={item.path}
                                                    className="block px-2 py-1 text-sm hover:text-blue-600"
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
