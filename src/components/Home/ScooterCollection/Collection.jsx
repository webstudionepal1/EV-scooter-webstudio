import React from "react";
import collection from "@/assets/images/vector/collection.png";
import collection1 from "@/assets/images/vector/collection1.png";
import collection2 from "@/assets/images/vector/collection2.png";
import collection3 from "@/assets/images/vector/collection3.png";
import { Icon } from "@iconify/react";

const Collection = () => {

  return (
    <div className="xl:px-30 lg:px-5 mt-20">
      <div className="flex-col items-center gap-4 flex-[0_0_auto] flex relative">
        <h2 className="text-[#444] font-[600] font-Playfair tracking-[2.4px] text-2xl text-center">
          SCOOTER COLLECTION
        </h2>
        <h1 className="text-[#000] font-[700] font-Playfair text-5xl text-center tracking-[2.4px]">
          Our Collections For Regular Use
        </h1>
        <button className="text-[#FFF] bg-black font-Poppins font-[600] text-base p-3 hover:bg-[#00C853] hover:rounded-tl-2xl hover:rounded-br-2xl transition-all ease-in duration-300 cursor-pointer w-fit">
          View All
        </button>

        {/* Image container */}
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-x-4 gap-y-9 self-stretch mt-7 place-items-center">
          <div className="md:w-[400px] w-[300px] md:h-[600px] h-[500px]">
            <div className="relative">
              <img
                src={collection}
                alt=""
                className="w-full h-full object-cover"
              />
              <button className="md:p-4 p-[4px] rounded-full bg-black absolute right-0 bottom-0">
                <Icon
                  icon="iconamoon:arrow-top-right-1-light"
                  color="white"
                  width="50"
                  height="50"
                />
              </button>
            </div>
            {/* title */}
            <h2 className="text-center self-stretch text-[#000] font-Poppins text-lg font-[500] mt-4">
              White Luxury Scooter
            </h2>
          </div>

          <div className="md:w-[400px] w-[300px] md:h-[600px] h-[500px]">
            <div className="relative">
              <img
                src={collection1}
                alt=""
                className="w-full h-full object-cover"
              />
              <button className="md:p-4 p-[4px] rounded-full bg-black absolute right-0 bottom-0">
                <Icon
                  icon="iconamoon:arrow-top-right-1-light"
                  color="white"
                  width="50"
                  height="50"
                />
              </button>
            </div>
            {/* title */}
            <h2 className="text-center self-stretch text-[#000] font-Poppins text-lg font-[500] mt-4">
              White Luxury Scooter
            </h2>
          </div>

          <div className="md:w-[400px] w-[300px] md:h-[600px] h-[500px]">
            <div className="relative">
              <img
                src={collection2}
                alt=""
                className="w-full h-full object-cover"
              />
              <button className="md:p-4 p-[4px] rounded-full bg-black absolute right-0 bottom-0">
                <Icon
                  icon="iconamoon:arrow-top-right-1-light"
                  color="white"
                  width="50"
                  height="50"
                />
              </button>
            </div>
            {/* title */}
            <h2 className="text-center self-stretch text-[#000] font-Poppins text-lg font-[500] mt-4">
              White Luxury Scooter
            </h2>
          </div>

          <div className="md:w-[400px] w-[300px] md:h-[600px] h-[500px]">
            <div className="relative">
              <img
                src={collection3}
                alt=""
                className="w-full h-full object-cover"
              />
              <button className="md:p-4 p-[4px] rounded-full bg-black absolute right-0 bottom-0">
                <Icon
                  icon="iconamoon:arrow-top-right-1-light"
                  color="white"
                  width="50"
                  height="50"
                />
              </button>
            </div>
            {/* title */}
            <h2 className="text-center self-stretch text-[#000] font-Poppins text-lg font-[500] mt-4">
              White Luxury Scooter
            </h2>
          </div>
        </div>

        {/* indicator */}
        <div className="flex justify-center gap-1 self-stretch mt-7">
          <div className="h-[1px] w-[30%] bg-[#DBDBDB]"></div>
          {/* active */}
          <div className="h-[1px] w-[30%] bg-[#464646] "></div>
          <div className="h-[1px] w-[30%] bg-[#DBDBDB]"></div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
