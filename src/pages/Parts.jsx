import React from "react";
import logo from "@/assets/images/logo_white.png";
import Navbar from "../components/Navbar/Navbar";
import aboutImage from "@/assets/images/about_banner.jpeg";
import TopHeader from "../components/TopHeader";
import PartsCard from "../components/Parts/PartsCard";
import battery from "@/assets/images/Parts_Images/battery.png";
import tyres from "@/assets/images/Parts_Images/tyres.png";
import headlight from "@/assets/images/Parts_Images/headlight.png";
import { Icon } from "@iconify/react";

import motor from "@/assets/images/Parts_Images/motor.png";
import suspension from "@/assets/images/Parts_Images/suspension.png";
import Footer from "../components/Footer/Footer";

const Parts = () => {
  return (
    <div>
      <Navbar
        navMenuItemColor={"#F5F5F5"}
        logo={logo}
        hamburgerMenuColor="#fff"
      />
      <TopHeader
        imgName={aboutImage}
        title="Parts"
        description="Electric scooters are made up of key components that ensure a smooth and safe ride."
        breadcrumb="Parts"
      />
      <div className="px-10 xl:px-30 relative top-[500px]">
        <header className="mb-12">
          <h2 className="text-[#444] font-[600] font-Playfair tracking-[2.4px] text-[clamp(16px,30vw,24px)] text-center mb-3">
            PARTS
          </h2>
          <h1 className="text-[#000] font-[700] font-Playfair text-[clamp(30px,30vw,40px)] text-center tracking-[2.4px]">
            E-Rider Accessories
          </h1>
        </header>

        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[29px] gap-y-[46px] place-items-stretch place-content-between">
          <PartsCard
            imageName={battery}
            title="48V 24Ah Lithium Ion Battery Pack"
            model="JTECH 36V 7.8Ah (280Wh)"
          />
          <PartsCard
            imageName={tyres}
            title="Michelin City Pro 100/80-12"
            model="90/90-12 450X, TVS iQube"
          />
          <PartsCard
            imageName={headlight}
            title="Ather 450X LED Headlamp Unit"
            model="HS1 12V 35/35W"
          />
          <PartsCard
            imageName={battery}
            title="48V 24Ah Lithium Ion Battery Pack"
            model="JTECH 36V 7.8Ah (280Wh)"
          />
          <PartsCard
            imageName={headlight}
            title="Ather 450X LED Headlamp Unit"
            model="HS1 12V 35/35W"
          />
          <PartsCard
            imageName={battery}
            title="48V 24Ah Lithium Ion Battery Pack"
            model="JTECH 36V 7.8Ah (280Wh)"
          />
          <PartsCard
            imageName={tyres}
            title="Michelin City Pro 100/80-12"
            model="90/90-12 450X, TVS iQube"
          />
          <PartsCard
            imageName={headlight}
            title="Ather 450X LED Headlamp Unit"
            model="HS1 12V 35/35W"
          />
          <PartsCard
            imageName={battery}
            title="48V 24Ah Lithium Ion Battery Pack"
            model="JTECH 36V 7.8Ah (280Wh)"
          />
          <PartsCard
            imageName={headlight}
            title="Ather 450X LED Headlamp Unit"
            model="HS1 12V 35/35W"
          />
        </div>
        {/* Pagination */}
        <div className="flex items-center md:justify-end justify-center gap-2 my-10">
          <button className="p-[4px] bg-[#919EAB] rounded-[4px]">
            <Icon
              icon="lsicon:left-filled"
              width="24"
              height="24"
              style={{ color: "#C4CDD5" }}
            />
          </button>
          <button className="p-[4px] bg-[#FFF] rounded-[4px] h-[32px] w-[32px] border-[1px] border-solid border-[#00C853] ">
            1
          </button>
          <button className="p-[4px] bg-[#FFF] rounded-[4px] h-[32px] w-[32px] border-[1px] border-solid border-[#DFE3E8]">
            2
          </button>
          <button className="p-[4px] bg-[#FFF] rounded-[4px] h-[32px] w-[32px] border-[1px] border-solid border-[#DFE3E8]">
            ....
          </button>
          <button className="p-[4px] bg-[#FFF] rounded-[4px] h-[32px] w-[32px]border-[1px] border-solid border-[#DFE3E8]">
            9
          </button>
          <button className="p-[4px] bg-[#FFF] rounded-[4px] h-[32px] w-[32px] border-[1px] border-solid border-[#DFE3E8]">
            10
          </button>
          <button className="p-[4px] bg-[#FFF] rounded-[4px] border-[1px] border-solid border-[#DFE3E8]">
            <Icon
              icon="lsicon:right-filled"
              width="24"
              height="24"
              style={{ color: "#C4CDD5" }}
            />
          </button>
        </div>
      </div>

      <div className="relative top-[500px]">
        <Footer />
      </div>
    </div>
  );
};

export default Parts;
