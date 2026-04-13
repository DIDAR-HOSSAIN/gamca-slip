import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {

    const message = `আস্সালামু আলাইকুম 😊
    গামকা মেডিকেল স্লিপের জন্য আপনার পাসপোর্টের ক্লিয়ার ছবি এবং যে দেশে যাবেন তার নাম পাঠান।`;
    const whatsappLink = `https://wa.me/01812894971?text=${encodeURIComponent(message)}`;

return (
    <a href="https://wa.me/01812894971?text=আস্সালামু%20আলাইকুম%20😊%0A%0Aগামকা%20মেডিকেল%20স্লিপের%20জন্য%20আপনার%20পাসপোর্টের%20ক্লিয়ার%20ছবি%20এবং%20যে%20দেশে%20যাবেন%20তার%20নাম%20পাঠান।"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
    >
            <FaWhatsapp className="text-xl" />
            <span className="hidden sm:inline">Chat Now</span>
        </a>
    );
}
