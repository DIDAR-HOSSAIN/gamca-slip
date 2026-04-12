import React from "react";

export default function LandPage() {
    return (
        <div className="bg-gray-50">
            {/* HERO SECTION */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                        GAMCA Medical Slip Service
                    </h1>
                    <p className="text-lg text-blue-700 font-bold mb-6">
                        We help you book your WAFID medical appointment easily &
                        quickly.
                    </p>

                    <a
                        href="#form"
                        className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-500 transition"
                    >
                        Book Appointment Now
                    </a>
                </div>
            </section>

            {/* flag section */}
            <section className="py-10 bg-white">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-xl lg:text-2xl font-bold mb-6">
                        GCC / WAFID Approved Countries
                    </h2>

                    <p className="text-blue-700 font-bold mb-8">
                        We provide GAMCA medical slip service for the following
                        countries
                    </p>

                    <div className="bg-gray-100 rounded-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
                        {/* Bahrain */}
                        <div className="flex flex-col items-center hover:scale-105 transition">
                            <img
                                src="https://flagcdn.com/w80/bh.png"
                                className="h-10 mb-2"
                            />
                            <span className="text-sm font-medium">Bahrain</span>
                            <a
                                href="#form"
                                className="bg-blue-700 p-2 text-sm text-white rounded-md hover:bg-sky-500 transition"
                            >
                                Book Now
                            </a>
                        </div>

                        {/* Kuwait */}
                        <div className="flex flex-col items-center hover:scale-105 transition">
                            <img
                                src="https://flagcdn.com/w80/kw.png"
                                className="h-10 mb-2"
                            />
                            <span className="text-sm font-medium">Kuwait</span>
                            <a
                                href="#form"
                                className="bg-blue-700 p-2 text-sm text-white rounded-md hover:bg-sky-500 transition"
                            >
                                Book Now
                            </a>
                        </div>

                        {/* Oman */}
                        <div className="flex flex-col items-center hover:scale-105 transition">
                            <img
                                src="https://flagcdn.com/w80/om.png"
                                className="h-10 mb-2"
                            />
                            <span className="text-sm font-medium">Oman</span>
                            <a
                                href="#form"
                                className="bg-blue-700 p-2 text-sm text-white rounded-md hover:bg-sky-500 transition"
                            >
                                Book Now
                            </a>
                        </div>

                        {/* Qatar */}
                        {/* <div className="flex flex-col items-center hover:scale-105 transition">
                            <img
                                src="https://flagcdn.com/w80/qa.png"
                                className="h-10 mb-2"
                            />
                            <span className="text-sm font-medium">Qatar</span>
                        </div> */}

                        {/* Saudi */}
                        <div className="flex flex-col items-center hover:scale-105 transition">
                            <img
                                src="https://flagcdn.com/w80/sa.png"
                                className="h-10 mb-2"
                            />
                            <span className="text-sm font-medium">
                                Saudi Arabia
                            </span>
                            <a
                                href="#form"
                                className="bg-blue-700 p-2 text-sm text-white rounded-md hover:bg-sky-500 transition"
                            >
                                Book Now
                            </a>
                        </div>

                        {/* UAE */}
                        <div className="flex flex-col items-center hover:scale-105 transition">
                            <img
                                src="https://flagcdn.com/w80/ae.png"
                                className="h-10 mb-2"
                            />
                            <span className="text-sm font-medium">UAE</span>
                            <a
                                href="#form"
                                className="bg-blue-700 p-2 text-sm text-white rounded-md hover:bg-sky-500 transition"
                            >
                                Book Now
                            </a>
                        </div>

                        {/* Yemen */}
                        <div className="flex flex-col items-center hover:scale-105 transition">
                            <img
                                src="https://flagcdn.com/w80/ye.png"
                                className="h-10 mb-2"
                            />
                            <span className="text-sm font-medium">Yemen</span>
                            <a
                                href="#form"
                                className="bg-blue-700 p-2 text-sm text-white rounded-md hover:bg-sky-500 transition"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-8">How It Works</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-semibold text-lg mb-2">
                                1. Fill Form
                            </h3>
                            <p className="text-gray-600">
                                Provide your personal and passport details
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-semibold text-lg mb-2">
                                2. We Process
                            </h3>
                            <p className="text-gray-600">
                                We submit your data to WAFID system
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="font-semibold text-lg mb-2">
                                3. Get Slip
                            </h3>
                            <p className="text-gray-600">
                                Receive your GAMCA medical slip quickly
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* form section */}
            <section id="form" className="py-12">
                <div className="max-w-4xl mx-auto px-4 bg-white shadow-2xl rounded-xl p-6">
                    <h2 className="text-blue-700 text-2xl font-bold mb-8 text-center">
                        Book Medical Appointment
                    </h2>

                    <form className="grid md:grid-cols-3 gap-6">
                        {/* Country */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Select Country
                            </label>
                            <select
                                required
                                defaultValue=""
                                className="input input-bordered w-full"
                            >
                                <option value="" disabled>
                                    Select Country
                                </option>
                                <option>Bangladesh</option>
                            </select>
                        </div>

                        {/* City */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Select City
                            </label>
                            <select
                                required
                                defaultValue=""
                                className="input input-bordered w-full"
                            >
                                <option value="" disabled>
                                    Select City
                                </option>
                            </select>
                        </div>

                        {/* Traveling Country */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Country Traveling To
                            </label>
                            <select
                                required
                                defaultValue=""
                                className="input input-bordered w-full"
                            >
                                <option value="" disabled>
                                    Select Country
                                </option>
                            </select>
                        </div>

                        {/* First Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                First Name
                            </label>
                            <input
                                required
                                placeholder="Enter first name"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Last Name
                            </label>
                            <input
                                required
                                placeholder="Enter last name"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* DOB */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Date of Birth
                            </label>
                            <input
                                required
                                type="date"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Nationality */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Nationality
                            </label>
                            <select
                                required
                                defaultValue=""
                                className="input input-bordered w-full"
                            >
                                <option value="" disabled>
                                    Select Nationality
                                </option>
                                <option>Bangladeshi</option>
                            </select>
                        </div>

                        {/* Gender */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Gender
                            </label>
                            <select
                                required
                                defaultValue=""
                                className="input input-bordered w-full"
                            >
                                <option value="" disabled>
                                    Select Gender
                                </option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>

                        {/* Marital */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Marital Status
                            </label>
                            <select
                                required
                                defaultValue=""
                                className="input input-bordered w-full"
                            >
                                <option value="" disabled>
                                    Select Marital Status
                                </option>
                                <option>Married</option>
                                <option>Single</option>
                            </select>
                        </div>

                        {/* Passport */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Passport Number
                            </label>
                            <input
                                required
                                placeholder="Enter passport number"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Confirm Passport */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Confirm Passport Number
                            </label>
                            <input
                                required
                                placeholder="Re-enter passport number"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Issue Date */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Passport Issue Date
                            </label>
                            <input
                                required
                                type="date"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Issue Place */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Passport Issue Place
                            </label>
                            <input
                                required
                                placeholder="Enter issue place"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Expiry */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Passport Expiry Date
                            </label>
                            <input
                                required
                                type="date"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Visa Type */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Visa Type
                            </label>
                            <select
                                required
                                defaultValue=""
                                className="input input-bordered w-full"
                            >
                                <option value="" disabled>
                                    Select Visa Type
                                </option>
                                <option value="work">Work Visa</option>
                                <option value="family">Family Visa</option>
                                <option value="study">Study Visa</option>
                            </select>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Email Address
                            </label>
                            <input
                                required
                                type="email"
                                placeholder="your@email.com"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Phone Number
                            </label>
                            <input
                                required
                                placeholder="017xxxxxxxx"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* NID */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                National ID
                            </label>
                            <input
                                required
                                placeholder="Enter NID number"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Position */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Position Applied For
                            </label>
                            <input
                                required
                                placeholder="e.g. Driver / Technician"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Upload image */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Upload Passport (JPEG, PNG, PDF) *
                            </label>

                            <input
                                required
                                type="file"
                                accept=".jpg,.jpeg,.png,.pdf,.webp"
                                className="block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-lg file:border-0
                                file:text-sm file:font-semibold
                                file:bg-cyan-500 file:text-blue-700
                                hover:file:bg-blue-200"
                            />

                            <p className="text-xs text-gray-500 mt-1">
                                Please upload a clear image of your passport.
                                Max file size: 10 MB
                            </p>
                        </div>

                        {/* SUBMIT */}
                        <div className="md:col-span-3">
                            <button
                                type="submit"
                                className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-green-500 transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-8">Why Choose Us</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white rounded-lg shadow">
                            ⚡ Fast Processing
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow">
                            🔒 Secure Data
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow">
                            📞 24/7 Support
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section className="bg-blue-700 text-white py-10 text-center">
                <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
                <p className="mb-4">Call our hotline anytime</p>

                <a
                    href="tel:01767774027"
                    className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold"
                >
                    📞 01767774027
                </a>
            </section>

            {/* FOOTER */}
            <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm">
                © 2026 GAMCA Slip Service. All rights reserved.
            </footer>
        </div>
    );
}
