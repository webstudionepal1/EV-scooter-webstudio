import { useState } from "react";
const ScooterCard = ({ range, topSpeed, motorPower, title, imageName, onClick }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex flex-col gap-8">
      <div
        className={`p-4 bg-[#F5F5F7] max-w-[500px] flex flex-col rounded-[10px] transition-bg ease-in duration-300`}
        style={{ backgroundColor: `${hover ? "#71CA00" : "#F5F5F7"}` }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onClick}
      >
        <div className="h-[292px] w-full relative">
          {/* <img
            src={icon}
            alt="icon of electric charge"
            className={`absolute top-5 left-3 z-20 ${
              hover ? "hidden" : "block"
            }`}
          /> */}
          <img
            src={imageName}
            alt="scooter"
            className={`z-40 transform ${hover ? "scale-120" : ""
              } transition-transform ease-in-out duration-300`}
          />
        </div>
        <div className="flex justify-between gap-3">
          <div className="w-[104px] bg-[#FFF] rounded-[5px] py-[8px] px-[5px] flex justify-center items-center flex-col mt-12">
            <h2 className="text-[#212529]  text-[16px] font-[700] leading-[28.96px] text-center font-Playfair">
              {range}
            </h2>
            <p className="font-[400] text-[#707070] text-[14px] text-center self-stretch leading-[25.34px] font-Poppins">
              Range
            </p>
          </div>
          <div className="w-[104px] bg-[#FFF] rounded-[5px] py-[8px] px-[5px] flex justify-center items-center flex-col mt-12">
            <h2 className="text-[#212529]  text-[16px] font-[700] leading-[28.96px] text-center font-Playfair">
              {topSpeed}
            </h2>
            <p className="font-[400] text-[#707070] text-[14px] text-center self-stretch leading-[25.34px] font-Poppins">
              Top Speed
            </p>
          </div>
          <div className="w-[104px] bg-[#FFF] rounded-[5px] py-[8px] px-[5px] flex justify-center items-center flex-col mt-12">
            <h2 className="text-[#212529]  text-[16px] font-[700] leading-[28.96px] text-center font-Playfair">
              {motorPower}
            </h2>
            <p className="font-[400] text-[#707070] text-[14px] text-center self-stretch leading-[25.34px] font-Poppins">
              Motor Power
            </p>
          </div>
        </div>
      </div>
      <h1 className="font-Play text-[#151515] text-[20px] leading-[26px] font-[700] text-center max-w-[370px]">
        {title}
      </h1>
    </div>
  );
};

export default ScooterCard;
