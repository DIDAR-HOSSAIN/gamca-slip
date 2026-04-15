import React from "react";
import { useForm } from "@inertiajs/react";

const CreateGamcaSlip = () => {
    const { data, setData, post, processing, errors } = useForm({
        country: "Bangladesh",
        city: "",
        travel_country: "",
        first_name: "",
        last_name: "",
        dob: "",
        nationality: "",
        gender: "",
        marital_status: "",
        passport_number: "",
        confirm_passport: "",
        passport_issue_date: "",
        passport_issue_place: "Dhaka",
        passport_expiry_date: "",
        visa_type: "",
        email: "",
        phone: "",
        nid: "",
        position_applied: "",
        passport_image: null,
    });
console.log('gamca slip', data);
    const submit = (e) => {
        e.preventDefault();

        post(route("gamca-slip.store"), {
            forceFormData: true,
        });
    };

    return (
        <section className="py-12">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-6">
                <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
                    Book Medical Appointment
                </h2>

                <form onSubmit={submit} className="grid md:grid-cols-3 gap-5">
                    {/* COUNTRY */}
                    <div>
                        <label>Country</label>
                        <input
                            value={data.country}
                            onChange={(e) => setData("country", e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* CITY */}
                    <div>
                        <label>City</label>
                        <select
                            value={data.city}
                            onChange={(e) => setData("city", e.target.value)}
                            className="input input-bordered w-full"
                        >
                            <option value="" disabled>
                                Select City
                            </option>
                            <option>Dhaka</option>
                            <option>Chittagong</option>
                        </select>
                        {errors.city && (
                            <p className="text-red-500 text-sm">
                                {errors.city}
                            </p>
                        )}
                    </div>

                    {/* TRAVEL COUNTRY */}
                    <div>
                        <label>Travel Country</label>
                        <select
                            value={data.travel_country}
                            onChange={(e) =>
                                setData("travel_country", e.target.value)
                            }
                            className="input input-bordered w-full"
                        >
                            <option value="" disabled>
                                Select Country
                            </option>
                            <option>Saudi Arabia</option>
                            <option>UAE</option>
                        </select>
                    </div>

                    {/* NAME */}
                    <div>
                        <label>First Name</label>
                        <input
                            value={data.first_name}
                            onChange={(e) =>
                                setData("first_name", e.target.value)
                            }
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label>Last Name</label>
                        <input
                            value={data.last_name}
                            onChange={(e) =>
                                setData("last_name", e.target.value)
                            }
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* DOB */}
                    <div>
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            value={data.dob}
                            onChange={(e) => setData("dob", e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* NATIONALITY */}
                    <div>
                        <label>Nationality</label>
                        <input
                            value={data.nationality}
                            onChange={(e) =>
                                setData("nationality", e.target.value)
                            }
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* GENDER */}
                    <div>
                        <label>Gender</label>
                        <select
                            value={data.gender}
                            onChange={(e) => setData("gender", e.target.value)}
                            className="input input-bordered w-full"
                        >
                            <option value="">Select</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>

                    {/* MARITAL */}
                    <div>
                        <label>Marital Status</label>
                        <select
                            value={data.marital_status}
                            onChange={(e) =>
                                setData("marital_status", e.target.value)
                            }
                            className="input input-bordered w-full"
                        >
                            <option value="">Select</option>
                            <option>Single</option>
                            <option>Married</option>
                        </select>
                    </div>

                    {/* PASSPORT */}
                    <div>
                        <label>Passport Number</label>
                        <input
                            value={data.passport_number}
                            onChange={(e) =>
                                setData("passport_number", e.target.value)
                            }
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label>Confirm Passport</label>
                        <input
                            value={data.confirm_passport}
                            onChange={(e) =>
                                setData("confirm_passport", e.target.value)
                            }
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* ISSUE */}
                    <div>
                        <label>Issue Date</label>
                        <input
                            type="date"
                            value={data.passport_issue_date}
                            onChange={(e) =>
                                setData("passport_issue_date", e.target.value)
                            }
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label>Issue Place</label>
                        <input
                            value={data.passport_issue_place}
                            onChange={(e) =>
                                setData("passport_issue_place", e.target.value)
                            }
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label>Expiry Date</label>
                        <input
                            type="date"
                            value={data.passport_expiry_date}
                            onChange={(e) =>
                                setData("passport_expiry_date", e.target.value)
                            }
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* VISA */}
                    <div>
                        <label>Visa Type</label>
                        <select
                            value={data.visa_type}
                            onChange={(e) =>
                                setData("visa_type", e.target.value)
                            }
                            className="input input-bordered w-full"
                        >
                            <option value="">Select</option>
                            <option>Work Visa</option>
                            <option>Family Visa</option>
                        </select>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label>Phone</label>
                        <input
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label>NID</label>
                        <input
                            value={data.nid}
                            onChange={(e) => setData("nid", e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label>Position</label>
                        <input
                            value={data.position_applied}
                            onChange={(e) =>
                                setData("position_applied", e.target.value)
                            }
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* FILE */}
                    <div className="md:col-span-2">
                        <label>Upload Passport</label>
                        <input
                            type="file"
                            onChange={(e) =>
                                setData("passport_image", e.target.files[0])
                            }
                        />
                        {errors.passport_image && (
                            <p className="text-red-500 text-sm">
                                {errors.passport_image}
                            </p>
                        )}
                    </div>

                    {/* SUBMIT */}
                    <div className="md:col-span-3">
                        <button
                            disabled={processing}
                            className="w-full bg-blue-700 text-white py-3 rounded-lg"
                        >
                            {processing ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CreateGamcaSlip;
