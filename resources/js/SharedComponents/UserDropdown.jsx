import React, { useState, useRef, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const UserDropdown = ({ user }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    return (
        <div className="relative" ref={ref}>
            {/* BUTTON */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg
                           hover:bg-white/15 transition"
            >
                <UserCircleIcon className="h-7 w-7 text-white" />

                <svg
                    className={`w-4 h-4 text-white transition-transform ${
                        open ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* DROPDOWN */}
            {open && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                    {/* USER INFO */}
                    <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-white border-b">
                        <p className="text-sm font-semibold text-gray-800">
                            {user?.name ?? "Guest"}
                        </p>
                        <p className="text-xs text-gray-500">
                            {user?.email ?? "Please login"}
                        </p>
                    </div>

                    {/* LOGGED IN */}
                    {user ? (
                        <>
                            <Link
                                href="/dashboard"
                                className="block px-4 py-2 text-sm text-gray-700
                                           hover:bg-blue-50 hover:text-blue-700 transition"
                            >
                                Dashboard
                            </Link>

                            <Link
                                href="/profile"
                                className="block px-4 py-2 text-sm text-gray-700
                                           hover:bg-blue-50 hover:text-blue-700 transition"
                            >
                                Profile
                            </Link>

                            <Link
                                href="/settings"
                                className="block px-4 py-2 text-sm text-gray-700
                                           hover:bg-blue-50 hover:text-blue-700 transition"
                            >
                                Settings
                            </Link>

                            <Link
                                href="/logout"
                                method="post"
                                as="button"
                                className="w-full text-left px-4 py-2 text-sm
                                           text-red-600 hover:bg-red-50 transition font-medium"
                            >
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            {/* LOGGED OUT */}
                            <Link
                                href="/login"
                                className="block px-4 py-2 text-sm font-semibold
                                           text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition"
                            >
                                Login
                            </Link>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserDropdown;
