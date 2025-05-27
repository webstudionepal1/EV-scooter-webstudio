import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const TopHeader = ({ imgName, title, description, breadcrumb }) => {
  const navigate = useNavigate();

  return (
    <div
      className="z-20 h-[550px] absolute top-0 w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
          url(${imgName})`,
        height: "fill"
      }}
    >
      <div className="xl:px-30 lg:px-5 px-[16px] absolute text-[#E3E3E3] bottom-20 w-full">
        <div className="md:w-1/2 w-full">
          <h3 className="font-Playfair md:text-[70px] text-[50px] font-[600] tracking-[1.68px]">
            {title}
          </h3>
          <p className="font-Poppins md:text-[20px] text-[16px] font-[400] leading-[30px] mt-5">
            {description}
          </p>
          <div className="flex items-center mt-8 gap-[10px] px-[10px] text-[#fff] font-Poppins text-[20px] font-[600] leading-normal">
            <Icon
              icon="material-symbols:circle-outline"
              width="24"
              height="24"
              style={{ color: "#00C853" }}
            />
            <p
              className="hover:text-[#00C853] cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </p>
            <Icon icon="pepicons-pop:line-x" width="20" height="20" />
            <p>{breadcrumb}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
