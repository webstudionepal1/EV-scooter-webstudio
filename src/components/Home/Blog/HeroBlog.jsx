import blog from "@/assets/images/blog.jpeg";

const HeroBlog = () => {
  // Static blog data
  const blogData = [
    {
      id: 1,
      date: "08 April 2025",
      title: "Energy Star Certified Electric Vehicle Chargers ",
      image: blog,
    },
    {
      id: 2,
      date: "10 April 2025",
      title: "Advancements in Electric Vehicle Battery Technology",
      image: blog,
    },
    {
      id: 3,
      date: "12 April 2025",
      title: "The Future of Electric Vehicle Charging Infrastructure",
      image: blog,
    },
  ];

  return (
    <div className="px-4 2xl:px-30 lg:px-5 mt-20">
      {/* title */}
      <div className="flex-col items-center gap-4 flex-[0_0_auto] flex relative">
        <h2 className="text-[#444] font-[600] font-Playfair tracking-[2.4px] text-2xl text-center ">
          Blog
        </h2>
        <div>
          <h1 className="text-[#000] font-[700] font-Playfair text-5xl text-center tracking-[2.4px]">
            Our recent article for the electric
          </h1>
          <h1 className="text-[#000] font-[700] font-Playfair text-5xl text-center tracking-[2.4px]">
            vehicle systems
          </h1>
        </div>
        <button className="text-[#FFF] bg-black font-Poppins font-[600] text-base p-3 hover:bg-[#00C853] hover:rounded-tl-2xl hover:rounded-br-2xl transition-all ease-in duration-300 cursor-pointer w-fit">
          View More Blog
        </button>
      </div>

      {/* Blog container */}
      <div className="flex lg:flex-row flex-col items-center justify-between gap-8 mt-10 overflow-hidden">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="h-[350px] w-[401px] rounded-tl-4xl rounded-br-4xl overflow-hidden relative"
          >
            {/* image */}
            <div
              className="h-[90%] w-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${blog.image})`,
              }}
            ></div>
            <div className="bottom-0 right-0 absolute flex flex-col w-[90%]">
              <div className="text-[#FFF] bg-black text-base font-Poppins font-[600] w-fit px-5 py-2 rounded-tl-4xl">
                <p>{blog.date}</p>
              </div>
              <div className="bg-[#F5F5F5] text-[#000000] pt-6 pl-5 pr-12 pb-8 font-Poppins font-[500] text-[14px] cursor-pointer hover:text-[#00C853]">
                <h2 className="w-[90%]">{blog.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBlog;