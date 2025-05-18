import React, { useState } from "react";
// import { Icon } from "@iconify/react";
import ExpandableButton from "../UI/ExpandableButton";
const BlogCard = ({ imgName, day, month, title, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <div>
      <div
        className="max-w-[405px] cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className="h-[266px] w-full relative rounded-tr-[50px] object-cover object-center transition-all duration-300 ease-in"
          style={{
            backgroundImage: `
          linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%),
          url(${imgName})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: `${hover ? "130%" : "110%"}`,
          }}
        >
          <div
            className={`flex flex-col text-[#FCFCFC] font-Poppins items-center justify-center px-[15px] py-[9px] absolute right-[28px] top-[25px] bg-[#00C853]} transition-all duration-300 ease-in`}
            style={{
              backgroundColor: `${hover ? "#000" : "#00C853"}`,
              borderRadius: `${hover ? "0px 20px 0px 0px" : "20px 0px 20px 0px"
                }`,
            }}
          >
            <h2 className="text-[16px] font-[700]">{day}</h2>
            <h3 className="text-[12px] font-[500]">{month}</h3>
          </div>
        </div>

        <div className=" flex flex-col gap-4 mt-3">
          {/* <div className="flex items-center gap-[4px]">
            <Icon
              icon="basil:comment-solid"
              width="24"
              height="24"
              style={{ color: "#00C853" }}
            />
            <p className="font-Poppins text-[14px] text-[#000] font-[600] leading-normal">
              2 comments
            </p>
          </div> */}
          <h3
            className={`text-[#000] font-Poppins text-[18px] font-[600] leading-normal self-stretch `}
            style={{ color: hover ? "#00C853" : "#000" }}
          >
            {title}
          </h3>
        </div>
      </div>
      <ExpandableButton onClick={onClick} />
    </div>
  );
};

export default BlogCard;
