import React from "react";
import { Link, usePage, useRemember } from "@inertiajs/react";
import { hasAnyRole, hasRole } from "../Utils/RoleCheck";

const menuClass =
    "btn btn-blue hover:bg-sky-500 hover:text-white transition duration-300";

const SidebarMenu = () => {
    const { auth } = usePage().props;

    const [dropdownState, setDropdownState] = useRemember(
        {
            generalSlipDropdown: false,
            contactDropdown: false,
            settings: false,
        },
        "sidebar-dropdown",
    );

    const toggleDropdown = (key) => {
        setDropdownState((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <div className="space-y-2">
            {/* GENERAL SLIP */}
            <button
                onClick={() => toggleDropdown("generalSlipDropdown")}
                className="bg-blue-400 font-bold btn w-full rounded hover:bg-blue-600 hover:text-white transition duration-300"
            >
                General Slip {dropdownState.generalSlipDropdown ? "▲" : "▼"}
            </button>

            {dropdownState.generalSlipDropdown && (
                <div className="flex flex-col gap-1">
                    <Link href="/gamca-slip/create" className={menuClass}>
                        Add Gamca General Slip
                    </Link>

                    <Link href="/gamca-slip" className={menuClass}>
                        Manage General Slip
                    </Link>
                </div>
            )}

            {/* REPORT */}
            <button
                onClick={() => toggleDropdown("contactDropdown")}
                className="bg-blue-400 font-bold btn w-full rounded hover:bg-blue-600 hover:text-white transition duration-300"
            >
               Contact {dropdownState.contactDropdown ? "▲" : "▼"}
            </button>

            {dropdownState.contactDropdown && (
                <div className="flex flex-col gap-1">
                    <Link href="/contacts/create" className={menuClass}>
                        Add Contact
                    </Link>
                    <Link href="/contacts" className={menuClass}>
                        Manage Contact
                    </Link>
                </div>
            )}

            {/* SETTINGS */}
            <button
                onClick={() => toggleDropdown("settings")}
                className="bg-blue-400 font-bold btn w-full rounded hover:bg-blue-600 hover:text-white transition duration-300"
            >
                Settings {dropdownState.settings ? "▲" : "▼"}
            </button>

            {dropdownState.settings && (
                <div className="flex flex-col gap-1">
                    <Link href="/users" className={menuClass}>
                        Manage User
                    </Link>

                    <Link href="/roles" className={menuClass}>
                        Manage Roles
                    </Link>

                    <Link href="/permissions" className={menuClass}>
                        Manage Permissions
                    </Link>

                    <Link href="/references" className={menuClass}>
                        Manage Reference
                    </Link>

                    <Link href="/agencies" className={menuClass}>
                        Manage Agency
                    </Link>
                </div>
            )}
        </div>
    );
};

export default SidebarMenu;
