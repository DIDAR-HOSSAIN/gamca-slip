import React, { useState, useEffect, useRef } from "react";
import { Link, Head, usePage, router } from "@inertiajs/react";
import Swal from "sweetalert2";
import { CSVLink } from "react-csv";
import { useReactToPrint } from "react-to-print";
import AdminDashboardLayout from "@/backend/Dashboard/AdminDashboardLayout";

const ViewAgency = ({ auth, agencies = [] }) => {
    const { flash } = usePage().props;

    const [searchTerm, setSearchTerm] = useState("");
    const [perPage, setPerPage] = useState(30);
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredData, setFilteredData] = useState([]);

    const printRef = useRef();

    // Flash message
    useEffect(() => {
        if (flash?.success) {
            Swal.fire({
                icon: "success",
                title: flash.success,
                timer: 1500,
                showConfirmButton: false,
            });
        }
    }, [flash]);

    // Search Filter
    useEffect(() => {
        let data = agencies;

        if (searchTerm.trim() !== "") {
            const lower = searchTerm.toLowerCase();

            data = data.filter((item) => {
                const name = item.agency_name?.toLowerCase() || "";
                const code = item.agency_id?.toLowerCase() || "";
                const owner = item.proprietor_name?.toLowerCase() || "";
                const address = item.address?.toLowerCase() || "";

                return (
                    name.includes(lower) ||
                    code.includes(lower) ||
                    owner.includes(lower) ||
                    address.includes(lower)
                );
            });
        }

        setFilteredData(data);
        setCurrentPage(1);
    }, [searchTerm, agencies]);

    // Pagination
    const totalPages = Math.ceil(filteredData.length / perPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
    );

    // Delete
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This record will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/agencies/${id}`);
            }
        });
    };

    // Print
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle: "Agency List",
    });

    const formatDate = (date) =>
        new Date(date).toLocaleDateString("en-GB");

    return (
        <AdminDashboardLayout
            user={auth.user}
            header={<h1 className="font-semibold text-xl">Manage Agency</h1>}
        >
            <Head title="Manage Agency" />

            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8">

                {/* Filters */}
                <div className="bg-white shadow-sm rounded-lg p-4 mb-4">

                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">

                        {/* Left Side Inputs */}
                        <div className="flex flex-col sm:flex-row sm:items-end gap-4">

                            {/* Search Box */}
                            <div className="flex flex-col">
                                <label className="text-sm font-medium mb-1">Search</label>
                                <input
                                    type="text"
                                    placeholder="Search Agency / Owner / Code"
                                    className="border rounded-lg px-3 py-2 w-60 text-sm"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            {/* Per Page */}
                            <div className="flex flex-col">
                                <label className="text-sm font-medium mb-1">Per Page</label>
                                <select
                                    value={perPage}
                                    onChange={(e) =>
                                        setPerPage(
                                            e.target.value === "all"
                                                ? filteredData.length
                                                : parseInt(e.target.value)
                                        )
                                    }
                                    className="border rounded-lg px-3 py-2 text-sm w-28"
                                >
                                    <option value={30}>30</option>
                                    <option value={50}>50</option>
                                    <option value={100}>100</option>
                                    <option value="all">All</option>
                                </select>
                            </div>

                        </div>

                        {/* Buttons Right Side */}
                        <div className="flex flex-wrap gap-2 sm:justify-end">

                            <Link
                                href="/agencies/create"
                                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700"
                            >
                                + Add New
                            </Link>

                            <CSVLink
                                data={filteredData}
                                filename="agencies.csv"
                                className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700"
                            >
                                Export CSV
                            </CSVLink>

                            <button
                                onClick={handlePrint}
                                className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700"
                            >
                                Print
                            </button>

                        </div>

                    </div>
                </div>


                {/* Table */}
                <div
                    ref={printRef}
                    className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-100"
                >
                    <table className="min-w-full text-sm text-left text-gray-700 border-collapse">
                        <thead className="bg-gray-100 text-gray-800">
                            <tr>
                                <th className="px-3 py-2">#</th>
                                <th className="px-3 py-2">Agency Code</th>
                                <th className="px-3 py-2">Agency Name</th>
                                <th className="px-3 py-2">Proprietor</th>
                                <th className="px-3 py-2">Address</th>
                                <th className="px-3 py-2">User</th>
                                <th className="px-3 py-2">Created</th>
                                <th className="px-3 py-2">Updated</th>
                                <th className="px-3 py-2 text-center print:hidden">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {paginatedData.length ? (
                                paginatedData.map((a, i) => (
                                    <tr key={a.id} className="hover:bg-gray-50 border-b">
                                        <td className="px-3 py-2">{(currentPage - 1) * perPage + i + 1}</td>
                                        <td className="px-3 py-2 font-medium">{a.agency_id}</td>
                                        <td className="px-3 py-2">{a.agency_name}</td>
                                        <td className="px-3 py-2">{a.proprietor_name}</td>
                                        <td className="px-3 py-2">{a.address}</td>
                                        <td className="px-3 py-2">{a.user_name}</td>
                                        <td className="px-3 py-2">{formatDate(a.created_at)}</td>
                                        <td className="px-3 py-2">{formatDate(a.updated_at)}</td>

                                        <td className="px-3 py-2 text-center space-x-1 print:hidden">
                                            <Link
                                                href={`/agencies/${a.id}/edit`}
                                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded text-xs"
                                            >
                                                Edit
                                            </Link>

                                            <button
                                                onClick={() => handleDelete(a.id)}
                                                className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="9" className="text-center text-gray-500 py-4">
                                        No records found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-4 gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                            (page) => (
                                <button
                                    key={page}
                                    className={`px-3 py-1 border rounded ${page === currentPage
                                            ? "bg-blue-500 text-white"
                                            : "bg-white"
                                        }`}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </button>
                            )
                        )}
                    </div>
                )}
            </div>
        </AdminDashboardLayout>
    );
};

export default ViewAgency;
