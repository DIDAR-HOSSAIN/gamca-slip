import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const LandingPage = () => {
    return (
        <div className="font-[Inter] bg-gradient-to-b from-slate-50 to-white text-gray-800">
            {/* HERO SECTION */}
            <section className="text-center py-4 px-4 bg-gradient-to-r from-blue-50 to-white">
                <h1 className="text-4xl md:text-3xl font-extrabold tracking-tight mb-4 text-blue-400">
                    বিদেশ যত্রীদের মেডিকেল রেজিস্ট্রেশন সিস্টেম
                </h1>

                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                    মাত্র ১৫০০ টাকায় এখনই আপনার GAMCA / WAFID মেডিকেল স্লিপ বুক
                    করুন। সীমিত সময়ের মধ্যে দ্রুত প্রসেসিং, সহজ আবেদন এবং
                    সম্পূর্ণ নিরাপদ bKash পেমেন্ট সুবিধা।
                </p>

                <div className="inline-flex gap-4">
                    <a
                        href="#form"
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700"
                    >
                        আবেদন করুন
                    </a>
                    <a
                        href="tel:01812894971"
                        className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold"
                    >
                        যোগাযোগ করুন
                    </a>
                </div>

                <div className="mt-6 text-sm text-gray-500">
                    ✓ Trusted Service &nbsp; | &nbsp; ✓ Secure bKash Payment
                    &nbsp; | &nbsp; ✓ Fast Processing
                </div>
            </section>

            <section className="relative py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 overflow-hidden">
                {/* background glow */}
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-green-200/20 rounded-full blur-3xl"></div>

                <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
                    {/* MAIN TITLE */}
                    <h1 className="text-2xl md:text-2xl font-bold text-gray-800 mb-5 leading-tight">
                        সহজে ও দ্রুত আপনার{" "}
                        <span className="text-blue-700">
                            GAMCA / WAFID মেডিকেল স্লিপ
                        </span>{" "}
                        সম্পন্ন করুন
                    </h1>

                    {/* SUB TITLE */}
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
                        ঝামেলা ছাড়া সম্পূর্ণ নিরাপদ প্রক্রিয়ায় মাত্র কয়েক মিনিটে
                        আবেদন করুন।
                    </p>

                    {/* highlight message */}
                    <div className="bg-green-50 border border-green-200 text-green-700 font-medium rounded-xl px-5 py-3 inline-block mb-8 shadow-sm">
                        💬 ফর্ম বুঝতে সমস্যা? শুধু আপনার পাসপোর্টের ছবি WhatsApp
                        করুন — আমরা পুরো কাজটি করে দেবো!
                    </div>

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        {/* Primary CTA */}
                        <a
                            href="/gamca-slip/create"
                            className="bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-800 transition shadow-md"
                        >
                            📄 এখনই আবেদন করুন
                        </a>

                        {/* WhatsApp CTA */}
                        <a
                            href="https://wa.me/01812894971?text=আস্সালামু%20আলাইকুম%20😊%0A%0Aগামকা%20মেডিকেল%20স্লিপের%20জন্য%20আমি%20সাহায্য%20চাই।"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-green-500 text-white px-7 py-3 rounded-xl font-semibold hover:bg-green-600 transition shadow-md"
                        >
                            <FaWhatsapp className="text-xl" />
                            WhatsApp এ সাহায্য নিন
                        </a>
                    </div>

                    {/* trust note */}
                    {/* Small Note */}
                    <p className="text-sm text-gray-500 mt-6">
                        📌 Just send a clear passport photo — we will handle
                        everything for you.
                    </p>
                    
                    <p className="text-sm text-gray-500 mt-6">
                        ⚡ দ্রুত প্রসেসিং • 🔒 নিরাপদ তথ্য • 📍 ১০০০+ সফল আবেদন
                        সম্পন্ন
                    </p>
                </div>
            </section>

            {/* FLAG / COUNTRIES SECTION */}
            <section className="py-16 bg-gradient-to-b from-white to-blue-50">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    {/* heading */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                        GCC / WAFID অনুমোদিত দেশসমূহ
                    </h2>

                    {/* subtitle */}
                    <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                        নিচের দেশগুলোর জন্য আমরা দ্রুত এবং নির্ভরযোগ্যভাবে{" "}
                        <span className="font-semibold text-blue-700">
                            GAMCA / WAFID মেডিকেল স্লিপ
                        </span>{" "}
                        সার্ভিস প্রদান করি।
                    </p>

                    {/* grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
                        {[
                            { name: "Bahrain", code: "bh" },
                            { name: "Kuwait", code: "kw" },
                            { name: "Oman", code: "om" },
                            { name: "Saudi Arabia", code: "sa" },
                            { name: "UAE", code: "ae" },
                            { name: "Yemen", code: "ye" },
                        ].map((country, i) => (
                            <div
                                key={i}
                                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 p-5 transition duration-300"
                            >
                                {/* flag */}
                                <div className="flex justify-center mb-3">
                                    <img
                                        src={`https://flagcdn.com/w80/${country.code}.png`}
                                        className="h-10 group-hover:scale-110 transition"
                                        alt={country.name}
                                    />
                                </div>

                                {/* name */}
                                <h3 className="text-sm font-semibold text-gray-700 mb-4">
                                    {country.name}
                                </h3>

                                {/* button */}
                                <a
                                    href="/gamca-slip/create"
                                    className="inline-block w-full bg-blue-700 text-white text-xs font-semibold py-2 rounded-lg hover:bg-blue-800 transition"
                                >
                                    Book Appointment
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* bottom trust line */}
                    <p className="text-sm text-gray-500 mt-10">
                        ⚡ দ্রুত বুকিং • 🔒 নিরাপদ প্রসেস • 📍 GCC Approved
                        Service
                    </p>
                </div>
            </section>

            {/* SERVICES */}
            <section className="py-4 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">
                    আমাদের সেবাসমূহ
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white shadow rounded-2xl">
                        <h3 className="font-bold text-xl mb-2">
                            GAMCA Medical Slip
                        </h3>
                        <p className="text-gray-600">
                            সহজে এবং দ্রুত GAMCA অনুমোদিত মেডিকেল স্লিপ প্রদান
                            করা হয় ।
                        </p>
                    </div>

                    <div className="p-6 bg-white shadow rounded-2xl">
                        <h3 className="font-bold text-xl mb-2">
                            bKash Payment Support
                        </h3>
                        <p className="text-gray-600">
                            নিরাপদ ও স্বয়ংক্রিয় বিকাশ পেমেন্ট সিস্টেম।
                        </p>
                    </div>

                    <div className="p-6 bg-white shadow rounded-2xl">
                        <h3 className="font-bold text-xl mb-2">
                            Fast Processing
                        </h3>
                        <p className="text-gray-600">
                            দ্রুত সময়ে প্রসেসিং নিশ্চিত করা হয়।
                        </p>
                    </div>
                </div>
            </section>

            {/* TRUST SECTION */}
            <section className="relative overflow-hidden py-20 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white">
                {/* soft background glow */}
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    {/* badge */}
                    <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-lg font-extrabold backdrop-blur">
                        ✔ Trusted Medical Slip Service Provider
                    </div>

                    {/* heading */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-snug">
                        আপনার বিশ্বাসই আমাদের সবচেয়ে বড় অর্জন
                    </h2>

                    {/* description */}
                    <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        ১০০০+ এরও বেশি সফল{" "}
                        <span className="font-semibold">
                            GAMCA / WAFID মেডিকেল স্লিপ
                        </span>{" "}
                        সম্পন্ন করার মাধ্যমে আমরা একটি নির্ভরযোগ্য ও বিশ্বস্ত
                        সেবাদাতা হিসেবে প্রতিষ্ঠিত হয়েছি।
                    </p>

                    {/* highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                        <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                            <h3 className="text-xl font-bold">100% Secure</h3>
                            <p className="text-sm text-white/80 mt-1">
                                ডাটা এনক্রিপ্টেড ও সেফ
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                            <h3 className="text-xl font-bold">
                                Fast Processing
                            </h3>
                            <p className="text-sm text-white/80 mt-1">
                                ২৪ ঘন্টার মধ্যে প্রসেস
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                            <h3 className="text-xl font-bold">
                                Trusted Service
                            </h3>
                            <p className="text-sm text-white/80 mt-1">
                                শতাধিক সফল কেস
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-10">
                        <a
                            href="/gamca-slip/create"
                            className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
                        >
                            এখনই আবেদন করুন
                        </a>
                    </div>
                </div>
            </section>

            {/* CONTACT INFO */}
            <section className="py-16 px-4 text-center">
                <h2 className="text-2xl font-bold mb-4">যোগাযোগ</h2>
                <p>📍 953, O.R Nizam Road, Panchlaish, Chattogram</p>
                <p>📧 didarhossain018@gmail.com</p>
                <p>📞 01812894971 (bKash Personal)</p>
            </section>
        </div>
    );
};

export default LandingPage;
