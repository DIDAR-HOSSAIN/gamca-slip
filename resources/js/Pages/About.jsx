import FrontendLayout from "@/frontend/Layout/FrontendLayout";
import React from "react";
import {
    FaUserMd,
    FaPlane,
    FaGlobe,
    FaShieldAlt,
    FaClock,
    FaHeadset,
    FaCheckCircle,
} from "react-icons/fa";

export default function About() {
    return (
        <FrontendLayout>
            <section className="bg-gradient-to-b from-white to-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-7">
                        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                            About Our Company
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
                            Trusted Platform for{" "}
                            <span className="text-blue-600">Medical Slip</span>{" "}
                            & Travel Services
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed mb-5">
                            We specialize in{" "}
                            <b>GAMCA / WAFID medical appointment processing</b>,
                            domestic airline ticket booking, and international
                            travel solutions. Our system is designed to make
                            your process fast, simple, and stress-free.
                        </p>

                        <p className="text-gray-600 leading-relaxed mb-8">
                            Thousands of clients trust us because we handle
                            everything professionally — from passport submission
                            to final medical slip delivery — with full support
                            and transparency.
                        </p>

                        {/* FEATURE GRID */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {[
                                {
                                    icon: <FaUserMd />,
                                    text: "Medical Processing",
                                },
                                { icon: <FaPlane />, text: "Flight Booking" },
                                { icon: <FaGlobe />, text: "Global Service" },
                                {
                                    icon: <FaShieldAlt />,
                                    text: "Secure Handling",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
                                >
                                    <span className="text-blue-600 text-xl">
                                        {item.icon}
                                    </span>
                                    <span className="text-gray-700 font-medium text-sm">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/#form"
                                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition text-center"
                            >
                                Get Started Now
                            </a>

                            <a
                                href="https://wa.me/8801767774027"
                                className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition text-center"
                            >
                                WhatsApp Support
                            </a>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* TOP CARD */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-3 mb-4">
                                <FaClock className="text-blue-600 text-2xl" />
                                <h3 className="text-lg font-semibold">
                                    Fast Processing
                                </h3>
                            </div>

                            <p className="text-gray-600 text-sm">
                                We complete most medical slip applications
                                within a few hours depending on system
                                availability.
                            </p>

                            <div className="mt-4 flex items-center text-green-600 text-sm font-medium">
                                <FaCheckCircle className="mr-2" />
                                1–6 Hours Delivery
                            </div>
                        </div>

                        {/* SUPPORT CARD */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-3 mb-4">
                                <FaHeadset className="text-blue-600 text-2xl" />
                                <h3 className="text-lg font-semibold">
                                    24/7 Support
                                </h3>
                            </div>

                            <p className="text-gray-600 text-sm">
                                Our team is always available on WhatsApp and
                                phone for instant support.
                            </p>

                            <div className="mt-4 flex items-center text-green-600 text-sm font-medium">
                                <FaCheckCircle className="mr-2" />
                                Instant Response
                            </div>
                        </div>

                        {/* STATS */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-blue-600 text-white p-5 rounded-2xl text-center">
                                <p className="text-2xl font-bold">1000+</p>
                                <p className="text-xs opacity-90">Clients</p>
                            </div>

                            <div className="bg-blue-600 text-white p-5 rounded-2xl text-center">
                                <p className="text-2xl font-bold">24/7</p>
                                <p className="text-xs opacity-90">Support</p>
                            </div>

                            <div className="bg-blue-600 text-white p-5 rounded-2xl text-center">
                                <p className="text-2xl font-bold">Fast</p>
                                <p className="text-xs opacity-90">Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}
