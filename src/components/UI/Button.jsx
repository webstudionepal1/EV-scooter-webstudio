import React from "react";

export const Button = ({ title, bgColor, hoverBgColor, textColor, hoverTextColor, onClick }) => {
  return (
    <button
      className={`
      font-Poppins font-[600] text-base p-3
      hover:rounded-tl-2xl hover:rounded-br-2xl
      transition-all ease-in duration-300 cursor-pointer w-fit
    `}
      style={{ backgroundColor: `${bgColor}`, color: `${textColor}` }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = hoverBgColor;
        e.target.style.color = hoverTextColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = bgColor;
        e.target.style.color = textColor;
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
