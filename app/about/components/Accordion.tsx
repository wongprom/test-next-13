import React, { useState } from 'react';

type Props = {
  data:{
    title: string;
    info: string[];
    active?:number
  }
};

const Accordion = ({data}:Props) => {
  const [item, setItem] = useState(data)

  const handleToggleActive = () => {
    let newActive = item.active === 1 ? 0 : 1
    setItem({...item, active: newActive})
  }

  return <div onClick={handleToggleActive} className={`w-full bg-[#666666] text-[#ffffff] p-5 border border-[#ffffff] rounded-md max-w-2xl duration-300 cursor-pointer group ${item.active === 1 ? "is-active bg-[#ffffff] text-[#666] font-semibold": ""} `}>
    <div className="flex items-center">
      <div className="w-full group-[.is-active]:font-extrabold group-[.is-active]:text-2xl group-[.is-active]:underline duration-300">{item.title}</div>
      <div  className="text-xl rotate-90 group-[.is-active]:rotate-[270deg] duration-300">></div>
    </div>
    
    <div className=" flex flex-col gap-4 overflow-hidden max-h-0 group-[.is-active]:max-h-max group-[.is-active]:md:text-lg duration-300">
      {item.info.map(inf => <p>{inf}</p>)}
    </div>
  </div>;
};

export default Accordion;
