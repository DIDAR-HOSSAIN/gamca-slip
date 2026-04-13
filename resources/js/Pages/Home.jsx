import React from "react";
import FrontendLayout from "@/frontend/Layout/FrontendLayout";
import { Head } from "@inertiajs/react";
import LandPage from "@/frontend/ui/LandPage";
import FloatingWhatsApp from "@/frontend/ui/FloatingWhatsApp";

const Home = ({ auth, results }) => {
    return (
        <FrontendLayout
            user={auth.user}
            header={
                <h1 className="font-semibold text-xl text-gray-800 leading-tight">
                    Home
                </h1>
            }
        >
            <Head title="Home" />

            {/* <HomeSearch results={results} /> */}
            <LandPage />
            <FloatingWhatsApp />
        </FrontendLayout>
    );
};

export default Home;
