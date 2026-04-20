import React from "react";
import { FaWhatsapp, FaShieldAlt, FaBolt, FaCheckCircle } from "react-icons/fa";

const LandingPage = () => {
    return (
        <div className="font-[Inter] bg-gradient-to-b from-slate-50 to-white text-gray-800">
            <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Main Heading */}
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                        Fast, Secure & Hassle-Free <br />
                        <span className="text-blue-700">
                            GAMCA / WAFID Medical Slip Service
                        </span>
                    </h1>
                </div>
            </section>

            {/* HERO SECTION */}
            <section className="text-center px-4 bg-gradient-to-r from-blue-50 to-white">
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
                        href="/gamca-slip/create"
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

            <section className="relative py-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 overflow-hidden">
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
                        💬 ফর্ম পূরণ করতে সমস্যা? শুধু আপনার পাসপোর্টের ছবি
                        WhatsApp করুন — আমরা পুরো কাজটি করে দেবো!
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
            <section className="py-12 bg-gradient-to-b from-white to-blue-50">
                <div className="w-full flex justify-center px-4">
                    {/* INNER CONTAINER (THIS FIXES TRUE CENTER) */}
                    <div className="w-full max-w-6xl text-center">
                        {/* heading */}
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
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
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center">
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
                                    className="w-full max-w-[150px] bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition p-4 flex flex-col items-center"
                                >
                                    {/* flag */}
                                    <img
                                        src={`https://flagcdn.com/w80/${country.code}.png`}
                                        className="h-10 mb-3"
                                        alt={country.name}
                                    />

                                    {/* name */}
                                    <h3 className="text-sm font-semibold text-gray-700 mb-3">
                                        {country.name}
                                    </h3>

                                    {/* button */}
                                    <a
                                        href="/gamca-slip/create"
                                        className="w-full bg-blue-700 text-white text-xs font-semibold py-2 rounded-lg hover:bg-blue-800 transition"
                                    >
                                        Book Now
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* bottom trust line */}
                        <p className="text-sm text-gray-500 mt-10 flex justify-center gap-4 flex-wrap">
                            <span>⚡ দ্রুত বুকিং</span>
                            <span>🔒 নিরাপদ প্রসেস</span>
                            <span>📍 GCC Approved Service</span>
                        </p>
                    </div>
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
            <section className="relative overflow-hidden py-8 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white">
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

            <section className="py-8 bg-white px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Title */}
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                        গুরুত্বপূর্ণ তথ্য
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-5">
                        এই ওয়েবসাইটটি WAFID / GAMCA বা GCC এর কোনো অফিসিয়াল
                        ওয়েবসাইট নয়। আমরা একটি স্বাধীন সার্ভিস প্রোভাইডার হিসেবে
                        কাজ করি, যারা মধ্যপ্রাচ্যে গমন ইচ্ছুক যাত্রীদের মেডিকেল
                        স্লিপ প্রসেসিং-এ সহায়তা করে থাকি।
                    </p>

                    {/* Explanation */}
                    <p className="text-gray-600 leading-relaxed mb-5">
                        সাধারণত GAMCA / WAFID মেডিকেল স্লিপের জন্য অনলাইনে ডলার
                        (USD) পেমেন্ট করে রেজিস্ট্রেশন করতে হয়। কিন্তু অধিকাংশ
                        আবেদনকারীর আন্তর্জাতিক পেমেন্ট কার্ড (Dollar Card) না
                        থাকায় এই প্রক্রিয়াটি সম্পন্ন করা কঠিন হয়ে পড়ে।
                    </p>

                    {/* Highlight Box */}
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 mb-6">
                        <p className="text-blue-700 font-semibold">
                            💡 এই সমস্যার সমাধান হিসেবে আমরা আপনার পক্ষ থেকে
                            সম্পূর্ণ অনলাইন রেজিস্ট্রেশন ও পেমেন্ট প্রসেসটি
                            নিরাপদভাবে সম্পন্ন করে দেই।
                        </p>
                    </div>

                    {/* Trust Line */}
                    <p className="text-green-600 font-medium mb-6">
                        🔒 আপনার তথ্য সম্পূর্ণ নিরাপদ রাখা হয় এবং
                        নির্ভরযোগ্যভাবে সার্ভিস প্রদান করা হয়
                    </p>

                    {/* Button */}
                    <a
                        href="/gamca-slip/create"
                        className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition shadow"
                    >
                        📄 এখনই আবেদন করুন
                    </a>
                </div>
            </section>

            <section className="py-8 bg-gradient-to-r from-blue-50 to-white text-center px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Title */}
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                        আপনার নিকটস্থ অনুমোদিত মেডিকেল সেন্টার খুঁজুন
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-600 text-sm lg:text-base mb-6 leading-relaxed">
                        GAMCA / WAFID মেডিকেল স্লিপ করার আগে আপনার জন্য
                        নির্ধারিত অনুমোদিত মেডিকেল সেন্টার জানা অত্যন্ত
                        গুরুত্বপূর্ণ। নিচের বাটনে ক্লিক করে সহজেই আপনার নিকটস্থ
                        অফিসিয়াল মেডিকেল সেন্টার খুঁজে নিন।
                    </p>

                    {/* Highlight Note */}
                    <p className="text-green-600 font-semibold mb-6">
                        📌 শুধুমাত্র অনুমোদিত সেন্টারেই মেডিকেল সম্পন্ন করুন —
                        প্রতারণা থেকে নিরাপদ থাকুন
                    </p>

                    {/* Button */}
                    <div className="flex justify-center">
                        <a
                            href="https://wafid.com/en/medical-center/search/?country=BD&city=&name="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition shadow-md"
                        >
                            🔍 মেডিকেল সেন্টার দেখুন
                        </a>
                    </div>

                    {/* Small Trust Line */}
                    <p className="text-xs text-gray-500 mt-5">
                        ✔ Official WAFID Database | ✔ Safe & Verified
                    </p>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
