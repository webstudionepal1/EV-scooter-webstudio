import Navbar from "../components/Navbar/Navbar"
import logo from "@/assets/images/logo_white.png"
import aboutImage from "@/assets/images/about_banner.jpeg"
import TopHeader from "../components/TopHeader"
import BlogCard from "@/components/Blog/BlogCard"
import blog from "@/assets/images/blog4.jpeg"
import blog1 from "@/assets/images/Blog_Images/blog1.png"
import blog2 from "@/assets/images/Blog_Images/blog2.png"
import { useNavigate } from "react-router-dom"
import Footer from "@/components/Footer/Footer"

const Blog = () => {
  const navigate = useNavigate()

  const alignments = ["justify-self-start", "justify-self-center", "justify-self-end"]

  // Updated blog data to include id and content for consistency
  const blogData = [
    {
      id: 1,
      img: blog,
      day: "08",
      month: "April",
      title: "Energy Star Certified Electric Vehicle Chargers",
      content:
        "Nisi quis eleifend quam adipiscing at vitae proin sagittis. Vulputate eu scel erisque felis imper diet. Vitae justo eget magna fermentum iaculis non diam phasellus.",
    },
    {
      id: 2,
      img: blog1,
      day: "10",
      month: "April",
      title: "Advancements in Electric Vehicle Battery Technology",
      content:
        "Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis, quam nulla vehicula felis, eu cursus sem tellus eget elit.",
    },
    {
      id: 3,
      img: blog2,
      day: "12",
      month: "April",
      title: "The Future of Electric Vehicle Charging Infrastructure",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
  ]

  // Handle click on blog card to navigate to details page
  const handleBlogClick = (id) => {
    navigate(`/blog-details/${id}`)
  }

  return (
    <div>
      <Navbar navMenuItemColor={"#F5F5F5"} logo={logo} hamburgerMenuColor="#F5F5F5" />
      <TopHeader
        imgName={aboutImage}
        title="Blog"
        description="Stay charged with the latest updates, tips, and stories from the world of electric mobility."
        breadcrumb="Blog"
      />
      {/* Blog List */}
      <div className="px-5 xl:px-30 relative top-[500px]">
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-7 gap-x-5 place-content-between place-items-center">
          {blogData.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer hover:opacity-90 transition-opacity duration-300"
            >
              <BlogCard imgName={item.img} day={item.day} month={item.month} title={item.title} onClick={() => handleBlogClick(item.id)} />
            </div>
          ))}
        </div>
        {/* <div className="flex items-center justify-end gap-2 my-10">
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
        </div> */}
      </div>

      <div className="relative top-[500px]">
        <Footer />
      </div>
    </div>
  )
}

export default Blog
