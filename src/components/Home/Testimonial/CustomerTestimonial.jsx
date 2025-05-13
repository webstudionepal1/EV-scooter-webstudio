import React from "react";
import testimoni from "@/assets/images/vector/testimonial.png";
import { Icon } from "@iconify/react";
import entypo_quote from "@/assets/images/entypo_quote.png";
import testimonial_user from "@/assets/images/testimonial_user.png";

// Static data array for testimonials
const testimonials = [
  {
    id: 1,
    name: "Michael John",
    role: "Founder",
    rating: 5,
    content:
      "We couldn’t be happier with the quality and attention to detail. From start to finish, the team was professional, efficient, and communicative. Our dream home is now a reality!",
    userImage: testimonial_user,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "CEO",
    rating: 5,
    content:
      "We couldn’t be happier with the quality and attention to detail. From start to finish, the team was professional, efficient, and communicative. Our dream home is now a reality!",
    userImage: testimonial_user,
  },
  {
    id: 3,
    name: "David Brown",
    role: "Designer",
    rating: 5,
    content:
      "We couldn’t be happier with the quality and attention to detail. From start to finish, the team was professional, efficient, and communicative. Our dream home is now a reality!",
    userImage: testimonial_user,
  },
];

const CustomerTestimonial = () => {
  return (
    <div className="xl:px-30 lg:px-5 px-[16px] mt-20">
      <div className="flex flex-col items-center gap-12">
        {/* title */}
        <div className="flex-col items-center gap-4 flex-[0_0_auto] flex relative">
          <h2 className="text-[#444] font-[600] font-Playfair tracking-[2.4px] text-2xl text-center">
            Testimonial
          </h2>
          <div>
            <h1 className="text-[#000] font-[700] font-Playfair text-5xl text-center tracking-[2.4px]">
              What Our Customers Say
            </h1>
            <h1 className="text-[#000] font-[700] font-Playfair text-5xl text-center tracking-[2.4px]">
              About Us
            </h1>
          </div>
        </div>

        {/* testimonial */}
        <div className="flex 2xl:justify-between flex-col items-center lg:flex-row w-full gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-[411px] h-[369px]  bg-contain bg-center bg-no-repeat flex flex-col px-[25px] pt-[53px]"
              style={{ backgroundImage: `url(${testimoni})` }}
            >
              {/* rating */}
              <div className="flex justify-between">
                <div className="flex items-center gap-[4px]">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Icon
                      key={index}
                      icon="material-symbols:star"
                      width="24"
                      height="24"
                      color="#F78C11"
                      inline={true}
                      className="inline-block"
                    />
                  ))}
                </div>
                <div>
                  <img src={entypo_quote} alt="quote" />
                </div>
              </div>

              {/* content */}
              <div className="flex flex-col items-center gap-3 mt-[15px]">
                <p className="text-[#444] font-Poppins font-[400] text-justify text-[14px] leading-[36px]">
                  {testimonial.content}
                </p>
              </div>

              {/* user */}
              <div className="flex items-center">
                <div className="size-15">
                  <img
                    src={testimonial.userImage}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="flex flex-col ml-4 h-full justify-around mt-[25px]">
                  <h3 className="text-[#000] font-Poppins font-[600] text-[18px]">
                    {testimonial.name}
                  </h3>
                  <p className="text-[#00C853] font-Poppins font-[400] text-[14px]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* previous and next Button */}
        <div>
          <div className="flex justify-between items-center gap-4">
            <button className="flex items-center justify-center gap-3 bg-[#0B0B0B] text-[#FFFFFF] rounded-full p-3 cursor-pointer hover:bg-[#00C853] transition-hover ease-in duration-300">
              <Icon
                icon="icon-park-outline:double-left"
                width="38"
                height="38"
              />
            </button>
            <button className="flex items-center justify-center gap-3 bg-[#0B0B0B] text-[#FFFFFF] rounded-full p-3 cursor-pointer hover:bg-[#00C853] transition-hover ease-in duration-300">
              <Icon
                icon="icon-park-outline:double-right"
                width="38"
                height="38"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonial;