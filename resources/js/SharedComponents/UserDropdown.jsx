import React, { useState, useRef, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const UserDropdown = ({ user }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    // close outside click
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
                className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-white/10 transition"
            >
                {/* Icon */}
                <UserCircleIcon className="h-7 w-7 text-white" />
                
                {/* Dropdown Arrow */}
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
                <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-lg border overflow-hidden z-50">
                    {/* USER INFO */}
                    <div className="px-4 py-3 bg-gray-50 border-b">
                        <p className="text-sm font-semibold">
                            {user?.name ?? "Guest"}
                        </p>
                        <p className="text-xs text-gray-500">
                            {user?.email ?? "Please login"}
                        </p>
                    </div>

                    {/* ========================= */}
                    {/* CONDITIONAL MENU RULE */}
                    {/* ========================= */}

                    {user ? (
                        <>
                            {/* LOGGED IN MENU */}
                            <Link
                                href="/dashboard"
                                className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                                Dashboard
                            </Link>

                            <Link
                                href="/profile"
                                className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                                Profile
                            </Link>

                            <Link
                                href="/settings"
                                className="block px-4 py-2 text-sm hover:bg-gray-100"
                            >
                                Settings
                            </Link>

                            <Link
                                href="/logout"
                                method="post"
                                as="button"
                                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                            >
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            {/* LOGGED OUT MENU → ONLY LOGIN */}
                            <Link
                                href="/login"
                                className="block px-4 py-2 text-sm hover:bg-gray-100 text-blue-600 font-medium"
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
