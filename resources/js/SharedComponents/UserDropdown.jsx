import { Link } from "@inertiajs/react";
import React, { useState, useRef, useEffect } from "react";
import avatar from "@/assets/images/avatar.jpg";

const UserDropdown = ({ user }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Avatar Button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center focus:outline-none"
            >
                <img
                    src={avatar}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white shadow hover:scale-105 transition"
                />
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg border text-gray-700 z-50 overflow-hidden animate-fadeIn">
                    {/* User Info */}
                    {user && (
                        <div className="px-4 py-3 border-b bg-gray-50">
                            <p className="text-sm font-semibold">{user.name}</p>
                            <p className="text-xs text-gray-500">
                                {user.email}
                            </p>
                        </div>
                    )}

                    {/* Menu */}
                    <ul className="py-2 text-sm">
                        {user ? (
                            <>
                                <li>
                                    <Link
                                        href={route("dashboard")}
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        📊 Dashboard
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href={route("profile.edit")}
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        👤 Profile
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href={route("register")}
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        ➕ Register
                                    </Link>
                                </li>

                                <li className="border-t my-1"></li>

                                <li>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                        className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                                    >
                                        🚪 Logout
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link
                                    href={route("login")}
                                    className="block px-4 py-2 hover:bg-gray-100"
                                >
                                    🔐 Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;
