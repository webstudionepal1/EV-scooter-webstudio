import { useNavigate } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import { Icon } from "@iconify/react";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="xl:px-30 lg:px-5 px-4 md:mt-10 mt-5 py-10">
      <hr className="w-[100%]  border-[#DBDBDB]" />
      <div className="flex flex-col ">
        {/* Upper section of footer */}
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="w-[160px] h-[110px] md:w-[160px] md:h-[110px]">
            <img src={logo} alt="logo" className="h-[80%] w-[80%] object-cover" />
          </div>

          <ul className="flex md:gap-10 gap-[3px] text-[#444] md:text-lg text-sm font-Poppins md:justify-end md:flex-row flex-col items-center cursor-pointer w-full" >
            <li onClick={() => { navigate("/about") }}>About Us </li>
            <li onClick={() => { navigate("/features") }}>Parts</li>
            <li onClick={() => { navigate("/condition") }}>Our Conditions</li>
            <li onClick={() => { navigate("/policy") }}>Policy</li>
            <li onClick={() => { navigate("/contact") }}>Contact</li>
          </ul>

        </div>
        <hr className="w-[100%]  border-[#DBDBDB]" />
        {/* Lower section of footer */}
        <div className="flex justify-between mt-10">
          <p className="text-[#000] text-lg font-Poppins flex imtes-center gap-2">
            <span>
              <Icon icon="mdi:copyright" width="30" height="30" />
            </span>
            2025 Electric Scooter
          </p>
          <div className="flex gap-5 text-[#000] text-lg font-Poppins">
            <a href="https://www.facebook.com/share/18d1qKdEqA/" className="cursor-pointer">
              <Icon icon="mdi:facebook" width="30" height="30" />
            </a>
            <a href="https://youtube.com/@greenpowerevscooter?si=S9SlIJfw3RmmvwZ1" className="cursor-pointer">
              <Icon icon="mdi:youtube" width="30" height="30" />
            </a>
            <a href="https://www.tiktok.com/@green.power.ev.sc?_t=ZS-8wTpl79rpOZ&_r=1" className="cursor-pointer">
              <Icon icon="ix:tiktok-logo" width="30" height="30" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
