import FrontendLayout from "@/frontend/Layout/FrontendLayout";
import React from "react";
import { FaUserMd, FaPlaneDeparture, FaGlobe } from "react-icons/fa";

export default function Service() {
    const services = [
        {
            title: "GAMCA Medical Slip",
            desc: "Fast & secure WAFID medical appointment processing for GCC countries.",
            icon: <FaUserMd />,
            highlight: true,
        },
        {
            title: "Domestic Ticket",
            desc: "Book domestic flight tickets anywhere in Bangladesh at best price.",
            icon: <FaPlaneDeparture />,
        },
        {
            title: "International Ticket",
            desc: "Affordable international flight booking with full support.",
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
                <section className="bg-gradient-to-r from-pink-500 to-blue-400 text-white py-20 text-center">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                        Professional Travel & Medical Services
                    </h1>

                    <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                        Fast, reliable and secure processing for GAMCA medical
                        slip and flight ticket services.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="/#form"
                            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                        >
                            Apply Now
                        </a>

                        <a
                            href="https://wa.me/8801812894971"
                            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                        >
                            WhatsApp Support
                        </a>
                    </div>
                </section>

                {/* SERVICES */}
                <section className="py-20 max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-3">Our Services</h2>

                    <p className="text-gray-500 mb-12">
                        We provide complete support for your travel and medical
                        needs
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className={`relative bg-white p-8 rounded-2xl border transition duration-300 hover:-translate-y-2 hover:shadow-xl group
                            ${service.highlight ? "border-blue-500" : "border-gray-100"}`}
                            >
                                {/* Badge */}
                                {service.highlight && (
                                    <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                                        Most Popular
                                    </span>
                                )}

                                {/* Icon */}
                                <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-2xl group-hover:bg-blue-600 group-hover:text-white transition">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold mb-2">
                                    {service.title}
                                </h3>

                                {/* Desc */}
                                <p className="text-gray-500 text-sm mb-6">
                                    {service.desc}
                                </p>

                                <a
                                    href="/service"
                                    className="text-blue-600 font-medium hover:underline"
                                >
                                    Learn More →
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* COUNTRIES */}
                <section className="py-16 bg-white text-center">
                    <h2 className="text-2xl font-bold mb-10">GCC Countries</h2>

                    <div className="flex flex-wrap justify-center gap-8">
                        {countries.map((c) => (
                            <div
                                key={c.code}
                                className="hover:scale-105 transition"
                            >
                                <img
                                    src={`https://flagcdn.com/w80/${c.code}.png`}
                                    className="mx-auto mb-2 h-10 shadow-sm"
                                />
                                <p className="text-sm font-medium">{c.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section className="py-20 max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">How It Works</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            ["1. Fill Form", "Submit your details securely"],
                            ["2. Processing", "We handle your application"],
                            ["3. Get Slip", "Receive your medical slip fast"],
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                            >
                                <h3 className="font-semibold mb-2">
                                    {item[0]}
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    {item[1]}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PRICING */}
                <section className="py-16 text-center bg-gray-50">
                    <h2 className="text-3xl font-bold mb-6">Service Charge</h2>

                    <div className="inline-block bg-white px-10 py-8 rounded-2xl shadow-md">
                        <p className="text-3xl font-bold text-blue-600">
                            1500 BDT
                        </p>
                        <p className="text-gray-500 mt-2">
                            Delivery within 1–6 hours
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 text-center bg-gray-400 text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Need Help Getting Started?
                    </h2>

                    <p className="text-blue-100 mb-8">
                        Contact us anytime — we are ready to assist you
                    </p>

                    <a
                        href="tel:01812894971"
                        className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
                    >
                        Call Now
                    </a>
                </section>
            </div>
        </FrontendLayout>
    );
}
