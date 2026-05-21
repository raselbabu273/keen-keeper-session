// import React from 'react';

import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Page/Footer";

const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;