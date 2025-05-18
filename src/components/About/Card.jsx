
const Card = ({ title, description, bgColor }) => {
  return (
    <div className=' flex flex-col   gap-3 p-4 rounded-xl' style={{ backgroundColor: `${bgColor}` }}>
      <h1 className="text-[#000] font-[700] font-Playfair text-[24px] leading-normal self-stretch">{title}</h1>
      <p className="font-Poppins text-[#000] font-[400] text-[16px] leading-[32px] text-justify self-stretch">{description}</p>
    </div>
  )
}

export default Card