import collection from "@/assets/images/vector/Loader1 (1).jpeg";
import collection1 from "@/assets/images/vector/Loader1 (2).jpeg";
import { Icon } from "@iconify/react";
import { useNavigate } from 'react-router-dom';

const scooterCollections = [
  {
    id: 1,
    image: collection,
  },
  {
    id: 2,
    image: collection1,
  },
];

const CollectionLoader = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/loaders');
  };

  const handleClicked = (id) => {
    navigate(`/loaders`);
  };

  return (
    <div className="xl:px-30 lg:px-5 mt-20">
      <div className="flex-col items-center gap-4 lg:gap-4 flex-[0_0_auto] flex relative">
        <h2 className="text-[#444] font-[600] font-Playfair tracking-[2.4px] text-2xl text-center">
          ELECTRIC THREE WHEELERS (Tri-Cycle) EV
        </h2>
        <h1 className="text-[#000] font-[700] font-Playfair text-5xl text-center tracking-[2.4px]">
          Our Collections
        </h1>
        <button
          onClick={handleClick}
          className="text-[#FFF] bg-black font-Poppins font-[600] text-base p-3 hover:bg-[#00C853] hover:rounded-tl-2xl hover:rounded-br-2xl transition-all ease-in duration-300 cursor-pointer w-fit"
        >
          View All
        </button>

        {/* Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 mt-7 px-4">
          {scooterCollections.map((scooter) => (
            <div
              key={scooter.id}
              className="flex flex-col items-center"
            >
              <div className="relative w-[550px] h-[400px] rounded-xl overflow-hidden">
                <img
                  src={scooter.image}
                  alt=""
                  className="object-cover w-full h-full"
                />
                <button
                  onClick={() => handleClicked(scooter.id)}
                  className="p-[4px] rounded-full bg-black absolute right-2 bottom-2 hover:bg-[#00C853]"
                >
                  <Icon
                    icon="iconamoon:arrow-top-right-1-light"
                    color="white"
                    width="36"
                    height="36"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Indicator */}
        <div className="flex justify-center gap-1 self-stretch sm:mt-0 mt-16">
          <div className="h-[1px] w-[30%] bg-[#DBDBDB]"></div>
          <div className="h-[1px] w-[30%] bg-[#464646]"></div>
          <div className="h-[1px] w-[30%] bg-[#DBDBDB]"></div>
        </div>
      </div>
    </div>
  );
};

export default CollectionLoader;
