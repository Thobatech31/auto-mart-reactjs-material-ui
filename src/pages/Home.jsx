import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerSlider from "../components/Bannerslider";

const Home = () => {
    return (
        <div>
            <Navbar />
            <BannerSlider />
            <Footer />
        </div>
    );
};

export default Home;
