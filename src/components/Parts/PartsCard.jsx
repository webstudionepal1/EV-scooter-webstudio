import React, { useState } from "react";
import battery from "../../assets/images/Parts_Images/battery.png";

const PartsCard = ({ imageName, title, model }) => {
  const [partsCardHover, setPartsCardHover] = useState(false);
  return (
    <div
      className="w-full aspect-[5/6] md:aspect-[4/5] h-[400px] bg-[#EEFFF4] rounded-tr-[12px] rounded-bl-[12px] flex flex-col py-[32px] md:px-[28px] px-5 items-center gap-3"
      onMouseEnter={() => setPartsCardHover(true)}
      onMouseLeave={() => setPartsCardHover(false)}
    >
      <img
        src={imageName}
        alt=""
        className={`w-[239px] h-[200px] object-contain object-center ${
          partsCardHover ? "scale-120" : "scale-100"
        } transition-transform ease-in-out duration-300`}
      />
      <div className={`${partsCardHover ? "pt-5" : "mt-0"} transition-all ease-in duration-300`}>
        <h2 className=" font-Poppins text-[18px] text-[#000] font-[500] leading-[30px]">
          {title}
        </h2>
        <p className=" text-[#000] text-[14px] font-Poppins leading-[30px] font-[400]">
          <span className="font-[500]">Model:</span>
          {model}
        </p>
      </div>
    </div>
  );
};

export default PartsCard;
