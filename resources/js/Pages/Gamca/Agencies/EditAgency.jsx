// resources/js/Pages/Gamca/Agencies/EditAgency.jsx
import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AdminDashboardLayout from "@/backend/Dashboard/AdminDashboardLayout";

export default function EditAgency({ auth, agency }) {
    const { data, setData, put, processing, errors } = useForm({
        agency_id: agency.agency_id || "",
        agency_name: agency.agency_name || "",
        proprietor_name: agency.proprietor_name || "",
        address: agency.address || "",
    });

    const submit = (e) => {
        e.preventDefault();
        put(route("agencies.update", agency.id), {
            onSuccess: () => { /* maybe show a toast via flash */ },
        });
    };

    return (
        <AdminDashboardLayout user={auth.user} header={<h2 className="text-xl">Edit Agency</h2>}>
            <Head title="Edit Agency" />
            <div className="max-w-2xl mx-auto p-4">
                <form onSubmit={submit} className="bg-white shadow rounded p-6 grid gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Agency Code</label>
                        <input
                            type="text"
                            value={data.agency_id}
                            onChange={(e) => setData("agency_id", (e.target.value || "").toUpperCase())}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                        {errors.agency_id && <p className="text-red-600 text-sm mt-1">{errors.agency_id}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Agency Name</label>
                        <input
                            type="text"
                            value={data.agency_name}
                            onChange={(e) => setData("agency_name", (e.target.value || "").toUpperCase())}
                            className="w-full border rounded px-3 py-2"
                            required
                        />
                        {errors.agency_name && <p className="text-red-600 text-sm mt-1">{errors.agency_name}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Proprietor Name</label>
                        <input
                            type="text"
                            value={data.proprietor_name}
                            onChange={(e) => setData("proprietor_name", (e.target.value || "").toUpperCase())}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Address</label>
                        <textarea
                            value={data.address}
                            onChange={(e) => setData("address", (e.target.value || "").toUpperCase())}
                            rows={3}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>

                    <div className="flex gap-2 mt-2">
                        <button disabled={processing} className="bg-green-600 text-white px-4 py-2 rounded">
                            {processing ? "Saving..." : "Update Agency"}
                        </button>
                        <Link href={route("agencies.index")} className="bg-gray-200 px-4 py-2 rounded">
                            Back
                        </Link>
                    </div>
                </form>
            </div>
        </AdminDashboardLayout>
    );
}
