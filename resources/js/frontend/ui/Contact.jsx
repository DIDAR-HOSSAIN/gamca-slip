import React, { useState } from "react";

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const inquiry = form.inquiry.value;

        try {
            await axiosApi.post("/contacts", {
                name,
                email,
                phone,
                inquiry,
            });

            setSuccessMessage("Message sent successfully!");
            form.reset();

            setTimeout(() => setSuccessMessage(""), 4000);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-24">
            <div className="max-w-7xl mx-auto px-4">
                {/* TITLE */}
                <div className="text-center mb-14">
                    <h1 className="text-4xl font-bold text-gray-800 mb-3">
                        Get In Touch
                    </h1>
                    <p className="text-gray-500">
                        We are ready to help you anytime — send message or
                        contact via WhatsApp
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* LEFT SIDE */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 h-full text-center">
                            {/* TITLE */}
                            <h2 className="text-2xl font-bold text-gray-800 mb-8 underline">
                                Contact Information
                            </h2>

                            {/* ADDRESS BLOCK */}
                            <div className="space-y-6 text-gray-600 text-sm">
                                <section className="py-16 px-4 text-center text-lg">
                                    <h2 className="text-2xl font-bold mb-4">
                                        যোগাযোগ
                                    </h2>
                                    <p>
                                        📍 953, O.R Nizam Road, Panchlaish,
                                        Chattogram
                                    </p>
                                    <p>📧 didarhossain018@gmail.com</p>
                                    <p>📞 01812894971</p>
                                </section>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE FORM */}
                    <div>
                        {successMessage && (
                            <div className="bg-green-100 text-green-700 text-center p-3 rounded-lg mb-6 font-medium">
                                {successMessage}
                            </div>
                        )}

                        <form
                            onSubmit={handleSubmit}
                            className="bg-white p-8 rounded-2xl shadow-md space-y-5"
                        >
                            <input
                                name="name"
                                type="text"
                                placeholder="Your Full Name"
                                required
                                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            />

                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                                />

                                <input
                                    name="phone"
                                    type="text"
                                    placeholder="Phone Number"
                                    required
                                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>

                            <textarea
                                name="inquiry"
                                rows="6"
                                placeholder="Write your message..."
                                required
                                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                            />

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
