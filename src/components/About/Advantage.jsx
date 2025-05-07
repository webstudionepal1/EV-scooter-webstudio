import React from 'react'

const Advantage = ({title,descritpion,imageName}) => {
  return (
    <div className="flex gap-3">
        <div>
            <h1 className='text-[#000] text-[24px] font-[500] font-Poppins tracking-[1.44px] leading-normal'>
                {title}
            </h1>
            <p className='text-[#444] font-Poppins text-[16px] font-[400] self-stretch'>{descritpion}</p>
        </div>
        <img src={imageName} />
    </div>
  )
}

export default Advantage