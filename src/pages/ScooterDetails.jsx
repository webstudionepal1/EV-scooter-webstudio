import Navbar from "../components/Navbar/Navbar";
import logo from "@/assets/images/nata_logo.png";
// import aboutImage from "@/assets/images/scooter_banner.jpeg";
import aboutImage from "@/assets/images/back.jpeg";
import TopHeader from "../components/TopHeader";
import ScooterInfoCard from "../components/ScooterDetails/ScooterInfoCard";
import range from "@/assets/images/icons/range.png";
import topSpeed from "@/assets/images/icons/topSpeed.png";
import motorPower from "@/assets/images/icons/motorPower.png";
import PowerAndPrecisionCard from "../components/ScooterDetails/PowerAndPrecisionCard";
import headLight from "@/assets/images/headlight.jpeg";
import seat from "@/assets/images/seat.jpeg";
import wheel from "@/assets/images/wheel.jpeg";
import charge from "@/assets/images/charge.jpeg";
import { useState } from "react";
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
import { useParams } from 'react-router-dom';
import collection from "@/assets/images/scooter10.png";
import collection1 from "@/assets/images/scooter5.png";
import collection2 from "@/assets/images/scooter9.png"
import Modal from "../components/UI/Modal";

// Static data array
const scooterCollections = [
  {
    id: 1,
    title: "RAZOR",
    image: collection,
    range: "120 Km/Hr",
    topSpeed: "60 Km/Hr",
    motorPower: "3200 Watt",
    accordionData: [
      {
        title: "Motor",
        description: "Type: Brushless DC motor<br/>Power: 2000W ",
      },
      {
        title: "Battery",
        description: "Type: Lithium 72/40AH<br />Voltage: 110V-220V<br />Charging time: 4-6 hours (fast charging)",
      },
      {
        title: "Performance",
        description: "Top speed: 60-65 Km/Hr <br />Acceleration (0-60 km/h): 4.2 seconds<br />Ideal Range:90-100 Km/Hr <br/> Pick Up: 3200",
      },
      {
        title: "Chassis",
        description: "Frame: Aluminum alloy frame<br />Suspension: Adjustable front and rear<br />Brakes: F/R Disc",
      },
      {
        title: "Dimensions",
        description: "Tyre: 90/90/12 <br/>Length: 2,050 mm<br />Width: 820 mm<br />Height: 1,120 mm<br />Seat height: 810 mm<br />Ground clearance: 180 mm<br />Weight: 120 kg",
      },
    ],
    variants: [
      { id: 1, name: "Ruby Red", image: collection },
      { id: 2, name: "Blue", image: collection1 },
      { id: 3, name: "Red", image: collection2 },
    ],
  },
  {
    id: 2,
    title: "F1-PRO",
    image: collection1,
    range: "100 Km/Hr",
    topSpeed: "65 Km/Hr",
    motorPower: "3200 Watt",
    accordionData: [
      {
        title: "Motor",
        description: "Type: Brushless DC motor<br/>Power: 2000W ",
      },
      {
        title: "Battery",
        description: "Type: Graphine 72/40AH<br />Voltage: 110V-220V<br />Charging time: 4-6 hours (fast charging)",
      },
      {
        title: "Performance",
        description: "Top speed: 60-65 Km/Hr <br />Acceleration (0-60 km/h): 4.2 seconds<br />Ideal Range:90-100 Km/Hr",
      },
      {
        title: "Chassis",
        description: "Frame: Aluminum alloy frame<br />Suspension: Adjustable front and rear<br />Brakes: F/R Disc",
      },
      {
        title: "Dimensions",
        description: "Tyre: 90/90/12 Vacuum Tyre<br/>Length: 2,050 mm<br />Width: 820 mm<br />Height: 1,120 mm<br />Seat height: 810 mm<br />Ground clearance: 180 mm<br />Weight: 120 kg",
      },
    ],
    variants: [
      { id: 1, name: "Blue", image: collection1 },
      { id: 2, name: " Red", image: collection2 },
      { id: 3, name: "Ruby Red", image: collection },
    ],
  },
  // {
  //   id: 3,
  //   title: "S1-PRO",
  //   image: collection2,
  //   range: "120 Km/Hr",
  //   topSpeed: "65 Km/Hr",
  //   motorPower: "2000 Watt",
  //   accordionData: [
  //     {
  //       title: "Motor",
  //       description: "Type: Brushless DC motor<br/>Power: 2000W ",
  //     },
  //     {
  //       title: "Battery",
  //       description: "Type: Lead Asid 72/38AH<br />Voltage: 110V-220V<br />Charging time: 4-6 hours (fast charging)",
  //     },
  //     {
  //       title: "Performance",
  //       description: "Top speed: 60-65 Km/Hr <br />Acceleration (0-60 km/h): 4.2 seconds<br />Ideal Range:90-100 Km/Hr",
  //     },
  //     {
  //       title: "Chassis",
  //       description: "Frame: Aluminum alloy frame<br />Suspension: Adjustable front and rear<br />Brakes: F/R Disc",
  //     },
  //     {
  //       title: "Dimensions",
  //       description: "Tyre: 90/90/12 <br/>Length: 2,050 mm<br />Width: 820 mm<br />Height: 1,120 mm<br />Seat height: 810 mm<br />Ground clearance: 190 mm<br />Weight: 120 kg",
  //     },
  //   ],
  //   variants: [
  //     { id: 3, name: "Red", image: collection2 },
  //     { id: 1, name: "Ruby Red", image: collection },
  //     { id: 2, name: "Blue", image: collection1 },

  //   ],
  // }
];

const ScooterDetails = () => {
  const { id } = useParams();
  const scooter = scooterCollections.find((s) => s.id === parseInt(id)) || scooterCollections[0]; // Fallback to first scooter if ID not found
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? scooter.variants.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === scooter.variants.length - 1 ? 0 : prevIndex + 1));
  };

  const getVisibleVariants = () => {
    const result = [];
    const length = scooter.variants.length;

    // Previous variant
    const prevIndex = activeIndex === 0 ? length - 1 : activeIndex - 1;
    result.push({ ...scooter.variants[prevIndex], position: "left" });

    // Active variant
    result.push({ ...scooter.variants[activeIndex], position: "center" });

    // Next variant
    const nextIndex = activeIndex === length - 1 ? 0 : activeIndex + 1;
    result.push({ ...scooter.variants[nextIndex], position: "right" });

    return result;
  };

  const visibleVariants = getVisibleVariants();

  return (
    <div>
      <Navbar
        navMenuItemColor={"#F5F5F5"}
        logo={logo}
        hamburgerMenuColor="#fff"
      />
      <TopHeader
        imgName={aboutImage}
        title={`${scooter.title} Details`}
        description={`Discover the perfect blend of style, performance, and efficiency with our ${scooter.title} model.`}
        breadcrumb={`${scooter.title} detail`}
      />
      {/* hero section */}
      <div className="relative top-[400px] w-full h-[770px] bg-[#F5F5F5]">

        <img
          src={scooter.image}
          alt={scooter.title}
          className="absolute -bottom-15  left-1/2 sm:w-[80%] sm:h-[80%]  self-stretch  -translate-x-1/2"
        />

        <div className="h-full w-full lg:px-5 xl:px-30 absolute">
          <h1 className="font-Playfair font-[700] text-[40px] text-center text-[#000] mt-10">
            Detailed Features {scooter.title}
          </h1>
          <div className="flex flex-col gap-4 mt-35">
            <ScooterInfoCard icons={range} title="Range" details={scooter.range} />
            <ScooterInfoCard icons={topSpeed} title="Top Speed" details={scooter.topSpeed} />
            <ScooterInfoCard icons={motorPower} title="Motor Power" details={scooter.motorPower} />
          </div>
        </div>
      </div>
      {/* Power and precision */}
      <div className="relative top-[400px] w-full h-[1200px]  sm:h-[770px] lg:px-5 xl:px-30">
        <h1 className="font-Playfair text-[#000] text-[40px] font-[700] text-center mt-32">
          Power & Precision
        </h1>

        <div className="mt-12 p-9 grid md:grid-cols-2 grid-cols-1 gap-y-[29px] gap-x-6">
          <PowerAndPrecisionCard
            imageName={headLight}
            title="Modern Headlamp"
            description="Minim aliqua non incididunt Pilferage minim nulla voluptate laboris ut ex ea commodo consequat." />
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
      <div className="w-full relative top-[200px] pt-9 bg-[#F5F5F5]">
        <h1 className="font-Playfair font-bold text-3xl md:text-4xl text-center text-black">
          Variant
        </h1>

        {/* Carousels */}
        <div className="relative flex items-center justify-center h-[500px] md:h-[800px] overflow-hidden">
          {/* Left arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 z-10 bg-black rounded-full p-2 shadow-md cursor-pointer transition-colors"
            aria-label="Previous variant"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17.1799 3.58472L18.2344 4.66472L10.8994 11.9997L18.2344 19.3347L17.1799 20.4147L9.30487 12.5397L8.76637 11.9997L9.30487 11.4597L17.1799 3.58472ZM11.9299 3.58472L12.9851 4.66472L5.64787 11.9997L12.9844 19.3347L11.9299 20.4147L4.05487 12.5397L3.51637 11.9997L4.05487 11.4597L11.9299 3.58472Z" fill="white" />
            </svg>
          </button>

          {/* Images */}
          <div className="relative w-full flex justify-center items-center">
            {visibleVariants.map((variant) => {
              const position = variant.position;

              return (
                <div
                  key={variant.id}
                  className={`absolute transition-all duration-300 ease-in-out ${position === "left"
                    ? "lg:-left-40 hidden lg:block -translate-x-1/4 opacity-40 scale-75 z-0"
                    : position === "right"
                      ? "lg:-right-40 hidden lg:block translate-x-1/4 opacity-40 scale-75 z-0"
                      : "opacity-100 z-10"
                    }`}
                >
                  <img
                    src={variant.image}
                    alt={variant.name}
                    width={800}
                    height={800}
                    className="object-contain"
                    priority={position === "center"}
                  />
                  {position === "center" && <div className="font-Playfair text-center text-lg md:text-xl font-bold mt-4">{variant.name}</div>}
                </div>
              );
            })}
          </div>

          {/* Right arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 z-10 bg-black rounded-full p-2 shadow-md cursor-pointer transition-colors"
            aria-label="Next variant"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6.82012 20.4153L5.76563 19.3353L13.1006 12.0003L5.76563 4.66528L6.82013 3.58529L14.6951 11.4603L15.2336 12.0003L14.6951 12.5403L6.82012 20.4153ZM12.0701 20.4153L11.0149 19.3353L18.3521 12.0003L11.0156 4.66529L12.0701 3.58529L19.9451 11.4603L20.4836 12.0003L19.9451 12.5403L12.0701 20.4153Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>

      {/* Detail specification */}
      <div className="w-full relative top-[200px] px-5 lg:px-5 xl:px-30">
        <h1 className="font-Playfair font-[700] text-[40px] text-center text-[#000] mt-12">
          Detail Specification
        </h1>
        {/* accordions */}
        <div className="max-w-[784px] m-auto">
          {scooter.accordionData.map((item, index) => (
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
      <div className="w-full relative top-[200px] px-4 lg:px-5 xl:px-30 py-[47px] bg-[#049140] mt-25">
        <div className="flex justify-between items-center">
          <h1 className="font-Playfair text-[#F5F5F5] text-[24px] font-[800]">
            Ready to Drive into the Future
          </h1>
          <Button
            title="Book a Test Drive"
            bgColor="#000"
            textColor="#fff"
            hoverBgColor="#fff"
            hoverTextColor="#000"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Footer */}
      <div className="relative top-[200px]">
        <Footer />
      </div>
    </div>
  );
};

export default ScooterDetails;