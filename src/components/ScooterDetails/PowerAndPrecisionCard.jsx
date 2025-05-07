const PowerAndPrecisionCard = ({ imageName, title, description }) => {
  return (
    <div className="bg-[#171717] rounded-[10px] w-full flex p-4 pr-[75px] text-[#FFF] gap-4">
      <div className="w-[150px] h-[100px] rounded-[10px] overflow-hidden">
        <img
          src={imageName}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col justify-start gap-2">
        <h1 className="font-Playfair text-[18px] font-[700]">{title}</h1>
        <p className="font-Poppins text-[16px] font-[400]">{description}</p>
      </div>
    </div>
  );
};

export default PowerAndPrecisionCard;
