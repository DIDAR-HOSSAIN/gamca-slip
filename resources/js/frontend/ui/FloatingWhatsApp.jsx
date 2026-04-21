import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
    const phone = "8801812894971";

    const message =
        "Assalamu Alaikum ! GAMCA / WAFID Medical Slip সার্ভিসে আপনাকে স্বাগতম। আপনার আবেদন দ্রুত প্রসেস করার জন্য নিচের তথ্যগুলো পাঠান। নাম, গন্তব্য দেশ, মোবাইল নাম্বার, ও পাসপোর্টের ক্লিয়ার ছবি সংযুক্ত করুন। আমাদের টিম খুব শীঘ্রই আপনাকে সহায়তা করবে। ধন্যবাদ।";

    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-full shadow-xl hover:bg-green-600 transition duration-300 group"
        >
            {/* Icon */}
            <FaWhatsapp className="text-2xl group-hover:scale-110 transition" />

            {/* Text */}
            <span className="hidden sm:inline font-medium">
                WhatsApp Support
            </span>

            {/* Pulse Animation */}
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-ping"></span>
        </a>
    );
}
