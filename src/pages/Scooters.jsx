import Navbar from "../components/Navbar/Navbar";
import logo from "@/assets/images/logo.png";
import aboutImage from "@/assets/images/back.jpeg";

import TopHeader from "../components/TopHeader";
import ScooterCard from "../components/Scooter/ScooterCard";
import scooter1 from "@/assets/images/Razor.png";
import scooter2 from "@/assets/images/scooter2.png";
import scooter3 from "@/assets/images/eaglescooter.png";

import Footer from "@/components/Footer/Footer";
import { useNavigate } from "react-router-dom";
const Scooters = () => {
  // Static scooter data
  const scooterData = [
    {
      id: 1,
      title: "RAZOR",
      imageName: scooter1,
      range: "120 KM/Hr",
      topSpeed: "60 KM/Hr",
      motorPower: "3000 Watt",
    },
    {
      id: 2,
      title: "F1-PRO",
      imageName: scooter2,
      range: "100 KM/Hr",
      topSpeed: "65 KM/Hr",
      motorPower: "3000 Watt",
    },
    {
      id: 3,
      title: "EAGLE",
      imageName: scooter3,
      range: "100 KM/Hr",
      topSpeed: "60 KM/Hr",
      motorPower: "3200 Watt",
    },
  ];
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/scooterDetails/${id}`);
  };

  return (
    <div>
      <Navbar
        navMenuItemColor={"#F5F5F5"}
        logo={logo}
        hamburgerMenuColor="#fff"
      />
      <TopHeader
        imgName={aboutImage}
        title="Scooters"
        description="Our scooters are built for comfort, efficiency, and everyday convenience"
        breadcrumb="Scooters"
      />
      {/* scooters */}
      <div className="px-5 xl:px-30 relative top-[500px] ">
        <div className="grid 2xl:grid-cols-4  xl:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center 2xl:gap-x-40 gap-y-6">
          {scooterData.map((scooter) => (
            <ScooterCard
              key={scooter.id}
              title={scooter.title}
              imageName={scooter.imageName}
              range={scooter.range}
              topSpeed={scooter.topSpeed}
              motorPower={scooter.motorPower}
              onClick={() => handleClick(scooter.id)}
            />
          ))}
        </div>
      </div>

      <div className="relative top-[500px]">
        <Footer />
      </div>
    </div>
  );
};

export default Scooters;