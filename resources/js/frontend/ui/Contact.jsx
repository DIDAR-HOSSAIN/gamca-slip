import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        inquiry: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post("/contacts", {
            preserveScroll: true,

            onSuccess: () => {
                setSuccessMessage("Message sent successfully!");
                reset();

                setTimeout(() => {
                    setSuccessMessage("");
                }, 4000);
            },
        });
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
                        We are ready to help you anytime
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* LEFT */}
                    <div className="bg-white p-8 rounded-2xl shadow-md border text-center">
                        <h2 className="text-2xl font-bold mb-6">যোগাযোগ</h2>

                        <div className="space-y-4 text-gray-600">
                            <p>
                                📍 953, O.R Nizam Road, Panchlaish, Chattogram
                            </p>
                            <p>📧 didarhossain018@gmail.com</p>
                            <p>📞 01812894971</p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div>
                        {successMessage && (
                            <div className="mb-5 bg-green-100 text-green-700 p-3 rounded-lg text-center">
                                {successMessage}
                            </div>
                        )}

                        <form
                            onSubmit={handleSubmit}
                            className="bg-white p-8 rounded-2xl shadow-md space-y-5"
                        >
                            {/* Name */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Full Name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="w-full border rounded-lg p-3"
                                />

                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Email + Phone */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="w-full border rounded-lg p-3"
                                    />

                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                        className="w-full border rounded-lg p-3"
                                    />

                                    {errors.phone && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <textarea
                                    rows="6"
                                    placeholder="Write your message..."
                                    value={data.inquiry}
                                    onChange={(e) =>
                                        setData("inquiry", e.target.value)
                                    }
                                    className="w-full border rounded-lg p-3"
                                />

                                {errors.inquiry && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.inquiry}
                                    </p>
                                )}
                            </div>

                            {/* Submit */}
                            <button
                                disabled={processing}
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                            >
                                {processing ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
