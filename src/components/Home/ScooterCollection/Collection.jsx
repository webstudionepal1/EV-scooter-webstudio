import collection from "@/assets/images/vector/collection.png";
import collection1 from "@/assets/images/vector/collection4.png";
import collection2 from "@/assets/images/vector/collection.png";
import collection3 from "@/assets/images/vector/collection4.png";
import { Icon } from "@iconify/react";
import { useNavigate } from 'react-router-dom';

// Static data array
const scooterCollections = [
  {
    id: 1,
    title: "White Luxury Scooter",
    image: collection,
  },
  {
    id: 2,
    title: "Black Urban Scooter",
    image: collection1,
  },
  {
    id: 3,
    title: "Red Sport Scooter",
    image: collection2,
  },
  {
    id: 4,
    title: "Blue Electric Scooter",
    image: collection3,
  },
];

const Collection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/scooters');
  };

  const handleClicked = () => {
    navigate('/scooterDetails');
  };

  return (
    <div className="  lg:px-5 mt-20">
      <div className="flex-col items-center gap-4 lg:gap-4 flex-[0_0_auto] flex relative">
        <h2 className="text-[#444] font-[600] font-Playfair tracking-[2.4px] text-2xl text-center">
          SCOOTER COLLECTION
        </h2>
        <h1 className="text-[#000] font-[700] font-Playfair text-5xl text-center tracking-[2.4px]">
          Our Collections For Regular Use
        </h1>
        <button onClick={handleClick} className="text-[#FFF] bg-black font-Poppins font-[600] text-base p-3 hover:bg-[#00C853] hover:rounded-tl-2xl hover:rounded-br-2xl transition-all ease-in duration-300 cursor-pointer w-fit">
          View All
        </button>

        {/* Image container */}
        <div className="grid  lg:grid-cols-4 grid-cols-1 gap-x-10 lg:gap-x-10  gap-y-10  mt-7 self-stretch  place-items-center">
          {scooterCollections.map((scooter) => (
            <div
              key={scooter.id}
            >
              <div className="relative">
                <img
                  src={scooter.image}
                  alt={scooter.title}
                  className="w-full h-full object-cover"
                />
                <button onClick={handleClicked} className="2xl:p-4 xl:p-[5px] md:p-4 p-[4px] rounded-full bg-black absolute right-2 bottom-0 cursor-pointer hover:bg-[#00C853] ">
                  <Icon
                    icon="iconamoon:arrow-top-right-1-light"
                    color="white"
                    width="40"
                    height="40"
                  />
                </button>
              </div>
              {/* title */}
              <h2 className="text-center self-stretch text-[#000] font-Poppins text-lg font-[500] mt-4">
                {scooter.title}
              </h2>
            </div>
          ))}
        </div>

        {/* indicator */}
        <div className="flex justify-center gap-1 self-stretch sm:mt-0 mt-16">
          <div className="h-[1px] w-[30%] bg-[#DBDBDB]"></div>
          {/* active */}
          <div className="h-[1px] w-[30%] bg-[#464646]"></div>
          <div className="h-[1px] w-[30%] bg-[#DBDBDB]"></div>
        </div>
      </div>
    </div>
  );
};

export default Collection;