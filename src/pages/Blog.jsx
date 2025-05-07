import Navbar from "../components/Navbar/Navbar";
import logo from "@/assets/images/logo_white.png";
import aboutImage from "@/assets/images/about_banner.jpeg";
import TopHeader from "../components/TopHeader";
import BlogCard from "@/components/Blog/BlogCard";
import blog1 from "@/assets/images/Blog_Images/blog1.png";
import blog2 from "@/assets/images/Blog_Images/blog2.png";
import blog3 from "@/assets/images/Blog_Images/blog3.jpeg";
import blog4 from "@/assets/images/Blog_Images/blog4.jpeg";
import blog5 from "@/assets/images/Blog_Images/blog5.jpeg";
import blog6 from "@/assets/images/Blog_Images/blog6.jpeg";
import blog7 from "@/assets/images/Blog_Images/blog7.jpeg";
import blog8 from "@/assets/images/Blog_Images/blog8.jpeg";
import blog9 from "@/assets/images/Blog_Images/blog9.jpeg";
import blog10 from "@/assets/images/Blog_Images/blog10.jpeg";
import blog11 from "@/assets/images/Blog_Images/blog11.jpeg";
import { Icon } from "@iconify/react";
import Footer from "@/components/Footer/Footer";

const Blog = () => {
  
  const alignments = [
    "justify-self-start",
    "justify-self-center",
    "justify-self-end",
  ];

  const card = [
    {
      img: blog1,
    },
    {
      img: blog2,
    },
    {
      img: blog3,
    },
    {
      img: blog4,
    },
    {
      img: blog5,
    },
    {
      img: blog6,
    },
    {
      img: blog7,
    },
    {
      img: blog1,
    },
    {
      img: blog8,
    },
    {
      img: blog9,
    },
    {
      img: blog10,
    },
    {
      img: blog11,
    },
  ];
  return (
    <div>
      <Navbar
        navMenuItemColor={"#F5F5F5"}
        logo={logo}
        hamburgerMenuColor="#F5F5F5"
      />
      <TopHeader
        imgName={aboutImage}
        title="Blog"
        description="Stay charged with the latest updates, tips, and stories from the world of electric mobility."
        breadcrumb="Blog"
      />
      {/* Blog List */}
      <div className="px-5 xl:px-30 relative top-[500px]">
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-7 gap-x-5 place-content-between place-items-center">
          {card.map((item, index) => (
            <BlogCard imgName={item.img} key={index}/>
          ))}
        </div>
        <div className="flex items-center justify-end gap-2 my-10">
          <button className="p-[4px] bg-[#919EAB] rounded-[4px]">
            <Icon
              icon="lsicon:left-filled"
              width="24"
              height="24"
              style={{ color: "#C4CDD5" }}
            />
          </button>
          <button className="p-[4px] bg-[#FFF] rounded-[4px] h-[32px] w-[32px] border-[1px] border-solid border-[#00C853] ">
            1
          </button>
          <button className="p-[4px] bg-[#FFF] rounded-[4px] h-[32px] w-[32px] border-[1px] border-solid border-[#DFE3E8]">
            2
          </button>
          <button className="p-[4px] bg-[#FFF] rounded-[4px] h-[32px] w-[32px] border-[1px] border-solid border-[#DFE3E8]">
            ....
          </button>
          <button className="p-[4px] bg-[#FFF] rounded-[4px] h-[32px] w-[32px]border-[1px] border-solid border-[#DFE3E8]">
            9
          </button>
          <button className="p-[4px] bg-[#FFF] rounded-[4px] h-[32px] w-[32px] border-[1px] border-solid border-[#DFE3E8]">
            9
          </button>
          <button className="p-[4px] bg-[#FFF] rounded-[4px] border-[1px] border-solid border-[#DFE3E8]">
            <Icon
              icon="lsicon:right-filled"
              width="24"
              height="24"
              style={{ color: "#C4CDD5" }}
            />
          </button>
        </div>
      </div>

      <div className="relative top-[500px]">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
