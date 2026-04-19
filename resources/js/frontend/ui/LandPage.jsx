import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import LandingPage from "./test";

export default function LandPage() {
    const message = `আস্সালামু আলাইকুম 😊
    গামকা মেডিকেল স্লিপের জন্য আপনার পাসপোর্টের ক্লিয়ার ছবি এবং যে দেশে যাবেন তার নাম পাঠান।`;
    const whatsappLink = `https://wa.me/01812894971?text=${encodeURIComponent(message)}`;

    return (
        <div className="bg-gray-50">
            {/* HERO SECTION */}
            <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                        GAMCA Medical Slip Service
                    </h1>

                    <LandingPage />

                </div>
            </section>
            
            {/* Medical centre list */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-2">
                {/* Primary Button */}
                <a
                    href="https://wafid.com/en/medical-center/search/?country=BD&city=&name="
                    className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition shadow"
                >
                    আপনার নিকটস্থ মেডিকেল সেন্টার দেখতে ক্লিক করুন
                </a>
            </div>
        </div>
    );
}
