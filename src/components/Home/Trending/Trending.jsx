import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Features from "./Features";
import battery from "@/assets/images/icons/battery.svg";
import security from "@/assets/images/icons/security.svg";
import speed from "@/assets/images/icons/speed.svg";
import current from "@/assets/images/icons/current.svg";
import vector from "@/assets/images/vector/trending_features.png";
import featuresScooter from "@/assets/images/feature_scooter.png";
import features1 from "@/assets/images/scooter7.png";
import features2 from "@/assets/images/scooter8.png";

import { AnimatePresence, motion } from "framer-motion";

const Trending = () => {
  const trending = [
    {
      make: "2000w Razor",
      model: "UG60X-21",
      imageName: featuresScooter,
      features: [
        { content: "Digital dashboard with top speed 40 Mph", icon: speed },
        { content: "Economical 120 miles per charge", icon: battery },
        {
          content: "Fully automatic with Eco & Sport riding modes",
          icon: current,
        },
        { content: "Anti-theft smart lock system", icon: security },
      ],
    },
    {
      make: "2000w F1-PRO",
      model: "DB50QT - 11",
      imageName: features1,
      features: [
        { content: "Digital dashboard with top speed 40 Mph", icon: speed },
        { content: "Economical 120 miles per charge", icon: battery },
        {
          content: "Fully automatic with Eco & Sport riding modes",
          icon: current,
        },
        { content: "Anti-theft smart lock system", icon: security },
      ],
    },
    {
      make: "2000w Moped",
      model: "DB50QT - 11",
      imageName: features2,
      features: [
        { content: "Digital dashboard with top speed 40 Mph", icon: speed },
        { content: "Economical 120 miles per charge", icon: battery },
        {
          content: "Fully automatic with Eco & Sport riding modes",
          icon: current,
        },
        { content: "Anti-theft smart lock system", icon: security },
      ],
    },

  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = (ind) => {
    if (ind === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(ind);
    }
  };
  return (
    <div className="px-[16px] xl:px-30 lg:px-5">
      <header className="mb-12">
        <h2 className="text-[#444] font-[600] font-Playfair tracking-[2.4px] text-2xl text-center mb-3">
          TRENDING
        </h2>
        <h1 className="text-[#000] font-[700] font-Playfair text-5xl text-center tracking-[2.4px]">
          Our Top Collections Scooter
        </h1>
      </header>

      {trending.map((item, index) => (
        <AnimatePresence key={index}>
          {index === activeIndex ? (
            <motion.main
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white md:p-9 p-4 rounded-lg mb-3 flex"
            >
              <div className="flex flex-col justify-between items-center w-full lg:flex-row">
                <div className="flex flex-col gap-3 relative">
                  {/* Model */}
                  <div>
                    <div className="flex gap-5 items-center mb-2">
                      <h2 className="text-[#000] font-[500] font-Poppins text-3xl tracking-wide">
                        {item.make}
                      </h2>
                      <button
                        className="p-1 rounded-full bg-black h-8 w-8 cursor-pointer"
                        onClick={() => handleActiveIndex(index)}
                      >
                        <Icon
                          icon="iconamoon:arrow-top-right-1-light"
                          color="white"
                          width="25"
                          height="25"
                        />
                      </button>
                    </div>
                    <p className="text-[#000] font-Poppins text-lg font-[400]">
                      Model NO:{" "}
                      <span className="font-[400] font-Poppins text-[#939393] text-lg">
                        {item.model}
                      </span>
                    </p>
                  </div>
                  {/* Features */}
                  <div className="grid xl:grid-cols-4 grid-cols-2 md:gap-x-5 place-items-center">
                    {item.features.map((el, ind) => (
                      <Features
                        iconSrc={el.icon}
                        content={el.content}
                        key={ind}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <div className="relative w-[366px] h-[260px]">
                    <img src={vector} alt="" />
                    <img
                      src={item.imageName}
                      alt=""
                      className="absolute top-0 right-0 h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.main>
          ) : (
            <div className="px-4 py-6 xl:px-9 xl:py-12 bg-white rounded-md my-3">
              <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                <div className="flex lg:w-[70%] w-full items-center justify-between">
                  <h1 className="text-[#000] font-Poppins md:text-lg text-[18px] font-[500]">
                    {item.make}
                  </h1>

                  <div className="flex lg:gap-10 gap-4 items-center">
                    <div>
                      <h3 className="font-Poppins text-[#000] md:text-base text-[14px] font-[400]">
                        Model NO:
                      </h3>
                      <p className="font-Poppins text-[#939393] md:text-base text-[14px] font-[400]">
                        {item.model}
                      </p>
                    </div>

                    {/* arrow button */}
                    <button
                      className="rounded-full border-[#00C853] border-[1px] border-solid h-10 w-10 flex items-center justify-center cursor-pointer p-[7.333px]"
                      onClick={() => handleActiveIndex(index)}
                    >
                      <Icon
                        icon="iconamoon:arrow-top-right-1-light"
                        color="black"
                        width="25"
                        height="25"
                      />
                    </button>
                  </div>
                </div>

                {/* image */}
                <div className="lg:mr-20">
                  <img
                    src={item.imageName}
                    alt=""
                    className="h-[96px] w-[90.353px] object-fit"
                  />
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      ))}
    </div>
  );
};

export default Trending;
