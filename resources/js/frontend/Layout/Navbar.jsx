import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";

import menu from "../../../../public/data/menus.json";
import logo from "@/assets/images/Logo/gcc-logo.png";
import UserDropdown from "@/SharedComponents/UserDropdown";

const Navbar = ({ user }) => {
    const { menus } = menu;
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            {/* HEADER */}
            <div className="fixed top-0 left-0 w-full z-50">
                {/* TOP BAR */}
                <div className="hidden lg:block bg-blue-900 text-white">
                    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-12">
                        {/* LEFT */}
                        <div className="flex items-center gap-3">
                            <img src={logo} className="h-8" />
                            <span className="font-semibold">
                                GAMCA SLIP CENTRE
                            </span>
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center gap-6">
                            {/* Hotline */}
                            <div className="flex items-center gap-3">
                                <PhoneIcon className="h-5 w-5 text-green-400" />
                                <div className="leading-tight">
                                    <p className="text-xs">Hotline</p>
                                    <p className="font-semibold">01767774027</p>
                                </div>
                            </div>

                            {/* USER */}
                            <UserDropdown user={user} />
                        </div>
                    </div>
                </div>

                {/* MAIN NAVBAR */}
                <div className="bg-blue-700 text-white shadow-md">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex items-center justify-between h-14">
                            {/* MOBILE LEFT */}
                            <button
                                onClick={() => setMobileOpen(true)}
                                className="lg:hidden"
                            >
                                <Bars3Icon className="h-6 w-6" />
                            </button>

                            {/* MOBILE CENTER */}
                            <div className="lg:hidden font-semibold flex-1 text-center">
                                GAMCA SLIP CENTRE
                            </div>

                            {/* MOBILE RIGHT */}
                            <div className="flex items-center gap-3 lg:hidden">
                                {/* CALL */}
                                <a href="tel:01767774027">
                                    <PhoneIcon className="h-5 w-5 text-green-400" />
                                </a>

                                {/* USER */}
                                <UserDropdown user={user} />
                            </div>

                            {/* DESKTOP MENU */}
                            <nav className="hidden lg:flex flex-1 justify-center gap-8 font-medium">
                                {menus.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={item.path}
                                        className="hover:text-green-300 transition"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </nav>

                            <div className="hidden lg:block w-32"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SPACE */}
            <div className="h-[100px]"></div>

            {/* MOBILE DRAWER */}
            <div
                className={`fixed inset-0 z-50 transition ${
                    mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
                <div
                    onClick={() => setMobileOpen(false)}
                    className="absolute inset-0 bg-black/40"
                ></div>

                <div
                    className={`absolute left-0 top-0 w-72 h-full bg-white transition ${
                        mobileOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div className="flex justify-between p-4 border-b">
                        <span className="font-bold">Menu</span>
                        <button onClick={() => setMobileOpen(false)}>
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="p-4 space-y-3">
                        {menus.map((item) => (
                            <Link
                                key={item.id}
                                href={item.path}
                                className="block px-3 py-2 hover:bg-blue-100 rounded"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
