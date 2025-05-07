import React from "react";

const TagButton = ({ detail }) => {
  return (
    <button className="px-3 py-[4px] font-Poppins font-[400] text-[14px] bg-[#000] text-[#f5f5f5]">
      {detail}
    </button>
  );
};

export default TagButton;
