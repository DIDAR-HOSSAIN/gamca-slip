import FrontendLayout from "@/frontend/Layout/FrontendLayout";
import React from "react";
import {
    FaUserMd,
    FaPlaneDeparture,
    FaGlobe,
    FaCheckCircle,
    FaShieldAlt,
    FaClock,
    FaWhatsapp,
} from "react-icons/fa";

export default function Service() {

    const phone = "8801812894971";
    const message =
        "Assalamu Alaikum ! GAMCA / WAFID Medical Slip সার্ভিসে আপনাকে স্বাগতম। আপনার আবেদন দ্রুত প্রসেস করার জন্য নিচের তথ্যগুলো পাঠান। নাম, গন্তব্য দেশ, মোবাইল নাম্বার, ও পাসপোর্টের ক্লিয়ার ছবি সংযুক্ত করুন। আমাদের টিম খুব শীঘ্রই আপনাকে সহায়তা করবে। ধন্যবাদ।";

    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
        message.trim(),
    )}`;

    const services = [
        {
            title: "GAMCA / WAFID Medical Slip",
            desc: "Complete online medical slip processing for GCC countries. We handle registration, payment & booking on your behalf.",
            icon: <FaUserMd />,
            highlight: true,
        },
        {
            title: "Domestic Air Ticket",
            desc: "Book flights anywhere in Bangladesh at competitive prices with reliable support.",
            icon: <FaPlaneDeparture />,
        },
        {
            title: "International Air Ticket",
            desc: "Affordable international flight booking with visa & travel assistance support.",
            icon: <FaGlobe />,
        },
    ];

    const countries = [
        { name: "Bahrain", code: "bh" },
        { name: "Kuwait", code: "kw" },
        { name: "Oman", code: "om" },
        { name: "Qatar", code: "qa" },
        { name: "Saudi Arabia", code: "sa" },
        { name: "UAE", code: "ae" },
        { name: "Yemen", code: "ye" },
    ];

    return (
        <FrontendLayout>
            <div className="bg-gray-50 text-gray-800">
                {/* HERO */}
                <section className="bg-gray-500 text-white py-20 text-center px-4">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                        Professional Medical & Travel Services
                    </h1>

                    <p className="max-w-2xl mx-auto mb-8 text-blue-100">
                        Fast, secure and hassle-free GAMCA / WAFID medical slip
                        processing with trusted support. No dollar card
                        required.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="/gamca-slip/create"
                            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                        >
                            Apply Now
                        </a>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-green-500 text-white px-7 py-3 rounded-xl font-semibold hover:bg-green-600 transition shadow-md"
                        >
                            <FaWhatsapp className="text-xl" />
                            WhatsApp এ সাহায্য নিন
                        </a>
                    </div>
                </section>

                {/* TRUST / WHY US */}
                <section className="py-16 bg-white text-center px-4">
                    <h2 className="text-3xl font-bold mb-4">
                        Why Choose Our Service?
                    </h2>

                    <p className="text-gray-500 max-w-2xl mx-auto mb-10">
                        আমরা ১০০০+ সফল মেডিকেল স্লিপ সম্পন্ন করেছি এবং প্রতিটি
                        ক্লায়েন্টকে দ্রুত ও নিরাপদ সার্ভিস প্রদান করি।
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <FaClock className="text-blue-600 text-2xl mb-3 mx-auto" />
                            <h3 className="font-semibold mb-2">
                                Fast Processing
                            </h3>
                            <p className="text-sm text-gray-500">
                                1–6 ঘন্টার মধ্যে আপনার মেডিকেল স্লিপ সম্পন্ন
                            </p>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-xl">
                            <FaShieldAlt className="text-green-600 text-2xl mb-3 mx-auto" />
                            <h3 className="font-semibold mb-2">100% Secure</h3>
                            <p className="text-sm text-gray-500">
                                আপনার তথ্য সম্পূর্ণ নিরাপদভাবে সংরক্ষণ করা হয়
                            </p>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-xl">
                            <FaCheckCircle className="text-indigo-600 text-2xl mb-3 mx-auto" />
                            <h3 className="font-semibold mb-2">
                                Trusted Service
                            </h3>
                            <p className="text-sm text-gray-500">
                                হাজারো ক্লায়েন্টের বিশ্বাস অর্জন করেছি
                            </p>
                        </div>
                    </div>
                </section>

                {/* SERVICES */}
                <section className="py-20 max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-3">Our Services</h2>

                    <p className="text-gray-500 mb-12">
                        Complete solution for your medical and travel needs
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className={`relative bg-white p-8 rounded-2xl border transition hover:-translate-y-2 hover:shadow-xl
                                ${service.highlight ? "border-blue-500" : "border-gray-100"}`}
                            >
                                {service.highlight && (
                                    <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                                        Most Popular
                                    </span>
                                )}

                                <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-2xl">
                                    {service.icon}
                                </div>

                                <h3 className="text-lg font-semibold mb-2">
                                    {service.title}
                                </h3>

                                <p className="text-gray-500 text-sm mb-6">
                                    {service.desc}
                                </p>

                                <a
                                    href="/gamca-slip/create"
                                    className="text-blue-600 font-medium hover:underline"
                                >
                                    Get Service →
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* COUNTRIES */}
                <section className="py-16 bg-gray-50 text-center px-4">
                    <h2 className="text-2xl font-bold mb-10">
                        GCC Approved Countries
                    </h2>

                    <div className="flex flex-wrap justify-center gap-8">
                        {countries.map((c) => (
                            <div key={c.code}>
                                <img
                                    src={`https://flagcdn.com/w80/${c.code}.png`}
                                    className="mx-auto mb-2 h-10"
                                />
                                <p className="text-sm font-medium">{c.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PRICING */}
                <section className="py-16 text-center bg-white">
                    <h2 className="text-3xl font-bold mb-6">Service Charge</h2>

                    <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-10 py-8 rounded-2xl shadow-lg">
                        <p className="text-4xl font-bold">1500 BDT</p>
                        <p className="mt-2 text-blue-100">
                            Fast Delivery (1–6 Hours)
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 text-center bg-gray-500 text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Get Your Medical Slip?
                    </h2>

                    <p className="mb-8">
                        Apply now or contact us for instant support
                    </p>

                    <div className="flex justify-center gap-4 flex-wrap">
                        <a
                            href="/gamca-slip/create"
                            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold"
                        >
                            Apply Now
                        </a>

                        <a
                            href="tel:01812894971"
                            className="bg-green-500 px-6 py-3 rounded-lg font-semibold"
                        >
                            Call Now
                        </a>
                    </div>
                </section>
            </div>
        </FrontendLayout>
    );
}
