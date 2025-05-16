import React from 'react'
import aboutImage from "@/assets/images/about_banner.jpeg";
import logo from "@/assets/images/logo_white.png";
import Navbar from "../components/Navbar/Navbar";
import TopHeader from "../components/TopHeader";
import Footer from "@/components/Footer/Footer";

function Condtion() {
    return (
        <div>
            <Navbar
                navMenuItemColor={"#F5F5F5"}
                logo={logo}
                hamburgerMenuColor="#F5F5F5"
            />
            <TopHeader
                imgName={aboutImage}
                title="Our Conditions"
                description="Stay charged with the latest updates, tips, and stories from the world of electric mobility."
                breadcrumb="Condition"
            />
            <div className="px-10 xl:px-30 relative top-[500px]">
                <header className="mb-12">
                    <h2 className="text-[#444] font-[600] font-Playfair tracking-[2.4px] text-[clamp(16px,30vw,24px)] text-center mb-3">
                        Our Conditions
                    </h2>
                    <h1 className="text-[#000] font-[700] font-Playfair text-[clamp(30px,30vw,40px)] text-center tracking-[2.4px]">
                        Terms & Conditions
                    </h1>
                </header>

                {/* Conditions Content */}
                <div className="mx-auto text-[#333] font-Montserrat text-justify text-[18px] leading-8 font-[400]">
                    <p className="mb-6 ">
                        These Terms and Conditions govern the use of products and services offered by <strong>Green Power</strong>, a brand by <strong>Nata Enterprises</strong>. By purchasing or using our electric vehicles or related services, you agree to the following terms:
                    </p>

                    <h3 className="text-[22px] font-[600] mb-3">1. Product Usage</h3>
                    <p className="mb-6">
                        Our e-vehicles are intended for personal or commercial transportation within legal and safety boundaries. Misuse, unauthorized modifications, or illegal activities involving our vehicles may void warranty and service rights.
                    </p>

                    <h3 className="text-[22px] font-[600] mb-3">2. Warranty & Repairs</h3>
                    <p className="mb-6">
                        Green Power e-vehicles come with a limited warranty covering manufacturing defects. Warranty claims are subject to inspection by our service team and do not cover accidental damage, wear and tear, or misuse.
                    </p>

                    <h3 className="text-[22px] font-[600] mb-3">3. Safety & Compliance</h3>
                    <p className="mb-6">
                        Users must comply with local traffic laws, wear appropriate safety gear, and ensure regular maintenance. We are not liable for accidents or injuries resulting from negligence or non-compliance.
                    </p>

                    <h3 className="text-[22px] font-[600] mb-3">4. Payments & Refunds</h3>
                    <p className="mb-6">
                        All payments are processed securely. Refunds and cancellations are subject to our return policy. Custom orders may not be refundable once processed.
                    </p>

                    <h3 className="text-[22px] font-[600] mb-3">5. Intellectual Property</h3>
                    <p className="mb-6">
                        All branding, designs, and content associated with Green Power are the intellectual property of Nata Enterprises and may not be copied or used without permission.
                    </p>

                    <h3 className="text-[22px] font-[600] mb-3">6. Policy Updates</h3>
                    <p className="mb-6">
                        We reserve the right to update these terms at any time. Continued use of our products or services implies acceptance of any changes.
                    </p>

                    <p className="mt-10">
                        If you have questions about these terms, please contact our customer support team or visit your nearest Green Power dealer.
                    </p>
                </div>
            </div>
            <div className="relative top-[500px]">
                <Footer />
            </div>
        </div>
    )
}

export default Condtion
