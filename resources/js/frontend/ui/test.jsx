import React from "react";

export default function LandingPage() {
    return (
        <div className="font-sans">
            {/* HERO */}
            <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center py-16 px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
                    সহজে ও দ্রুত GAMCA মেডিকেল স্লিপ করুন
                </h1>
                <p className="text-lg md:text-xl mb-2 opacity-90">
                    কোন ঝামেলা ছাড়াই আপনার মেডিকেল অ্যাপয়েন্টমেন্ট বুক করুন
                    নিরাপদ ও দ্রুত উপায়ে
                </p>

                {/* PRICE INFO */}
                <div className="bg-white/10 inline-block px-6 py-2 rounded-xl mb-3">
                    <p className="text-lg font-semibold">ফি: মাত্র ১৫০০ টাকা</p>
                </div>

                <p className="mb-5 text-sm md:text-base opacity-80">
                    আপনার বিদেশ যাত্রার প্রথম ধাপ—আমরা করে দিচ্ছি সহজ, দ্রুত এবং
                    নির্ভরযোগ্য সার্ভিস
                </p>

                <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition">
                    এখনই আবেদন করুন
                </button>
            </section>

            {/* TRUST */}
            <section className="py-14 px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">
                    কেন আমাদের নির্বাচন করবেন?
                </h2>
                <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    {[
                        "১০০% বিশ্বস্ত সার্ভিস",
                        "২৪ ঘন্টার মধ্যে দ্রুত প্রসেসিং",
                        "কোন লুকানো চার্জ নেই",
                        "ডাইরেক্ট WhatsApp সাপোর্ট",
                        "হাজারো সন্তুষ্ট কাস্টমার",
                        "নিরাপদ ও ট্রাস্টেড পেমেন্ট",
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-5 border rounded-2xl shadow hover:shadow-md transition"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </section>

            {/* PAYMENT INFO */}
            <section className="bg-gray-50 py-12 px-4 text-center">
                <h2 className="text-3xl font-bold mb-5">পেমেন্ট তথ্য</h2>
                <div className="max-w-xl mx-auto bg-white border rounded-2xl shadow p-5">
                    <p className="text-lg font-semibold mb-1">
                        bKash Personal Number
                    </p>
                    <p className="text-2xl font-bold text-blue-600 mb-2">
                        01812894971
                    </p>
                    <p className="text-gray-600">
                        ফি: <span className="font-semibold">১৫০০ টাকা</span>{" "}
                        (অ্যাপ্লিকেশন সাবমিশনের পূর্বে পেমেন্ট প্রয়োজন)
                    </p>
                </div>
            </section>

            {/* URGENCY */}
            <section className="bg-red-50 text-center py-14 px-4">
                <h2 className="text-3xl font-bold mb-3">
                    দেরি করবেন না – এখনই আবেদন করুন
                </h2>
                <p className="mb-1 text-gray-600">
                    সীমিত স্লটের কারণে দেরি হলে আপনার ভিসা প্রসেসে সমস্যা হতে
                    পারে
                </p>
                <p className="text-red-600 font-semibold">
                    আজই আবেদন করে আপনার স্লট নিশ্চিত করুন
                </p>
            </section>

            {/* PROCESS */}
            <section className="py-14 px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">কাজ করার সহজ পদ্ধতি</h2>
                <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    {[
                        "ফর্ম পূরণ করুন",
                        "bKash (01812894971) এর মাধ্যমে ১৫০০ টাকা পেমেন্ট করুন",
                        "আপনার GAMCA স্লিপ গ্রহণ করুন",
                    ].map((step, i) => (
                        <div key={i} className="p-5 border rounded-2xl shadow">
                            <h3 className="text-xl font-semibold mb-2">
                                ধাপ {i + 1}
                            </h3>
                            <p>{step}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SUPPORT */}
            <section className="bg-gray-100 py-12 px-4 text-center">
                <h2 className="text-3xl font-bold mb-3">সহায়তা প্রয়োজন?</h2>
                <p className="text-gray-600">
                    আমরা সবসময় প্রস্তুত আছি আপনাকে সহায়তা করার জন্য — WhatsApp এ
                    যোগাযোগ করুন
                </p>
            </section>

            {/* TESTIMONIAL */}
            <section className="py-14 px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">
                    আমাদের গ্রাহকদের মতামত
                </h2>
                <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    {[
                        "খুব দ্রুত সার্ভিস পেয়েছি, ধন্যবাদ!",
                        "বিশ্বস্ত ও প্রফেশনাল সার্ভিস",
                        "খুব সহজে সবকিছু সম্পন্ন হয়েছে",
                    ].map((review, i) => (
                        <div
                            key={i}
                            className="p-5 border rounded-2xl shadow hover:shadow-sm transition"
                        >
                            ⭐ {review}
                        </div>
                    ))}
                </div>
            </section>

            {/* SECURITY */}
            <section className="bg-green-50 py-12 px-4 text-center">
                <h2 className="text-3xl font-bold mb-3">
                    আপনার তথ্য সম্পূর্ণ নিরাপদ
                </h2>
                <p className="text-gray-600">
                    নিরাপদ ফর্ম সাবমিশন, প্রাইভেসি প্রোটেকশন এবং বিশ্বস্ত bKash
                    পেমেন্ট
                </p>
            </section>

            {/* FINAL CTA */}
            <section className="bg-blue-700 text-white text-center py-16 px-4">
                <h2 className="text-3xl font-bold mb-3">
                    এখনই আপনার আবেদন শুরু করুন
                </h2>
                <p className="mb-5 opacity-90">
                    মাত্র ২ মিনিটে আপনার আবেদন সম্পন্ন করুন
                </p>
                <button className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition">
                    আবেদন করুন ও পেমেন্ট করুন
                </button>
            </section>
        </div>
    );
}
