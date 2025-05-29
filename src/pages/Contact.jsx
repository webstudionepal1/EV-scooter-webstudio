import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar/Navbar";
import logo from "@/assets/images/logo_white.png";
// import aboutImage from "@/assets/images/about_banner.jpeg";
import aboutImage from "@/assets/images/back.jpeg";
import TopHeader from "../components/TopHeader";
import ContactInf from "../components/Contact/ContactInf";
import contact1 from "@/assets/images/icons/contact1.png";
import contact2 from "@/assets/images/icons/contact2.png";
import contact3 from "@/assets/images/icons/contact3.png";
import contactBanner from "@/assets/images/contact_banner.jpeg";
import { Button } from "@/components/UI/Button";
import Footer from "@/components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const contactInfoData = [
  // {
  //   title: "Our Location",
  //   description: "Rabibhwan, Kathmandu ",
  //   imageName: contact1,
  // },
  {
    title: "Email Address",
    description: "info@NataEnterprise.com.np Lamsal.Manju77@gmail.com",
    imageName: contact2,
  },
  {
    title: "Number",
    description: "9841910800, 9700912839",
    imageName: contact3,
  },
];

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i2biuwl",
        "template_xampy6o",
        form.current,
        "s8-Nyr2m0uhdRxNVI"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
        },
        () => {
          toast.error("Failed to send the message, please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div>
      <Navbar navMenuItemColor={"#F5F5F5"} logo={logo} hamburgerMenuColor="#F5F5F5" />
      <TopHeader
        imgName={aboutImage}
        title="Contact Us"
        description="Reach out to us for product inquiries, support, or any feedback — we’d love to hear from you."
        breadcrumb="Contact Us"
      />
      <div className="px-5 xl:px-30 relative top-[500px]">
        <div className="font-Playfair w-fit m-auto text-center">
          <h2 className="text-[#444] text-[24px] font-[600]">Have any question? so please</h2>
          <h3 className="text-[#000] text-[40px] font-[600] mt-3">Feel Free to Contact</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-6 m-auto w-fit mt-[46px]">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.720765180153!2d85.28490947560879!3d27.695024026034698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190046f842b3%3A0xec340ab14283fee8!2sGreen%20Power%20(Nata%20Enterprises)!5e0!3m2!1sen!2snp!4v1748376932858!5m2!1sen!2snp"
            className="w-full h-full border-0 rounded-lg shadow-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {contactInfoData.map((item, index) => (
            <ContactInf key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Form */}
      <div
        className="w-full h-[540px] relative top-[570px] px-5 xl:px-30 py-[54px]"
        style={{
          backgroundImage: `url(${contactBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="p-6 rounded-2 bg-[#F5F5F5] shadow-md flex flex-col gap-[18px] w-fit m-auto md:m-0"
        >
          <h1 className="font-Playfair font-[700] text-[24px] text-[#000] uppercase">
            Get In Touch
          </h1>
          <div className="flex flex-col gap-[16px] md:w-[592px] w-[320px]">
            <div className="flex gap-[25px]">
              <div className="w-1/2">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                  className="px-[10px] py-[12px] w-full border border-[#999] text-[#858585] rounded-[4px] text-[14px]"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  name="user_phone"
                  placeholder="Phone Number"
                  className="px-[10px] py-[12px] w-full border border-[#999] text-[#858585] rounded-[4px] text-[14px]"
                />
              </div>
            </div>
            <input
              type="email"
              name="user_email"
              placeholder="Email address"
              required
              className="px-[10px] py-[12px] w-full border border-[#999] text-[#858585] rounded-[4px] text-[14px]"
            />
            <textarea
              name="message"
              placeholder="Leave Message here..."
              required
              className="px-[10px] py-[12px] h-[153px] w-full border border-[#999] text-[#858585] rounded-[4px] text-[14px]"
            />
            <ToastContainer position="top-right" autoClose={3000} />
          </div>
          <Button
            title="Send Message"
            bgColor="#000"
            hoverBgColor="#00C853"
            textColor="#fff"
            hoverTextColor="#fff"
          />
        </form>
      </div>

      <div className="relative top-[500px]">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
