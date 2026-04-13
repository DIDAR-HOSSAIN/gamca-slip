import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "@/frontend/ui/FloatingWhatsApp";

const FrontendLayout = ({ user, children }) => {
    return (
        <div>
            <Navbar user={user} />
            {children}
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
};

export default FrontendLayout;
