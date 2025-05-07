import React from "react";

const Features = ({ iconSrc, content }) => {
  return (
    <div className="w-50  p-2">
      <div className="flex flex-col items-center gap-3">
        <div className="border-[1px] border-solid h-12 w-12 flex items-center justify-center p-3 border-[#00C853] rounded-full">
          <img src={iconSrc} className="object-cover" />
        </div>
        <p className="text-center text-[#444] font-Poppins text-sm">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Features;
