import { useState } from "react";
import SearchBar from "./SearchBar";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const SearchAndContact = () => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div className=" items-center 2xl:gap-14 lg:gap-4 flex">
      {/* searchbar */}
      <div className="hidden md:block">
        <SearchBar />
      </div>

      {/* contact */}
      <div className="flex items-center">
        <button
          className={`p-3 font-Montserrat text-sm rounded-full ${
            hover ? "bg-[#00C853] text-white" : "bg-white"
          }  ease-in transition-all duration-300 cursor-pointer`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
        <button
          className={`p-3  ${
            hover ? "bg-[#00C853] text-white" : "bg-white"
          } rounded-full cursor-pointer transition-all ease-in duration-300 `}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => navigate("/contact")}
        >
          <Icon icon="mdi:phone" width="20" height="20" />
        </button>
      </div>
    </div>
  );
};

export default SearchAndContact;
