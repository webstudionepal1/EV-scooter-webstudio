import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TopHeader from "../components/TopHeader";
import logo from "@/assets/images/logo_white.png";
import aboutImage from "@/assets/images/about_banner.jpeg";
import about from "@/assets/images/about.jpeg";
import about1 from "@/assets/images/about1.jpeg";
import Card from "@/components/About/Card";
import Advantage from "../components/About/Advantage";
import energy from "@/assets/images/icons/energy.png";
import scooter from "@/assets/images/advantageScooter.png";
import { Button } from "@/components/UI/Button";
import banner from "@/assets/images/icons/about.png";
import enquiry from "@/assets/images/enquiry.png";
import Footer from "@/components/Footer/Footer";

const About = () => {
  return (
    <div>
      <Navbar
        navMenuItemColor={"#F5F5F5"}
        logo={logo}
        hamburgerMenuColor="#fff"
      />
      <TopHeader
        imgName={aboutImage}
        title="About us"
        description="Our electric scooters combine cutting-edge technology, eco-friendly performance, and sleek design — built for today’s smart riders."
        breadcrumb="About us"
      />
      <div className="w-full relative top-[500px] lg:px-5 xl:px-30 px-[16px]">
        {/* about us */}
        <div>
          <div className="flex flex-col xl:flex-row justify-between items-center gap-10 ">
            {/* Left side image with overlay */}
            <div
              className="md:w-[468px] w-[280px] md:h-[495px] h-[300px] relative -left-10 md:left-0 rounded-3xl bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${about})`,
              }}
            >
              <div
                className="absolute top-1/2 transform -translate-y-1/2 right-0 translate-x-1/2 md:w-[263.419px] md:h-[302px] w-[190px] h-[200px] bg-cover bg-center bg-no-repeat border-10 border-[#eaeaea] rounded-3xl"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${about1})`,
                }}
              ></div>
            </div>

            {/* Right side text */}
            <div className="w-full xl:w-1/2 flex flex-col gap-5">
              <h1 className="font-Playfair self-stretch text-[#444] text-[24px] font-[600] leading-[normal] tracking-[2.4px] uppercase">
                About us
              </h1>
              <h2 className="text-[#000] font-Playfair text-[40px] font-[700] md:tracking-[2.4px] leading-normal">
                Crafting smarter, greener rides for every road.
              </h2>
              <p className="self-stretch text-[#444] font-Poppins font-[400] text-[18px] leading-[40px] text-justify">
                At Electric, we’re on a mission to transform everyday travel.
                Our passion lies in designing scooters that are not just modern
                and stylish, but also sustainable and smart. We believe that a
                better ride leads to a better world — and we’re committed to
                making eco-friendly mobility an exciting, accessible reality for
                everyone.
              </p>
              <p className="self-stretch text-[#444] font-Poppins font-[400] text-[18px] leading-[40px] text-justify">
                Built with innovation at the core, every Electric scooter is
                engineered for high performance, reliability, and energy
                efficiency. Whether it’s your daily commute, a weekend
                adventure, or simply a way to move freely around the city, we
                make sure your journey is smooth, safe, and smart.
              </p>
            </div>
          </div>
        </div>

        {/* card */}
        <div className="flex flex-col lg:flex-row gap-[20px] justify-between my-25">
          <Card
            title="Who We Are"
            description="At Electric, we are riders, innovators, and dreamers shaping the future of mobility. We build stylish, high-performance electric scooters that make city travel cleaner, smarter, and more exciting."
          />
          <Card
            title="Our Mission"
            description="At Electric, our mission is to redefine urban mobility by creating high-performance electric scooters that are not only stylish and smart but also environmentally responsible. We are committed to delivering innovative technology, superior design, and a smooth riding experience, making clean transportation accessible."
            bgColor="#EEFFF4"
          />
          <Card
            title="Our Vision"
            description="We envision a future where electric mobility is the first choice for all. A future where cities are cleaner, quieter, and more connected—powered by sustainable energy and bold innovation. At Electric, we aim to inspire a global movement toward greener lifestyles, one ride at a time."
            bgColor="#FCFCFC"
          />
        </div>

        {/* advantages */}
        <div className="flex flex-col gap-12">
          <div className="md:w-1/2 m-auto text-center">
            <h1 className="font-Playfair self-stretch text-[#444] text-[24px] font-[600] leading-[normal] tracking-[2.4px] uppercase">
              What we do!
            </h1>
            <h2 className="text-[#000] font-Playfair text-[40px] font-[700] tracking-[2.4px] leading-normal mt-3">
              What advantages will you get using an escooter?{" "}
            </h2>
          </div>

          {/* 3 cols image in the center */}
          <div className="flex flex-col xl:flex-row items-center gap-12 w-full justify-start">
            <div className=" flex flex-col gap-[56px] ">
              <Advantage
                imageName={energy}
                title="Recoverable energy"
                descritpion="Charge your electric vehicle at home using one of our smart."
              />
              <Advantage
                imageName={energy}
                title="Recoverable energy"
                descritpion="Charge your electric vehicle at home using one of our smart."
              />
              <Advantage
                imageName={energy}
                title="Recoverable energy"
                descritpion="Charge your electric vehicle at home using one of our smart."
              />
            </div>
            <div className="flex items-center justify-center">
              <img src={scooter} alt="" />
            </div>
            <div className=" flex flex-col gap-[56px] ">
              <Advantage
                imageName={energy}
                title="Recoverable energy"
                descritpion="Charge your electric vehicle at home using one of our smart."
              />
              <Advantage
                imageName={energy}
                title="Recoverable energy"
                descritpion="Charge your electric vehicle at home using one of our smart."
              />
              <Advantage
                imageName={energy}
                title="Recoverable energy"
                descritpion="Charge your electric vehicle at home using one of our smart."
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center gap-[41px] md:h-[280px] mt-40">
          <div className="lg:w-2/3 w-full h-full bg-[#00C853] rounded-tl-[50px] rounded-br-[50px] p-9 flex items-center gap-10">
            <div className="w-[80%] relative">
              <h2 className="text-[#FCFCFC] font-Playfair font-[700] md:text-[32px] text-[24px] -tracking-[0.96px]  text leading-normal">
                Ready for the streets, made for your adventure.
              </h2>
              <p className="font-Poppins text-justify md:text-[16px] text-sm md:leading-[30px] text-[#fcfcfcfc] mt-[8px]">
                Experience the future of travel with Electric. Our scooters are
                designed to deliver powerful performance with eco-friendly
                innovation, giving you a smooth, smart, and sustainable ride
                every time.
              </p>
              <img src={banner} alt="" className="absolute left-0 top-0" />
            </div>
            <Button
              title="Enquiry Now"
              bgColor="#000"
              hoverBgColor="#FCFCFC"
              textColor="#fff"
              hoverTextColor="#000000"
            />
          </div>

          <div
            className={`lg:w-1/3 w-full h-full rounded-tl-[50px] rounded-br-[50px] bg-[lightgray] bg-cover bg-no-repeat bg-center`}
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${enquiry})`,
            }}
          ></div>
        </div>
      </div>

      <div className="relative top-[500px]">
        <Footer />
      </div>
    </div>
  );
};

export default About;
