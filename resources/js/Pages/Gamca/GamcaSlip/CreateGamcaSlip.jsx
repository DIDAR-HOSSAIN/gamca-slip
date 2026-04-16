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
        nationality: "Bangladeshi",
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

    const submit = (e) => {
        e.preventDefault();
        post(route("gamca-slip.store"), {
            forceFormData: true,
        });
    };

    // reusable input style
    const inputStyle =
        "w-full border border-gray-300 rounded-lg px-3 py-2 text-md focus:ring-2 focus:ring-blue-500 outline-none";

    const labelStyle = "text-md font-medium text-indigo-600 mb-1 block";

    return (
        <section className="py-10 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10">
                    {/* TITLE */}
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-700 mb-8">
                        Book Medical Appointment
                    </h2>

                    <form
                        onSubmit={submit}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {/* COUNTRY */}
                        <div>
                            <label className={labelStyle}>Country</label>
                            <input
                                value={data.country}
                                onChange={(e) =>
                                    setData("country", e.target.value)
                                }
                                className={inputStyle}
                            />
                        </div>

                        {/* CITY */}
                        <div>
                            <label className={labelStyle}>City</label>
                            <select
                                value={data.city}
                                onChange={(e) =>
                                    setData("city", e.target.value)
                                }
                                className={inputStyle}
                            >
                                <option value="" disabled hidden>
                                    Select City
                                </option>
                                <option>Barishal</option>
                                <option>Chandpur</option>
                                <option>Chittagong</option>
                                <option>Cox's Bazar</option>
                                <option>Cumilla</option>
                                <option>Dhaka</option>
                                <option>Rajshahi</option>
                                <option>Sherpur</option>
                                <option>Sylhet</option>
                            </select>
                            {errors.city && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.city}
                                </p>
                            )}
                        </div>

                        {/* TRAVEL COUNTRY */}
                        <div>
                            <label className={labelStyle}>Travel Country</label>
                            <select
                                value={data.travel_country}
                                onChange={(e) =>
                                    setData("travel_country", e.target.value)
                                }
                                className={inputStyle}
                            >
                                <option value="" disabled hidden>
                                    Select Country
                                </option>
                                <option>Bahrain</option>
                                <option>Kuwait</option>
                                <option>Oman</option>
                                <option>Qatar</option>
                                <option>Saudi Arabia</option>
                                <option>UAE</option>
                                <option>Yemen</option>
                            </select>
                            {errors.travel_country && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.travel_country}
                                </p>
                            )}
                        </div>

                        {/* NAME */}
                        <div>
                            <label className={labelStyle}>First Name</label>
                            <input
                                value={data.first_name}
                                onChange={(e) =>
                                    setData("first_name", e.target.value)
                                }
                                className={inputStyle}
                            />
                            {errors.first_name && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.first_name}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className={labelStyle}>Last Name</label>
                            <input
                                value={data.last_name}
                                onChange={(e) =>
                                    setData("last_name", e.target.value)
                                }
                                className={inputStyle}
                            />
                            {errors.last_name && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.last_name}
                                </p>
                            )}
                        </div>

                        {/* DOB */}
                        <div>
                            <label className={labelStyle}>Date of Birth</label>
                            <input
                                type="date"
                                value={data.dob}
                                onChange={(e) => setData("dob", e.target.value)}
                                className={inputStyle}
                            />
                            {errors.dob && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.dob}
                                </p>
                            )}
                        </div>

                        {/* NATIONALITY */}
                        <div>
                            <label className={labelStyle}>Nationality</label>
                            <input
                                value={data.nationality}
                                onChange={(e) =>
                                    setData("nationality", e.target.value)
                                }
                                className={inputStyle}
                            />
                            {errors.nationality && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.nationality}
                                </p>
                            )}
                        </div>

                        {/* GENDER */}
                        <div>
                            <label className={labelStyle}>Gender</label>
                            <select
                                value={data.gender}
                                onChange={(e) =>
                                    setData("gender", e.target.value)
                                }
                                className={inputStyle}
                            >
                                <option value="" disabled hidden>
                                    Select Gender
                                </option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            {errors.gender && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.gender}
                                </p>
                            )}
                        </div>

                        {/* MARITAL */}
                        <div>
                            <label className={labelStyle}>Marital Status</label>
                            <select
                                value={data.marital_status}
                                onChange={(e) =>
                                    setData("marital_status", e.target.value)
                                }
                                className={inputStyle}
                            >
                                <option value="" disabled hidden>
                                    Select Status
                                </option>
                                <option>Single</option>
                                <option>Married</option>
                            </select>
                            {errors.marital_status && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.marital_status}
                                </p>
                            )}
                        </div>

                        {/* PASSPORT */}
                        <div>
                            <label className={labelStyle}>
                                Passport Number
                            </label>
                            <input
                                value={data.passport_number}
                                onChange={(e) =>
                                    setData("passport_number", e.target.value)
                                }
                                className={inputStyle}
                            />
                            {errors.passport_number && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.passport_number}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className={labelStyle}>
                                Confirm Passport
                            </label>
                            <input
                                value={data.confirm_passport}
                                onChange={(e) =>
                                    setData("confirm_passport", e.target.value)
                                }
                                className={inputStyle}
                            />
                            {errors.confirm_passport && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.confirm_passport}
                                </p>
                            )}
                        </div>

                        {/* DATES */}
                        <div>
                            <label className={labelStyle}>Issue Date</label>
                            <input
                                type="date"
                                value={data.passport_issue_date}
                                onChange={(e) =>
                                    setData(
                                        "passport_issue_date",
                                        e.target.value,
                                    )
                                }
                                className={inputStyle}
                            />
                            {errors.passport_issue_date && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.passport_issue_date}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className={labelStyle}>Issue Place</label>
                            <input
                                value={data.passport_issue_place}
                                onChange={(e) =>
                                    setData(
                                        "passport_issue_place",
                                        e.target.value,
                                    )
                                }
                                className={inputStyle}
                            />
                        </div>

                        <div>
                            <label className={labelStyle}>Expiry Date</label>
                            <input
                                type="date"
                                value={data.passport_expiry_date}
                                onChange={(e) =>
                                    setData(
                                        "passport_expiry_date",
                                        e.target.value,
                                    )
                                }
                                className={inputStyle}
                            />
                            {errors.passport_expiry_date && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.passport_expiry_date}
                                </p>
                            )}
                        </div>

                        {/* VISA */}
                        <div>
                            <label className={labelStyle}>Visa Type</label>
                            <select
                                value={data.visa_type}
                                onChange={(e) =>
                                    setData("visa_type", e.target.value)
                                }
                                className={inputStyle}
                            >
                                <option value="" disabled hidden>
                                    Select Visa
                                </option>
                                <option>Work Visa</option>
                                <option>Family Visa</option>
                                <option>Study Visa</option>
                            </select>
                            {errors.visa_type && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.visa_type}
                                </p>
                            )}
                        </div>

                        {/* CONTACT */}
                        <div>
                            <label className={labelStyle}>Email</label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className={inputStyle}
                            />
                        </div>

                        <div>
                            <label className={labelStyle}>Phone</label>
                            <input
                                value={data.phone}
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                                className={inputStyle}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.phone}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className={labelStyle}>NID</label>
                            <input
                                value={data.nid}
                                onChange={(e) => setData("nid", e.target.value)}
                                className={inputStyle}
                            />
                            {errors.nid && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.nid}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className={labelStyle}>Position</label>
                            <input
                                value={data.position_applied}
                                onChange={(e) =>
                                    setData("position_applied", e.target.value)
                                }
                                className={inputStyle}
                            />
                        </div>

                        {/* FILE */}
                        {/* <div className="lg:col-span-2">
                            <label className={labelStyle}>
                                Upload Passport
                            </label>
                            <input
                                type="file"
                                onChange={(e) =>
                                    setData("passport_image", e.target.files[0])
                                }
                                className="w-full border rounded-lg p-2"
                            />
                            {errors.passport_image && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.passport_image}
                                </p>
                            )}
                        </div> */}

                        <div className="lg:col-span-2">
                            <label className={labelStyle}>
                                Upload Passport
                            </label>
                            <input
                                // name="passport_image"
                                type="file"
                                // accept=".jpg,.jpeg,.png,.pdf"
                                onChange={(e) =>
                                    setData("passport_image", e.target.files[0])
                                }
                                className="w-full border rounded-lg p-2"
                            />
                            {errors.passport_image && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.passport_image}
                                </p>
                            )}
                            <p className="text-xs text-red-500 mt-1">
                                Please upload a clear image of your passport.
                                Max file size: 10 MB
                            </p>
                        </div>

                        {/* SUBMIT */}
                        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                            <button
                                disabled={processing}
                                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition"
                            >
                                {processing ? "Processing..." : "Submit & Pay"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CreateGamcaSlip;
