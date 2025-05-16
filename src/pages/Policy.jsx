import React from 'react'
import logo from "@/assets/images/logo_white.png";
import aboutImage from "@/assets/images/about_banner.jpeg";
import Navbar from "../components/Navbar/Navbar";
import TopHeader from "../components/TopHeader";
import Footer from "@/components/Footer/Footer";

function Policy() {
    return (
        <div>
            <Navbar
                navMenuItemColor={"#F5F5F5"}
                logo={logo}
                hamburgerMenuColor="#F5F5F5"
            />
            <TopHeader
                imgName={aboutImage}
                title="Policy"
                description="Stay charged with the latest updates, tips, and stories from the world of electric mobility."
                breadcrumb="Policy"
            />
            <div className="px-10 xl:px-30 relative top-[500px]">
                <header className="mb-12">
                    <h2 className="text-[#444] font-[600] font-Playfair tracking-[2.4px] text-[clamp(16px,30vw,24px)] text-center mb-3">
                        Policy
                    </h2>
                    <h1 className="text-[#000] font-[700] font-Playfair text-[clamp(30px,30vw,40px)] text-center tracking-[2.4px]">
                        E-Vehicle Policies
                    </h1>
                </header>

                {/* Policy Content */}
                <div className=" mx-auto text-[#333] text-[18px]  font-Montserrat leading-8 font-[400] ">
                    <p className="mb-6 text-justify">
                        At <strong>Green Power</strong>, a brand by <strong>Nata Enterprises</strong>, we are committed to promoting safe, sustainable, and smart electric mobility. Our policies are designed to ensure the highest standards of performance, safety, and customer satisfaction in every ride.
                    </p>

                    <h3 className="text-[22px] font-[600] mb-3">1. Environmental Responsibility</h3>
                    <p className="mb-6 text-justify">
                        We support the global shift toward clean energy by offering zero-emission electric vehicles that help reduce air pollution and carbon footprint. Our manufacturing processes and materials are also aligned with eco-friendly standards.
                    </p>

                    <h3 className="text-[22px] font-[600] mb-3">2. Product Safety</h3>
                    <p className="mb-6 text-justify">
                        All Green Power e-scooters undergo rigorous safety tests and comply with national and international standards. We prioritize battery safety, vehicle stability, and smart control systems to ensure secure rides for our users.
                    </p>

                    <h3 className="text-[22px] font-[600] mb-3">3. Innovation & Technology</h3>
                    <p className="mb-6 text-justify">
                        Our R&D team continuously innovates to bring the latest features in battery life, speed control, GPS integration, and smart diagnostics. We aim to make electric mobility not just efficient but also intelligent.
                    </p>

                    <h3 className="text-[22px] font-[600] mb-3 ">4. Customer Support</h3>
                    <p className="mb-6 text-justify">
                        We offer comprehensive customer support including warranties, regular maintenance checks, and real-time assistance through our service centers and digital platforms.
                    </p>

                    <h3 className="text-[22px] font-[600] mb-3">5. Compliance & Legal</h3>
                    <p className="mb-6 text-justify">
                        Green Power complies with all local and national transportation regulations, including electric vehicle registration, insurance, and traffic laws.
                    </p>
                </div>
            </div>

            <div className="relative top-[500px]">
                <Footer />
            </div>
        </div>
    )
}

export default Policy
