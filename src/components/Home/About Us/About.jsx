import vector from "@/assets/images/about_scooter_vector.png";
import aboutFeatures from "@/assets/images/icons/aboutFeatures.png";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about")
  }
  return (
    <div className="px-[16px] xl:px-30 lg:px-5 flex flex-col xl:flex-row gap-[76px] justify-between lg:items-center md:mt-28 mt-42 min-h-[512px]">
      <div className="xl:w-1/2 w-full flex justify-around flex-col items-center md:items-start 2xl:gap-5 gap-3 md:gap-0 ">
        <h1 className="font-Playfair self-stretch text-[#444] 2xl:text-3xl text-[24px] not-italic font-semibold leading-[normal] tracking-[2.4px] text-center md:text-left">
          ABOUT US
        </h1>
        <h3 className="self-stretch text-black font-Playfair 2xl:text-5xl md:text-[40px] text-[34px] not-italic font-bold leading-[normal] md:tracking-[2.4px]">
          Crafting smarter, greener rides for every road.
        </h3>
        <p className="2xl:text-lg mt-[6px] text-[16px] text-[#444] text-justify font-Poppins font-[400]">
          At NATA Enterprises, we are driven by a vision of a cleaner, greener, and more sustainable Nepal. Based in Kathmandu, we are proud to introduce our latest innovation " Green Power" EV Scooters. Designed to revolutionize urban mobility through eco-friendly technology.
        </p>

        {/* feature container */}
        <div className="flex justify-between mt-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 p-3 md:text-xl text-lg">
              <div>
                <img src={aboutFeatures} alt="" />
              </div>
              <h3 className="text-[#101010] font-Poppins font-[500]">
                Zero contact travel
              </h3>
            </div>
            <p className="pr-4 text-xs font-Poppins text-[#444] font-[400] ">
              We love our customers and we love the way they come.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 p-3 md:text-xl text-lg">
              <div>
                <img src={aboutFeatures} alt="" />
              </div>
              <h3 className="text-[#101010] font-Poppins font-[500]">
                Reduced Noise Pollution
              </h3>
            </div>
            <p className=" pr-4 text-xs font-Poppins text-[#444] font-[400] ">
              We love our customers and we love the way they come.
            </p>
          </div>
        </div>

        {/* Ticked Item */}
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex text-[#8CC63F] gap-4">
            <Icon icon="lets-icons:check-fill" width="24" height="24" />
            <p className="text-[#101010] font-Poppins font-[500]">
              Detachable battery and  charge in 4 hours.
            </p>
          </div>

          <div className="flex text-[#8CC63F] gap-4">
            <Icon icon="lets-icons:check-fill" width="24" height="24" />
            <p className="text-[#101010] font-Poppins font-[500]">
              No need for fuel—charging an e-scooter is significantly cheaper than filling a gas tank.
            </p>
          </div>
        </div>

        {/* More about us button */}
        <button onClick={handleClick} className="text-[#FFF] bg-black font-Poppins font-[600] text-base p-3 hover:bg-[#00C853] hover:rounded-tl-2xl hover:rounded-br-2xl transition-all ease-in duration-300 cursor-pointer w-fit mt-4">
          More About Us
        </button>
      </div>
      <div className="xl:w-1/2 hidden xl:block px-10 w-full h-full">
        <img alt="Vector" src={vector} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default About;
