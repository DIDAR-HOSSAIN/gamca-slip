import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import CreateMedical from "@/Pages/Gamca/GamcaSlip/CreateGamcaSlip";

export default function LandPage() {

    const message = `আস্সালামু আলাইকুম 😊
    গামকা মেডিকেল স্লিপের জন্য আপনার পাসপোর্টের ক্লিয়ার ছবি এবং যে দেশে যাবেন তার নাম পাঠান।`;
    const whatsappLink = `https://wa.me/01812894971?text=${encodeURIComponent(message)}`;

    return (
        <div className="bg-gray-50">
            {/* HERO SECTION */}
            <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-gray-800">
                        GAMCA Medical Slip Service
                    </h1>

                    {/* <p className="text-lg text-gray-600 mb-4">
                        We help you book your WAFID medical appointment easily &
                        quickly.
                    </p> */}

                    {/* Highlight Message */}
                    <p className="text-green-600 font-semibold mb-8">
                        ফর্ম পূরণ করতে সমস্যা হচ্ছে? আপনার পাসপোর্টের ছবি
                        WhatsApp এ পাঠান — আমরা সম্পূর্ণ কাজটি করে দেবো!
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        {/* Primary Button */}
                        <a
                            href="/gamca-slip/create"
                            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition shadow"
                        >
                            📄 GAMCA Slip Appointment
                        </a>

                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/01812894971?text=আস্সালামু%20আলাইকুম%20😊%0A%0Aগামকা%20মেডিকেল%20স্লিপের%20জন্য%20আপনার%20পাসপোর্টের%20ক্লিয়ার%20ছবি%20এবং%20যে%20দেশে%20যাবেন%20তার%20নাম%20পাঠান।"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition shadow"
                        >
                            <FaWhatsapp className="text-xl" />
                            Book Appointment via WhatsApp
                        </a>
                    </div>

                    {/* Small Note */}
                    <p className="text-sm text-gray-500 mt-6">
                        📌 Just send a clear passport photo — we will handle
                        everything for you.
                    </p>
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
                                href="/gamca-slip/create"
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
                                href="/gamca-slip/create"
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
                                href="/gamca-slip/create"
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
                                href="/gamca-slip/create"
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
                                href="/gamca-slip/create"
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
                                href="/gamca-slip/create"
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

            {/* Medical centre list */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                {/* Primary Button */}
                <a
                    href="https://wafid.com/en/medical-center/search/?country=BD&city=&name="
                    className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition shadow"
                >
                    আপনার নিকটস্থ মেডিকেল সেন্টার দেখতে ক্লিক করুন
                </a>
            </div>

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
        </div>
    );
}
