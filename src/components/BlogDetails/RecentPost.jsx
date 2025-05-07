import blog1 from "@/assets/images/Blog_Images/blog1.png";

const RecentPost = () => {
  return (
    <div className="w-full flex gap-[10px] p-[10px]">
      <div className="aspect-[36/31] rounded-tr-[8px] rounded-bl-[8px] w-[72px] h-[62px] overflow-hidden">
        <img src={blog1} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="text-[#000]  font-[500]">
        <h2 className="font-Poppins text-[14px] hover:text-[#00C853] cursor-pointer">
          Energy Star Certified Electric Vehicle Chargers
        </h2>
        <p className="font-Playfair text-[12px] mt-[4px]">April 08, 2025</p>
      </div>
    </div>
  );
};

export default RecentPost;
