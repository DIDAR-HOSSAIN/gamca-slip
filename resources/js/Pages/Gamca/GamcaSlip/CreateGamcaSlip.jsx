import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import FrontendLayout from "@/frontend/Layout/FrontendLayout";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

const CreateGamcaSlip = () => {
    const [matchMessage, setMatchMessage] = useState("");
    const { data, setData, post, processing, errors, reset } = useForm({
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
        trx_id: "",
    });

    const handlePassportChange = (value, type) => {
        const val = value.toUpperCase().trim();

        if (type === "passport") {
            setData("passport_number", val);
        } else {
            setData("confirm_passport", val);
        }

        const passport = type === "passport" ? val : data.passport_number;
        const confirm = type === "confirm" ? val : data.confirm_passport;

        if (!passport || !confirm) {
            setMatchMessage("");
            return;
        }

        if (passport === confirm) {
            setMatchMessage("✔ Passport matched");
        } else {
            setMatchMessage("✖ Passport does not match");
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("gamca-slip.store"), {
            forceFormData: true,
            onSuccess: () => {
                reset();
            },
        });
    };
    // reusable input style
    const inputStyle =
        "w-full border border-gray-300 rounded-lg px-3 py-2 text-md focus:ring-2 focus:ring-blue-500 outline-none";

    const labelStyle = "text-md font-medium text-indigo-600 mb-1 block";

    return (
        <FrontendLayout>
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
                                <label className={labelStyle}>
                                    Travel Country
                                </label>
                                <select
                                    value={data.travel_country}
                                    onChange={(e) =>
                                        setData(
                                            "travel_country",
                                            e.target.value,
                                        )
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
                                <label className={labelStyle}>
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    value={data.dob}
                                    onChange={(e) =>
                                        setData("dob", e.target.value)
                                    }
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
                                <label className={labelStyle}>
                                    Nationality
                                </label>
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
                                <label className={labelStyle}>
                                    Marital Status
                                </label>
                                <select
                                    value={data.marital_status}
                                    onChange={(e) =>
                                        setData(
                                            "marital_status",
                                            e.target.value,
                                        )
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

                            {/* Passport */}
                            <div>
                                <label className={labelStyle}>
                                    Passport Number
                                </label>
                                <input
                                    value={data.passport_number}
                                    maxLength={9}
                                    onChange={(e) =>
                                        handlePassportChange(
                                            e.target.value,
                                            "passport",
                                        )
                                    }
                                    className={inputStyle}
                                />
                            </div>

                            {/* Confirm Passport */}
                            <div>
                                <label className={labelStyle}>
                                    Confirm Passport
                                </label>
                                <input
                                    value={data.confirm_passport}
                                    maxLength={9}
                                    onChange={(e) =>
                                        handlePassportChange(
                                            e.target.value,
                                            "confirm",
                                        )
                                    }
                                    className={inputStyle}
                                />

                                {/* ✅ Message */}
                                {matchMessage && (
                                    <p
                                        className={`text-xs mt-1 ${
                                            matchMessage.includes("matched")
                                                ? "text-green-500"
                                                : "text-red-500"
                                        }`}
                                    >
                                        {matchMessage}
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
                                <label className={labelStyle}>
                                    Issue Place
                                </label>
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
                                <label className={labelStyle}>
                                    Expiry Date
                                </label>
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
                                    onChange={(e) =>
                                        setData("nid", e.target.value)
                                    }
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
                                <select
                                    value={data.position_applied}
                                    onChange={(e) =>
                                        setData(
                                            "position_applied",
                                            e.target.value,
                                        )
                                    }
                                    className={inputStyle}
                                >
                                    <option value="" disabled hidden>
                                        Select Position
                                    </option>
                                    <option>Banking &amp; Finance</option>
                                    <option>Carpenter</option>
                                    <option>Cashier</option>
                                    <option>Electrician</option>
                                    <option>Engineer</option>
                                    <option>General Secretory</option>
                                    <option>
                                        Health &amp; Medicine &amp; Nursing
                                    </option>
                                    <option>Heavy Driver</option>
                                    <option>IT &amp; Internet Engineer</option>
                                    <option>Leisure &amp; Tourism</option>
                                    <option>Light Driver</option>
                                    <option>Mason</option>
                                    <option>President</option>
                                    <option>Labour</option>
                                    <option>Plumber</option>
                                    <option>Doctor</option>
                                    <option>Family</option>
                                    <option>Steel Fixer</option>
                                    <option>Aluminum Technician</option>
                                    <option>Nurse</option>
                                    <option>Male Nurse</option>
                                    <option>Ward Boy</option>
                                    <option>Shovel Operator</option>
                                    <option>Dozer Operator</option>
                                    <option>Car Mechanic</option>
                                    <option>Petrol Mechanic</option>
                                    <option>Diesel Mechanic</option>
                                    <option>Student</option>
                                    <option>Accountant</option>
                                    <option>Lab Technician</option>
                                    <option>Drafts man</option>
                                    <option>Auto-Cad Operator</option>
                                    <option>Painter</option>
                                    <option>Tailor</option>
                                    <option>Welder</option>
                                    <option>X-ray Technician</option>
                                    <option>Lecturer</option>
                                    <option>A.C Technician</option>
                                    <option>Business</option>
                                    <option>Cleaner</option>
                                    <option>Security Guard</option>
                                    <option>House Maid</option>
                                    <option>Manager</option>
                                    <option>Hospital Cleaning</option>
                                    <option>Mechanic</option>
                                    <option>Computer Operator</option>
                                    <option>House Driver</option>
                                    <option>Driver</option>
                                    <option>Cleaning Labour</option>
                                    <option>Building Electrician</option>
                                    <option>Salesman</option>
                                    <option>Plastermason</option>
                                    <option>Servant</option>
                                    <option>Barber</option>
                                    <option>Residence</option>
                                    <option>Shepherds</option>
                                    <option>Employment</option>
                                    <option>Fuel Filler</option>
                                    <option>Worker</option>
                                    <option>House Boy</option>
                                    <option>House Wife</option>
                                    <option>RCC Fitter</option>
                                    <option>Clerk</option>
                                    <option>Microbiologist</option>
                                    <option>Teacher</option>
                                    <option>Helper</option>
                                    <option>Hajj Duty</option>
                                    <option>Shuttering</option>
                                    <option>Supervisor</option>
                                    <option>Medical Specialist</option>
                                    <option>Office Secretary</option>
                                    <option>Technician</option>
                                    <option>Butcher</option>
                                    <option>Arabic Food Cook</option>
                                    <option>Agricultural Worker</option>
                                    <option>Service</option>
                                    <option>Studio CAD Designer</option>
                                    <option>Financial Analyst</option>
                                    <option>
                                        {" "}
                                        Cabin Appearance (AIR LINES)
                                    </option>
                                    <option>Car Washer</option>
                                    <option>Surveyor</option>
                                    <option>Electrical Technician</option>
                                    <option>Waiter</option>
                                    <option>Nursing helper</option>
                                    <option>Anesthesia technician</option>
                                    <option>&lt;s&gt;Marvel</option>
                                    <option>Marvel</option>
                                    <option>Construction worker</option>
                                    <option>Other</option>
                                </select>
                                {errors.position_applied && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.position_applied}
                                    </p>
                                )}
                            </div>

                            <div className="">
                                <label className={labelStyle}>
                                    Upload Passport (jpg, jpeg, png, pdf)
                                </label>
                                <input
                                    // name="passport_image"
                                    type="file"
                                    // accept=".jpg,.jpeg,.png,.pdf"
                                    onChange={(e) =>
                                        setData(
                                            "passport_image",
                                            e.target.files[0],
                                        )
                                    }
                                    className="w-full border rounded-lg p-2"
                                />
                                {errors.passport_image && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.passport_image}
                                    </p>
                                )}
                                <p className="text-xs text-red-500 mt-1">
                                    upload a clear image of your passport. Max
                                    file size: 10 MB
                                </p>
                            </div>

                            <div>
                                <label className={labelStyle}>
                                    Transaction No OR Bkash No Last 4 Digit
                                </label>
                                <input
                                    value={data.trx_id}
                                    onChange={(e) =>
                                        setData("trx_id", e.target.value)
                                    }
                                    className={inputStyle}
                                />
                                {errors.trx_id && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.trx_id}
                                    </p>
                                )}
                            </div>

                            {/* TERMS CHECKBOX */}
                            <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                                <label className="flex items-center gap-2 text-md cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={data.agree}
                                        onChange={(e) =>
                                            setData("agree", e.target.checked)
                                        }
                                        className="accent-blue-600"
                                    />
                                    <FaCheckCircle className="text-green-500 text-md" />
                                    <span className="leading-none">
                                        By submitting this form you agree with
                                        the{" "}
                                        <a
                                            href="/terms"
                                            className="text-blue-600 underline"
                                        >
                                            Terms & Conditions
                                        </a>
                                    </span>
                                    <p className="flex items-center gap-2 text-red-500 text-md">
                                        <FaExclamationTriangle className="text-md" />
                                        সাবমিট করার পূর্বে সকল তথ্য যাচাই করে
                                        নিন এবং বিকাশ পেমেন্ট নিশ্চিত করুন।
                                    </p>
                                </label>

                                {errors.agree && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.agree}
                                    </p>
                                )}
                            </div>

                            {/* SUBMIT */}
                            <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                                <button
                                    disabled={processing || !data.agree}
                                    className={`w-full py-3 rounded-lg font-semibold transition text-white
                                    ${
                                        data.agree
                                            ? "bg-blue-700 hover:bg-blue-800"
                                            : "bg-gray-400 cursor-not-allowed"
                                    }`}
                                >
                                    {processing
                                        ? "Processing..."
                                        : "Submit & Pay"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
};

export default CreateGamcaSlip;
