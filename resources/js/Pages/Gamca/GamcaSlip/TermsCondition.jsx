import FrontendLayout from '@/frontend/Layout/FrontendLayout';
import React from 'react';

const TermsCondition = () => {
    return (
        <FrontendLayout>
            <section className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-5">
                    📋 Terms & Conditions
                </h2>

                <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                    <p>
                        ✅{" "}
                        <span className="font-semibold">
                            Valid Passport Required:
                        </span>{" "}
                        Applicant must have a valid passport with at least{" "}
                        <span className="font-semibold text-blue-700">
                            6 months validity
                        </span>
                        .
                    </p>

                    <p>
                        ✅{" "}
                        <span className="font-semibold">Service Charge:</span>{" "}
                        The service charge for GAMCA / WAFID Medical Slip
                        processing is{" "}
                        <span className="font-bold text-blue-700">
                            BDT 1500
                        </span>
                        .
                    </p>

                    <p>
                        ✅ <span className="font-semibold">Refund Policy:</span>{" "}
                        Once the medical slip is successfully issued, the
                        payment is{" "}
                        <span className="font-semibold text-red-600">
                            non-refundable
                        </span>
                        . If the slip cannot be issued for any valid reason, the
                        payment will be{" "}
                        <span className="font-semibold text-green-600">
                            fully refundable
                        </span>
                        .
                    </p>

                    <p>
                        ✅{" "}
                        <span className="font-semibold">Processing Time:</span>{" "}
                        Normally, slip processing takes{" "}
                        <span className="font-semibold">1–6 hours</span>,
                        depending on system availability.
                    </p>

                    <p>
                        ✅ <span className="font-semibold">Server Delay:</span>{" "}
                        In case of official WAFID / GAMCA server maintenance,
                        high traffic, technical issues, or payment gateway
                        delays, slip delivery may take longer than expected.
                    </p>

                    <p>
                        ✅{" "}
                        <span className="font-semibold">
                            Information Accuracy:
                        </span>{" "}
                        Applicants are responsible for providing accurate
                        passport and personal information. Incorrect information
                        may cause delays or rejection.
                    </p>

                    <p>
                        ✅{" "}
                        <span className="font-semibold">Document Quality:</span>{" "}
                        A clear and readable passport image must be provided for
                        successful processing.
                    </p>

                    <p>
                        🔒{" "}
                        <span className="font-semibold">
                            Privacy & Security:
                        </span>{" "}
                        All applicant information and documents are kept secure,
                        confidential, and used only for service processing
                        purposes.
                    </p>
                </div>
            </section>
        </FrontendLayout>
    );
};

export default TermsCondition;
