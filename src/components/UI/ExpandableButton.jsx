import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const ExpandableButton = () => {
  const navigate = useNavigate();

  const [hover, setHover] = useState(false);
  return (
    <button
      className={`inline-flex px-[46px] py-[10px]  items-center justify-center text-[14px] font-[600] font-Poppins text-[#fff] bg-[#000] w-fit hover:bg-[#00C853] transition-bg ease-in duration-300 cursor-pointer mt-3 hover:rounded-tl-[20px] hover:rounded-br-[20px] ${
        hover ? "pr-[80px]" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => navigate("/blogDetails")}
    >
      <div className="relative flex items-center justify-center gap-[10px]">
        Read More
        <Icon
          icon="cil:arrow-right"
          width="24"
          height="24"
          className={`absolute -right-[10px] transform ${
            hover
              ? "translate-x-full block opacity-100"
              : "translate-x-0 opacity-0 "
          } transition-all ease-in duration-300`}
        />
      </div>
    </button>
  );
};

export default ExpandableButton;
