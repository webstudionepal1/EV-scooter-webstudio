import Navbar from "../components/Navbar/Navbar";
import logo from "@/assets/images/logo.png";
import aboutImage from "@/assets/images/bgloaders.jpeg";

import TopHeader from "../components/TopHeader";
import collection from "@/assets/images/vector/Loader1 (1).jpeg";
import collection1 from "@/assets/images/vector/Loader1 (2).jpeg";
import Footer from "@/components/Footer/Footer";

const Loaders = () => {
  const loaderData = [
    { id: 1, image: collection },
    { id: 2, image: collection1 },
  ];

  const sharedFeatures = [
    { label: "Size", value: "L2900 * W1300 * H1100" },
    { label: "Loading Capacity", value: "800 to 1000 kg" },
    { label: "Motor Type", value: "Electric Control AC Motor" },
    { label: "Power", value: "3500W" },
    { label: "Speed", value: "30-40 km/hr" },
    { label: "Battery Capacity", value: "180AH/60" },
    { label: "Charging Time", value: "6-8 Hrs" },
    { label: "Input Voltage", value: "220V" },
    { label: "Brake", value: "Front Disc Brake, Hand Brake" },
    { label: "Weight", value: "420kg" },
    { label: "Ideal Range", value: "80km" },
  ];

  return (
    <div>
      <Navbar
        navMenuItemColor="#F5F5F5"
        logo={logo}
        hamburgerMenuColor="#fff"
      />

      <TopHeader
        imgName={aboutImage}
        title="Loaders"
        description="Electric Three Wheelers (Tri-Cycle) EV"
        breadcrumb="Loaders"
      />

      {/* Loader Images */}
      <div className="px-5 xl:px-30 relative top-[500px]">
       <div className="grid md:grid-cols-2 grid-cols-1 gap-10 place-items-center">
  {loaderData.map((loader) => (
    <div
      key={loader.id}
      className="group relative w-full max-w-[800px] h-[500px] overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
    >
      <img
        src={loader.image}
        alt={`Loader ${loader.id}`}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />
      <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-40 transition duration-300 rounded-3xl"></div>
     
    </div>
  ))}
</div>


        {/* Shared Features Section */}
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
            Loader Specifications
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            {sharedFeatures.map((feature, index) => (
              <li key={index}>
                <span className="font-semibold">{feature.label}:</span> {feature.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative top-[500px]">
        <Footer />
      </div>
    </div>
  );
};

export default Loaders;
