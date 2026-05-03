import React from "react";
import { Link } from "@inertiajs/react";
import logo from "@/assets/images/Logo/mch-logo.png";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
    return (
        <aside className="w-64 min-w-[256px] flex-shrink-0 min-h-screen bg-gray-300 p-3 border-r">
            {/* Logo */}
            <div className="mb-4">
                <Link href="/dashboard">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-14 object-contain mx-auto"
                    />
                </Link>
            </div>

            {/* Dashboard */}
            <Link
                href="/dashboard"
                className="block w-full px-4 py-3 mb-2 rounded-lg bg-white hover:bg-blue-500 hover:text-white font-medium transition"
            >
                Dashboard
            </Link>

            {/* Menu */}
            <SidebarMenu />
        </aside>
    );
};

export default Sidebar;
