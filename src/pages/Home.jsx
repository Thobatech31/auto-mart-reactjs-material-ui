import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerSlider from "../components/Bannerslider";
import Cars from "../components/Cars"
const Home = () => {
    return (
        <div>
            <Navbar />
            <BannerSlider />
            <Cars />
            <Footer />
        </div>
    );
};

export default Home;
