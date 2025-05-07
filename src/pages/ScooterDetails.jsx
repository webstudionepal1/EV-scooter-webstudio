import Navbar from "../components/Navbar/Navbar";
import logo from "@/assets/images/nata_logo.png";
import aboutImage from "@/assets/images/scooter_banner.jpeg";
import TopHeader from "../components/TopHeader";
import scooter from "@/assets/images/scooter.png";
import ScooterInfoCard from "../components/ScooterDetails/ScooterInfoCard";
import range from "@/assets/images/icons/range.png";
import topSpeed from "@/assets/images/icons/topSpeed.png";
import motorPower from "@/assets/images/icons/motorPower.png";
import PowerAndPrecisionCard from "../components/ScooterDetails/PowerAndPrecisionCard";
import headLight from "@/assets/images/headlight.jpeg";
import seat from "@/assets/images/seat.jpeg";
import wheel from "@/assets/images/wheel.jpeg";
import charge from "@/assets/images/charge.jpeg";
import carousel1 from "@/assets/images/carousel1.png";
import carousel2 from "@/assets/images/carousel2.png";
import carousel3 from "@/assets/images/carousel3.png";
import { Icon } from "@iconify/react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import parse from "html-react-parser";

import ContactInf from "@/components/Contact/ContactInf";
import batteryImage from "@/assets/images/icons/battery.png";
import fastChargeImage from "@/assets/images/icons/fastCharge.png";
import highPerformanceImage from "@/assets/images/icons/highPerformance.png";
import lowMaintainanceImage from "@/assets/images/icons/lowMaintainance.png";
import comfortDesignImage from "@/assets/images/icons/comfortDesign.png";
import tickScooterImage from "@/assets/images/icons/tickScooter.png";
import { Button } from "@/components/UI/Button";
import Footer from "@/components/Footer/Footer";

const ScooterDetails = () => {
  const accordionData = [
    {
      title: "Motor",
      description:
        "Type: Brushless DC motor<br/>Power: 40 kW (53 hp)<br/>Torque: 85 Nm",
    },
    {
      title: "Battery",
      description:
        "Type: Lithium-ion<br />Capacity: 10 kWh<br />Voltage: 96V<br />Charging time: 3 hours (fast charging)",
    },
    {
      title: "Performance",
      description:
        "Top speed: 160 km/h (99 mph)<br />Acceleration (0-100 km/h): 4.5 seconds<br />Range: Up to 200 km (124 miles) on a single charge (city riding)",
    },
    {
      title: "Chassis",
      description:
        "Frame: Steel trellis frame<br />Suspension: Front telescopic fork, rear mono-shock<br />Brakes: Front and rear disc brakes with ABS",
    },
    {
      title: "Dimensions",
      description:
        "Length: 2,000 mm<br />Width: 800 mm<br />Height: 1,100 mm<br />Seat height: 800 mm<br />Ground clearance: 150 mm<br />Weight: 180 kg (396 lbs)",
    },
  ];

  return (
    <div>
      <Navbar
        navMenuItemColor={"#F5F5F5"}
        logo={logo}
        hamburgerMenuColor="#fff"
      />
      <TopHeader
        imgName={aboutImage}
        title="Scooters Details"
        description="Discover the perfect blend of style, performance, and efficiency with our latest scooter model."
        breadcrumb="Scooters detail"
      />
      {/* hero section */}
      <div className="relative top-[400px] w-full h-[770px] bg-[#F5F5F5]">
        <div>
          <img
            src={scooter}
            alt=""
            className="absolute -bottom-30 left-1/2 -translate-x-1/2"
          />
        </div>
        <div className="h-full w-full lg:px-5 xl:px-30 absolute">
          <h1 className="font-Playfair font-[700] text-[40px] text-center text-[#000] mt-10">
            Detailed Features Autoev R100
          </h1>
          <div className="flex flex-col gap-4 mt-35">
            <ScooterInfoCard icons={range} title="Range" details="100 KM" />
            <ScooterInfoCard
              icons={topSpeed}
              title="Top Speed"
              details="70 Km/h"
            />
            <ScooterInfoCard
              icons={motorPower}
              title="Motor Power"
              details="3000 Watt"
            />
          </div>
        </div>
      </div>
      {/* Power and precision */}
      <div className="relative top-[500px] w-full h-[770px] lg:px-5 xl:px-30">
        <h1 className="font-Playfair text-[#000] text-[40px] font-[700] text-center mt-32">
          Power & Precision
        </h1>

        <div className="mt-12 p-9 grid md:grid-cols-2 grid-cols-1 gap-y-[29px] gap-x-6">
          <PowerAndPrecisionCard
            imageName={headLight}
            title="Modern Headlamp"
            description="Minim aliqua non incididunt irure laboris exercitation laborum cillum non cupidatat."
          />
          <PowerAndPrecisionCard
            imageName={seat}
            title="Spacious Seat"
            description="Minim aliqua non incididunt irure laboris exercitation laborum cillum non cupidatat."
          />
          <PowerAndPrecisionCard
            imageName={wheel}
            title="Large Wheels"
            description="Minim aliqua non incididunt irure laboris exercitation laborum cillum non cupidatat."
          />
          <PowerAndPrecisionCard
            imageName={charge}
            title="Quick Charge"
            description="Minim aliqua non incididunt irure laboris exercitation laborum cillum non cupidatat."
          />
        </div>
      </div>

      {/* Variant */}
      <div className="w-full relative top-[430px] py-9 bg-[#F5F5F5]">
        <h1 className="font-Playfair font-bold text-3xl md:text-4xl text-center text-black">
          Variant
        </h1>

        {/* Carousels */}
        <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-4 lg:h-[776px] px-4">
          {/* inactive left */}
          <div
            className="hidden lg:block w-[40%] max-w-[600px] h-[300px] lg:h-[567.95px] bg-cover bg-center bg-no-repeat opacity-35"
            style={{
              background: `url(${carousel1}) center center / cover no-repeat`,
            }}
          ></div>

          {/* active */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-[300px] md:h-[400px] lg:h-[567.95px] w-full max-w-[797px]">
              <div className="p-2 bg-black rounded-full cursor-pointer">
                <Icon
                  icon="icons8:double-left"
                  width="24"
                  height="24"
                  style={{ color: "#fff" }}
                />
              </div>
              <div className="w-[80%] h-full mx-4">
                <img
                  src={carousel2}
                  alt=""
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
              <div className="p-2 bg-black rounded-full cursor-pointer">
                <Icon
                  icon="icons8:double-right"
                  width="24"
                  height="24"
                  style={{ color: "#fff" }}
                />
              </div>
            </div>
            <h1 className="font-Playfair text-center text-lg md:text-xl font-bold mt-4">
              Blue Sky
            </h1>
          </div>

          {/* inactive right */}
          <div
            className="hidden lg:block w-[40%] max-w-[600px] h-[300px] lg:h-[567.95px] bg-cover bg-center bg-no-repeat opacity-35"
            style={{
              background: `url(${carousel3}) center center / cover no-repeat`,
            }}
          ></div>
        </div>
      </div>

      {/* Detail specification */}
      <div className="w-full relative top-[500px] lg:px-5 xl:px-30">
        <h1 className="font-Playfair font-[700] text-[40px] text-center text-[#000] mt-12">
          Detail Specification
        </h1>
        {/* accordions */}
        <div className="max-w-[784px] m-auto">
          {accordionData.map((item, index) => (
            <Accordion key={index} className="my-3">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <span className="font-Playfair text-[#000]  text-[20px] font-[700]">
                  {item.title}
                </span>
              </AccordionSummary>
              <AccordionDetails>
                <AccordionDetails className="w-full !p-0 !m-0">
                  <hr className="w-full !m-0 !p-0" />
                </AccordionDetails>
                <AccordionDetails>
                  <span className="text-[#444] font-Poppins text-[16px] font-[500] leading-[30px]">
                    {parse(item.description)}
                  </span>
                </AccordionDetails>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

        <h1 className="font-Playfair font-[700] text-[40px] text-center text-[#000] mt-12">
          Advanced Features
        </h1>

        {/* Advance Features */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-y-6 gap-x-4 mt-12">
          <ContactInf
            imageName={batteryImage}
            title="Long-Lasting Battery"
            description="Ride up to 120 km on a single charge."
          />
          <ContactInf
            imageName={fastChargeImage}
            title="Fast Charging"
            description="Fully charges in just 3–4 hours."
          />
          <ContactInf
            imageName={highPerformanceImage}
            title="High-Performance Motor"
            description="Powerful and smooth acceleration."
          />
          <ContactInf
            imageName={lowMaintainanceImage}
            title="Low Maintenance"
            description="Built for durability and easy care."
          />
          <ContactInf
            imageName={comfortDesignImage}
            title="Comfortable Design "
            description="Built for durability and easy care."
          />
          <ContactInf
            imageName={tickScooterImage}
            title="Comfortable Design "
            description="Built for durability and easy care."
          />
        </div>
      </div>
      {/* Ready to Drive into the Future */}
      <div className="w-full relative top-[500px] lg:px-5 xl:px-30 py-[47px] bg-[#049140] mt-25">
        <div className="flex justify-between items-center">
          <h1 className="font-Playfair text-[#F5F5F5] text-[24px] font-[800] ">
            Ready to Drive into the Future
          </h1>

          <Button
            title="Book a Test Drive"
            bgColor="#000"
            textColor="#fff"
            hoverBgColor="#fff"
            hoverTextColor="#000"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="relative top-[500px]">
        <Footer />
      </div>
    </div>
  );
};

export default ScooterDetails;
