const ContactInf = ({ imageName, title, description }) => {
  return (
    <div className="w-full px-6 py-3 rounded-2 flex gap-3 bg-[#fff] items-center rounded-[8px]">
      <div>
        <img src={imageName} />
      </div>
      <div className="font-Poppins flex flex-col ">
        <h2 className="self-stretch text-[#000] text-[18px] font-[500]">
          {title}
        </h2>
        <p className="self-stretch text-[#444] text-[16px] font-[500]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ContactInf;
