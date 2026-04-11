import React from "react";
import { Head, useForm } from "@inertiajs/react";
import AdminDashboardLayout from "@/backend/Dashboard/AdminDashboardLayout";

const CreateAgency = ({ auth }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        agency_id: "",
        agency_name: "",
        proprietor_name: "",
        address: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("agencies.store"));
    };

    return (
        <AdminDashboardLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold">
                    Agency Setup
                </h2>
            }
        >
            <Head title=" Agency Setup" />
            <div className="max-w-2xl mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4 text-blue-600">
                    Agency Setup
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-4 bg-white p-5 rounded shadow"
                >
                    {/* Agency Code */}
                    <div>
                        <label className="font-semibold">Agency Code</label>
                        <input
                            type="text"
                            name="agency_id"
                            value={data.agency_id.toUpperCase()}
                            onChange={(e) => setData("agency_id", e.target.value.toUpperCase())}
                            className="w-full border rounded p-2 mt-1"
                            placeholder="Enter Agency Code"
                        />
                        {errors.agency_id && (
                            <small className="text-red-500">
                                {errors.agency_id}
                            </small>
                        )}
                    </div>

                    {/* Agency Name */}
                    <div>
                        <label className="font-semibold">Agency Name</label>
                        <input
                            type="text"
                            name="agency_name"
                            value={data.agency_name.toUpperCase()}
                            onChange={(e) => setData("agency_name", e.target.value.toUpperCase())}
                            className="w-full border rounded p-2 mt-1"
                            placeholder="Enter Agency Name"
                        />
                        {errors.agency_name && (
                            <small className="text-red-500">
                                {errors.agency_name}
                            </small>
                        )}
                    </div>

                    {/* Proprietor Name */}
                    <div>
                        <label className="font-semibold">Proprietor Name</label>
                        <input
                            type="text"
                            name="proprietor_name"
                            value={data.proprietor_name.toUpperCase()}
                            onChange={(e) =>
                                setData("proprietor_name", e.target.value.toUpperCase())
                            }
                            className="w-full border rounded p-2 mt-1"
                            placeholder="Enter Proprietor Name"
                        />
                        {errors.proprietor_name && (
                            <small className="text-red-500">
                                {errors.proprietor_name}
                            </small>
                        )}
                    </div>

                    {/* Address */}
                    <div>
                        <label className="font-semibold">Address</label>
                        <textarea
                            name="address"
                            value={data.address.toUpperCase()}
                            onChange={(e) => setData("address", e.target.value.toUpperCase())}
                            className="w-full border rounded p-2 mt-1"
                            placeholder="Enter Address"
                            rows="3"
                        />
                        {errors.address && (
                            <small className="text-red-500">{errors.address}</small>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-bold disabled:opacity-50"
                    >
                        {processing ? "Saving..." : "Save Agency"}
                    </button>
                </form>
            </div>
        </AdminDashboardLayout>
    );
};

export default CreateAgency;
