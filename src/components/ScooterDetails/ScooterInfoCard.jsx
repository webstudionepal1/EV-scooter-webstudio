
const ScooterInfoCard = ({ icons, details, title }) => {
  return (
    <div className="bg-[#171717] py-[7.81px]  rounded-[7.808px] flex flex-col items-center justify-center size-[89px]">
      <img src={icons} alt="" className="size-[31.23px]" />
      <h1 className="font-Playfair text-[14px] font-700 text-center text-[#fff]">
        {details}
      </h1>
      <h3 className="font-Poppins text-center text-[10px] font-[500] text-[#f8f9fa80]">
        {title}
      </h3>
    </div>
  );
};

export default ScooterInfoCard;
