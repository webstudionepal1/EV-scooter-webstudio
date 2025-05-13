import logo from "@/assets/images/logo.png";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Home/Hero/HeroSection";
import About from "../components/Home/About Us/About";
import frame from "@/assets/images/frame.jpeg";
import { Icon } from "@iconify/react";
import Trending from "../components/Home/Trending/Trending";
import Collection from "../components/Home/ScooterCollection/Collection";
import CustomerTestimonial from "../components/Home/Testimonial/CustomerTestimonial";
import HeroBlog from "../components/Home/Blog/HeroBlog";
import Footer from "../components/Footer/Footer";
import PartsCard from "../components/Parts/PartsCard";
import battery from "@/assets/images/Parts_Images/battery.png";
import tyres from "@/assets/images/Parts_Images/tyres.png";
import headlight from "@/assets/images/Parts_Images/headlight.png";
import { useNavigate } from "react-router-dom";

const App = () => {
  const parts = [
    {
      id: 1,
      image: battery,
      title: "48V 24Ah Lithium Ion Battery Pack",
      model: "JTECH 36V 7.8Ah (280Wh)",
    },
    {
      id: 2,
      image: tyres,
      title: "Michelin City Pro 100/80-12",
      model: "90/90-12 450X, TVS iQube",
    },
    {
      id: 3,
      image: headlight,
      title: "Ather 450X LED Headlamp Unit",
      model: "HS1 12V 35/35W",
    },
    {
      id: 4,
      image: battery,
      title: "48V 24Ah Lithium Ion Battery Pack",
      model: "JTECH 36V 7.8Ah (280Wh)",
    },
  ];
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/features");
  };

  return (
    <div className="w-full">
      <Navbar navMenuItemColor={"#000"} logo={logo} />
      <HeroSection />
      <About />

      <div className="px-4 xl:px-30 lg:px-5">
        <div className="relative  w-full 2xl:h-[800px] h-[450px] md:my-20 my-5 rounded-tl-[100px] rounded-br-[100px] overflow-hidden">
          <img src={frame} alt="" className="w-full h-full object-cover" />
          <div className="absolute bottom-5 left-7">
            <div className="flex flex-row items-center gap-3">
              <Icon icon="mdi:youtube" width="50" height="50" color="white" />
              <p className="font-Poppins font-[500] xl:text-lg text-base text-white">
                Watch Our Video
              </p>
            </div>
          </div>
        </div>
      </div>

      <Trending />
      {/* Parts */}

      <div className="xl:px-30 lg:px-5 px-4 my-20 w-full">
        <header className="mb-12 flex flex-col items-center justify-center gap-3">
          <h2 className="text-[#444] font-[600] font-Playfair tracking-[2.4px] text-[clamp(16px,30vw,24px)] text-center">
            PARTS
          </h2>
          <h1 className="text-[#000] font-[700] font-Playfair text-[clamp(30px,30vw,40px)] text-center tracking-[2.4px] -mt-[4px]">
            E-Rider Accessories
          </h1>
          <button onClick={handleClick} className="text-[#FFF] bg-black font-Poppins font-[600] text-base p-3 hover:bg-[#00C853] hover:rounded-tl-2xl hover:rounded-br-2xl transition-all ease-in duration-300 cursor-pointer w-fit">
            View All
          </button>
        </header>
        <div>
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[29px] gap-y-[46px] place-items-stretch place-content-between">
            {parts.map((part) => (
              <PartsCard
                key={part.id}
                imageName={part.image}
                title={part.title}
                model={part.model}
              />
            ))}
          </div>
          {/* indicator */}
          <div className="flex justify-center gap-1 self-stretch mt-[46px] m-auto">
            <div className="h-[1px] w-[30%] bg-[#DBDBDB]"></div>
            {/* active */}
            <div className="h-[1px] w-[30%] bg-[#464646] "></div>
            <div className="h-[1px] w-[30%] bg-[#DBDBDB]"></div>
          </div>
        </div>

        <Collection />
        <CustomerTestimonial />
        <HeroBlog />

        <div className="flex flex-col gap-15 xl:px-30 lg:px-5 items-center justify-center mt-20">
          <div className="2xl:w-2/5">
            <h1 className="font-Playfair self-stretch text-[#000] text-[40px] font-[700] leading-[normal] tracking-[2.4px] text-center">
              Join Our Exclusive <br /> Community And Stay Updated
            </h1>
          </div>
          <div className="2xl:w-2/5 h-15 flex items-center p-5 gap-3 bg-white rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent focus:outline-none text-md w-full text-poppins h-12"
            />
            <button className="bg-black text-white p-3 rounded-full h-12 w-12 flex items-center justify-center hover:bg-[#00C853] transition-all ease-in duration-300 cursor-pointer">
              <Icon
                icon="iconamoon:arrow-right-1-light"
                color="white"
                width="30"
                height="30"
              />
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
