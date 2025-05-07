import Navbar from "../components/Navbar/Navbar";
import logo from "@/assets/images/logo_white.png";
import aboutImage from "@/assets/images/about_banner.jpeg";
import TopHeader from "../components/TopHeader";
import ContactInf from "../components/Contact/ContactInf";
import contact1 from "@/assets/images/icons/contact1.png";
import contact2 from "@/assets/images/icons/contact2.png";
import contact3 from "@/assets/images/icons/contact3.png";
import contactBanner from "@/assets/images/contact_banner.jpeg";
import {Button} from "@/components/UI/Button";
import Footer from "@/components/Footer/Footer";


const Contact = () => {
  return (
    <div>
      <Navbar
        navMenuItemColor={"#F5F5F5"}
        logo={logo}
        hamburgerMenuColor="#F5F5F5"
      />
      <TopHeader
        imgName={aboutImage}
        title="Contact Us"
        description="Reach out to us for product inquiries, support, or any feedback — we’d love to hear from you."
        breadcrumb="Contact Us"
      />
      <div className="px-5 xl:px-30 relative top-[500px]">
        <div className="font-Playfair w-fit m-auto">
          <h2 className="text-[#444] text-[24px] font-[600] self-stretch text-center">
            Have any question? so please
          </h2>
          <h3 className="text-[#000] text-[40px] font-[600] self-stretch text-center mt-3">
            Feel Free to Contact
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-6 m-auto w-fit mt-[46px]">
          <ContactInf
            title="Our Location"
            description="Putalisadak, Kathmandu, Nepal"
            imageName={contact1}
          />
          <ContactInf
            title="Email Address"
            description="info@eletric.com.np"
            imageName={contact2}
          />
          <ContactInf
            title="Phone Number"
            description="+977-9866875210"
            imageName={contact3}
          />
        </div>
      </div>

      {/* form */}
      <div
        className="w-full h-[540px] relative top-[570px] px-5 xl:px-30 py-[54px]"
        style={{
          backgroundImage: `url(${contactBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <form className="p-6 rounded-2 bg-[#F5F5F5] shadow-md flex flex-col gap-[18px] w-fit m-auto md:m-0">
          <h1 className="font-Playfair font-[700] text-[24px] text-[#000] uppercase">
            Get In Touch
          </h1>
          <div className="flex flex-col gap-[16px] md:w-[592px] w-[320px]">
            <div className="flex gap-[25px] md:max-w-[592px]">
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Name"
                  className="px-[10px] py-[12px] text-Poppins text-[14px] font-[400] w-full border-[0.6px] border-solid border-[#999] text-[#858585] rounded-[4px]"
                />
              </div>
              <div className="w-1/2">
                <input
                  type=""
                  placeholder="Phone Number"
                  className="px-[10px] py-[12px] text-Poppins text-[14px] font-[400] w-full border-[0.6px] border-solid border-[#999] text-[#858585] rounded-[4px]"
                />
              </div>
            </div>

            <div className="w-full">
              <input
                type="text"
                placeholder="Email address"
                className="px-[10px] py-[12px] text-Poppins text-[14px] font-[400] w-full border-[0.6px] border-solid border-[#999] text-[#858585] rounded-[4px]"
              />
            </div>
            <div className="w-full">
              <textarea
                placeholder="Leave Message here..."
                className="px-[10px] py-[12px] h-[153px] text-Poppins text-[14px] font-[400] w-full border-[0.6px] border-solid border-[#999] text-[#858585] rounded-[4px]"
              />
            </div>
          </div>
          <Button title="Send Message" bgColor="#000" hoverBgColor="#00C853" textColor="#fff" hoverTextColor="#fff" />
        </form>
      </div>

      {/* footer */}
      <div className="relative top-[500px]">
            <Footer />
      </div>
    </div>
  );
};

export default Contact;
