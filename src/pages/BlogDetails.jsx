import { useState } from "react"
import Navbar from "../components/Navbar/Navbar"
import logo from "@/assets/images/logo.png"
// import aboutImage from "@/assets/images/about_banner.jpeg"
import aboutImage from "@/assets/images/back.jpeg";
import TopHeader from "../components/TopHeader"
import { Icon } from "@iconify/react"
import blog_detail1 from "@/assets/images/aboutus/blog1.jpeg"

import blog_detail2 from "@/assets/images/aboutus/blog2.jpeg"
// import search from "@/assets/images/icons/search.png";
import RecentPost from "../components/BlogDetails/RecentPost"
import TagButton from "../components/BlogDetails/TagButton"
import support from "@/assets/images/support.jpeg"
import careArtBoard from "@/assets/images/icons/careArtboard.png"
import { useNavigate, useParams } from "react-router-dom"
import Footer from "../components/Footer/Footer"
// import avatar from "@/assets/images/avatar.jpeg";
import blog from "@/assets/images/eagle.jpg"
import blog1 from "@/assets/images/aboutus/blog3.jpeg"
import blog2 from "@/assets/images/eagle.jpg"

// src/assets/images/eagle.jpg

const BlogDetails = () => {
  const [hover, setHover] = useState(false)
  const navigate = useNavigate()
  const [prevHover, setPrevHover] = useState(false)

  // Blog data
  const blogData = [
    {
      id: 1,
      date: "08 April 2025",
      title: "Energy Star Certified Electric Vehicle Chargers ",
      image: blog,
      content:
        "As the world shifts toward cleaner, more sustainable transportation, electric vehicles (EVs) are at the forefront of this revolution. However, the real game-changer in this green transition lies in how we charge these vehicles. Enter Energy Star Certified Electric Vehicle Chargers — the smart, efficient, and eco-friendly solution for modern EV users.",
    },
    {
      id: 2,
      date: "10 April 2025",
      title: "Advancements in Electric Vehicle Battery Technology",
      image: blog1,
      content:
        "The heart of every electric vehicle (EV) lies in its battery — and with technology evolving rapidly, the EV industry is undergoing a revolution. At Green Power Brand and Nata Enterprises Company, we’re not just keeping up with these changes — we’re helping drive them forward.",
    },
    {
      id: 3,
      date: "12 April 2025",
      title: "The Future of Electric Vehicle Charging Infrastructure",
      image: blog2,
      content:
        "The electric vehicle (EV) revolution is well underway, and as EV adoption accelerates globally, one crucial component must evolve alongside it: the charging infrastructure. At Green Power Brand and Nata Enterprises Company, we’re not only witnessing this transformation — we’re building it.",
    },
  ]

  const { id } = useParams()
  const blogId = id ? Number.parseInt(id) : 2 // Default to blog ID 2 if no ID is provided
  const currentBlog = blogData.find((blog) => blog.id === blogId) || blogData[1] // Default to second blog if not found

  return (
    <div>
      <Navbar navMenuItemColor={"#F5F5F5"} logo={logo} hamburgerMenuColor="#fff" />
      <TopHeader
        imgName={aboutImage}
        title="Blog Details"
        description="Stay charged with the latest updates, tips, and stories from the world of electric mobility."
        breadcrumb="Blog Details"
      />
      <div className="px-5 xl:px-30 relative top-[500px] ">
        <div className="flex gap-3">
          <div className="lg:w-3/4 w-full">
            <div
              className="h-[520px] rounded-bl-[50px] rounded-tr-[50px]"
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${currentBlog.image}) lightgray 50% / cover no-repeat`,
              }}
            ></div>
            {/* date and ev */}
            <div className="flex font-Playfair text-[18px] font-[600] text-[#000] my-3">
              <h2>{currentBlog.date}</h2>
              <h2 className="ml-4">EV Scooter</h2>
            </div>
            <h1 className="text-[#000] text-[28px] font-[700] font-Playfair mb-4">{currentBlog.title}</h1>
            <p className="w-full text-[#444] text-justify font-Poppins text-[16px] font-[400] leading-[35px] tracking-[0.48px]">
              {currentBlog.content}
            </p>
            <h2 className="text-[#000] text-[24px] font-[700] font-Playfair my-3">
              Hear what happy riders have to say about their Electric experience.
            </h2>
            <p className="text-[#444] text-justify font-Poppins text-[16px] font-[400] leading-[35px] tracking-[0.48px]">
              The future of transportation is electric — clean, efficient, and smarter than ever before. As more drivers make the switch to electric vehicles (EVs), their charging experience becomes just as important as the ride itself. That’s where Energy Star Certified Electric Vehicle Chargers come in — and our customers are loving the difference.
              At Green Power Brand, in partnership with Nata Enterprises Company, we provide top-tier EV charging solutions that are reliable, energy-efficient, and easy to use. But don’t just take our word for it — hear directly from the EV drivers who trust our products every day.
            </p>
            {/* Ticked Item */}
            <div className="flex flex-col gap-4 my-3">
              <div className="flex text-[#8CC63F] gap-4">
                <Icon icon="lets-icons:check-fill" width="24" height="24" />
                <p className="text-[#101010] font-Poppins font-[500]">
                  Detachable battery, take home and charge in 3 hours heir self-interest.
                </p>
              </div>

              <div className="flex text-[#8CC63F] gap-4">
                <Icon icon="lets-icons:check-fill" width="24" height="24" />
                <p className="text-[#101010] font-Poppins font-[500]">
                  Enjoy a hassle-free ride by charging just for 3 hours.{" "}
                </p>
              </div>
              <div className="flex text-[#8CC63F] gap-4">
                <Icon icon="lets-icons:check-fill" width="24" height="24" />
                <p className="text-[#101010] font-Poppins font-[500]">
                  Preparing for your success we provide truly Develop and Propose.
                </p>
              </div>
            </div>
            {/* Two Image */}
            <div className="flex flex-col md:flex-row w-full gap-6 my-3">
              <div className="md:w-1/2 w-full h-[367.568px] rounded-[20px] overflow-hidden">
                <img src={blog_detail1 || "/placeholder.svg"} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="md:w-1/2 w-full h-[367.568px] rounded-[20px] overflow-hidden">
                <img src={blog_detail2 || "/placeholder.svg"} alt="" className="h-full w-full object-cover" />
              </div>
            </div>

            <p className="text-[#444] text-justify font-Poppins text-[16px] font-[400] leading-[35px] tracking-[0.48px]">
              With these advancements, electric vehicles are becoming more practical, affordable, and sustainable than ever. At Green Power Brand and Nata Enterprises Company, we are committed to staying at the forefront of EV technology — offering smart, compatible, and future-proof charging solutions.
            </p>

            {/* Prev and Next Button */}
            {/* <div className="mt-6 flex items-center justify-center w-full">
              <div className="flex gap-[55px] "> */}
            {/* prev button */}
            {/* <div
                  className="p-[10px] flex gap-[10px] items-center cursor-pointer"
                  onClick={() => {
                    const prevId = blogId > 1 ? blogId - 1 : blogData.length
                    navigate(`/blog-details/${prevId}`)
                  }}
                >
                  <div
                    className="bg-[#000] p-[2px] rounded-full hover:bg-[#00C853] transition-all ease-in duration-300 cursor-pointer"
                    onMouseEnter={() => setPrevHover(true)}
                    onMouseLeave={() => setPrevHover(false)}
                  >
                    <Icon
                      icon="mingcute:left-line"
                      width="24"
                      height="24"
                      style={{ color: `${prevHover ? "#000" : "#eaeaea"}` }}
                    />
                  </div>
                  <p className="font-Poppins text-[16px] font-[500] text-[#000]">Prev Post</p>
                </div> */}

            {/* Next button */}
            {/* <div
                  className="p-[10px] flex gap-[10px] items-center cursor-pointer"
                  onClick={() => {
                    const nextId = blogId < blogData.length ? blogId + 1 : 1
                    navigate(`/blog-details/${nextId}`)
                  }}
                >
                  <p className="font-Poppins text-[16px] font-[500] text-[#000]">Next Post</p>
                  <div
                    className="bg-[#000] p-[2px] rounded-full hover:bg-[#00C853] transition-all ease-in duration-300 cursor-pointer"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    <Icon
                      icon="mingcute:right-line"
                      width="24"
                      height="24"
                      style={{ color: `${hover ? "#000" : "#eaeaea"}` }}
                    />
                  </div>
                </div>
              </div>
            </div> */}

            {/* comment section */}
            {/* <div className="w-3/4 mt-12">
              <div>
                <h2 className="font-Playfair text-[24px] font-[700] text-[#000] leading-normal">
                  Comments
                </h2>
                <p className="font-Poppins text-[#000] text-[18px] font-[400] mt-[23px]">
                  2 Replies to “Energy Star Certified Electric Vehicle Chargers”
                </p>
              </div>

             
              <div className="w-full flex p-[10px] mt-12 justify-between">
                <div className="flex gap-[10px] items-center">
                  <div className="h-[42px] w-[42px] ">
                    <img
                      src={avatar || "/placeholder.svg"}
                      className="rounded-full h-full w-full object-cover object-center"
                    />
                  </div>
                  
                  <h2 className="font-Playfair text-[18px] font-[500] text-[#000]">
                    Tom Goodman
                  </h2>
                </div>


                <button className="flex items-center gap-[10px] px-3 py-2 bg-[#00C853] rounded-tl-[20px] rounded-br-[20px] text-[#fff] hover:bg-[#000] cursor-alias transition-all duration-300 ease-in">
                  <Icon icon="mdi:reply" width="24" height="24" />
                  <p className="font-Poppins text-[14px] font-[600]">Reply</p>
                </button>
              </div>
          

              <div className="py-6 px-[18px] font-Poppins bg-[#F5F5F5] rounded-tl-[20px] rounded-br-[20px] mt-[10px]">
                <h1 className="text-[16px] text-[#000] font-[500]">Admin</h1>
                <p className="text-[#444] font-[400] text-[12px]">50 min ago</p>
                <p className="text-[#444] text-[14px] text-justify leading-[30px] font-[400] mt-3">
                  Aliquam erat volutpat. Integer malesuada turpis id fringilla
                  suscipit. Maecenas ultrices, orci vitae convallis mattis, quam
                  nulla vehicula felis, eu cursus sem tellus eget elit.
                </p>
              </div>
  
              <div className="w-full flex justify-center">
                <button className="font-Poppins text-[14px] font-[600] text-[#000] m-auto w-fit my-5 cursor-pointer hover:text-[#00C853] transition-all ease-in duration-300">
                  See All Comments
                </button>
              </div>

       
              <div className="p-6 w-full flex flex-col gap-3 bg-[#F5F5F5] rounded-[8px]">
                <div>
                  <h1 className="font-Playfair text-[#000] text-[24px] font-[700]">
                    Leave a Reply
                  </h1>
                  <p className="mt-3 font-Poppins text-[#444] text-[14px] tracking-[0.36px]">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>

                <form className="w-full">
                  <div className="flex gap-[25px]">
         
                    <div className="w-1/2">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-3 font-Poppins text-[#000] text-[14px] font-[600] bg-[#F5F5F5] rounded-[8px] border-[#EAEAEA] border-[1px] "
                      />
                    </div>
             
                    <div className="w-1/2">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-3 font-Poppins text-[#000] text-[14px] font-[600] bg-[#F5F5F5] rounded-[8px] border-[#EAEAEA] border-[1px] "
                      />
                    </div>
                  </div>
          
                  <div className="w-full mt-4">
                    <textarea
                      placeholder="Email Address"
                      className="w-full p-[10px] font-Poppins text-[#000] text-[14px] font-[600] bg-[#F5F5F5] rounded-[8px] border-[#EAEAEA] border-[1px] h-[133px] "
                    />
                  </div>
                </form>
              </div>
        
              <button className="px-[36px] py-[14px] bg-[#00C853] cursor-pointer font-Poppins text-[14px] font-[600] text-[#fff] mt-[20px]">
                Post Comment
              </button>
            </div> */}
          </div>

          {/* sidemenu item */}
          <aside className="w-1/4 hidden pl-4 lg:block">
            {/* serach bar */}
            <div className="flex items-center gap-3 bg-[#000] p-[10px] rounded-[8px] w-full">
              <Icon icon="carbon:search" width="20" height="20" style={{ color: "#f5f5f5" }} />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent focus:outline-none  w-full text-poppins font-[600] h-[20px] text-[#F5F5F5] text-[14px] "
              />
            </div>
            {/* Recent post */}
            <div className="p-3 flex flex-col gap-2 w-full rounded-tr-[20px] rounded-bl-[20px] bg-[#F5F5F5] mt-3">
              <h2 className="text-[#000] font-Playfair text-[20px] font-[700] ">Recent Post</h2>
              {/* Post items */}
              <RecentPost src={blog1} title="Energy Star Certified Electric Vehicle Chargers" />
              <RecentPost src={blog2} title="Advancements in Electric Vehicle Battery Technology" />
            </div>

            {/* Tags */}
            <div className="rounded-tr-[20px] rounded-bl-[20px] py-[27px] px-[13px] bg-[#F5F5F5] mt-3 ">
              <h2 className="font-Playfair text-[#000] text-[20px] font-[700] ">Tags</h2>
              <div className="flex flex-wrap gap-[15px]">
                <TagButton detail="Brands" />
                <TagButton detail="Scooter" />
                <TagButton detail="Energy" />
                <TagButton detail="Services" />
                <TagButton detail="EV" />
                <TagButton detail="Fuelless" />
              </div>
            </div>

            {/* Support */}
            <div
              className="w-fullrounded-tr-[20px] rounded-bl-[20px] mt-3 px-[30px] 2xl:pt-[45px] 2xl:pb-[64px] pt-2 pb-4"
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(${support}) lightgray 50% / cover no-repeat`,
              }}
            >
              <div className="flex flex-col gap-[18px] items-center justify-between h-full">
                <img src={careArtBoard || "/placeholder.svg"} alt="" className="h-[74px] w-[78px]" />
                <div className="w-full flex flex-col items-center justify-center">
                  <h3 className="font-Playfair text-[18px] font-[500] text-[#f5f5f5] text-center">
                    Do you need any help?
                  </h3>

                  <hr className="w-full border-[#f5f5f5]" />
                </div>
                <div className="font-Poppins text-center font-[500] text-[#f5f5f5]">
                  <h2 className=" 2xl:text-[18px] ">+977-9808474289</h2>
                  <h2 className=" 2xl:text-[18px] ">+977-9841910800</h2>
                  <h2 className=" 2xl:text-[18px] ">+977-9851133949</h2>
                  <p className="2xl:text-[16px]">info@NataEnterprise.com.np</p>
                  <p className="2xl:text-[16px]">Lamsal.Manju77@gmail.com</p>
                </div>
                {/* contact */}
                <div className="flex items-center">
                  <button
                    className={`p-3 font-Montserrat text-sm rounded-full ${hover ? "bg-[#00C853] text-white" : "bg-white"
                      }  ease-in transition-all duration-300 cursor-pointer`}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={() => navigate("/contact")}
                  >
                    Contact Us
                  </button>
                  <button
                    className={`p-3  ${hover ? "bg-[#00C853] text-white" : "bg-white"
                      } rounded-full cursor-pointer transition-all ease-in duration-300 `}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={() => navigate("/contact")}
                  >
                    <Icon icon="mdi:phone" width="20" height="20" />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="relative top-[500px]">
        <Footer />
      </div>
    </div>
  )
}

export default BlogDetails
