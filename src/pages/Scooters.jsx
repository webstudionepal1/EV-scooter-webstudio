import Navbar from "../components/Navbar/Navbar";
import logo from "@/assets/images/logo_white.png";
import aboutImage from "@/assets/images/about_banner.jpeg";
import TopHeader from "../components/TopHeader";
import ScooterCard from "../components/Scooter/ScooterCard";
import scooter1 from "@/assets/images/scooter1.png";
import scooter2 from "@/assets/images/scooter2.png";
import scooter3 from "@/assets/images/scooter3.png";
import Footer from "@/components/Footer/Footer";

const Scooters = () => {
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
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-y-6">
          <ScooterCard
            title="Autoev R100"
            imageName={scooter1}
            range="100 KM"
            topSpeed="70 Km/h"
            motorPower="3000 Watt"
          />
          <ScooterCard
            title="Autoev R200"
            imageName={scooter2}
            range="130 KM"
            topSpeed="100 Km/h"
            motorPower="3500 Watt"
          />
          <ScooterCard
            title="Autoev R300"
            imageName={scooter3}
            range="150 KM"
            topSpeed="120 Km/h"
            motorPower="4000 Watt"
          />
          <ScooterCard
            title="Autoev R100"
            imageName={scooter1}
            range="100 KM"
            topSpeed="70 Km/h"
            motorPower="3000 Watt"
          />
          <ScooterCard
            title="Autoev R200"
            imageName={scooter2}
            range="130 KM"
            topSpeed="100 Km/h"
            motorPower="3500 Watt"
          />
          <ScooterCard
            title="Autoev R300"
            imageName={scooter3}
            range="150 KM"
            topSpeed="120 Km/h"
            motorPower="4000 Watt"
          />
          <ScooterCard
            title="Autoev R100"
            imageName={scooter1}
            range="100 KM"
            topSpeed="70 Km/h"
            motorPower="3000 Watt"
          />
          <ScooterCard
            title="Autoev R200"
            imageName={scooter2}
            range="130 KM"
            topSpeed="100 Km/h"
            motorPower="3500 Watt"
          />
          <ScooterCard
            title="Autoev R300"
            imageName={scooter3}
            range="150 KM"
            topSpeed="120 Km/h"
            motorPower="4000 Watt"
          />
          <ScooterCard
            title="Autoev R100"
            imageName={scooter1}
            range="100 KM"
            topSpeed="70 Km/h"
            motorPower="3000 Watt"
          />
          <ScooterCard
            title="Autoev R200"
            imageName={scooter2}
            range="130 KM"
            topSpeed="100 Km/h"
            motorPower="3500 Watt"
          />
          <ScooterCard
            title="Autoev R300"
            imageName={scooter3}
            range="150 KM"
            topSpeed="120 Km/h"
            motorPower="4000 Watt"
          />
        </div>
      </div>

      <div className="relative top-[500px]">
        <Footer />
      </div>
    </div>
  );
};

export default Scooters;
