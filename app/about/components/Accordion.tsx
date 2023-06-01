import React, { useState } from 'react';

// type Props = {
//   data:{
//     active?:number
//     title: string;
//     0: string;
//     1: string;
//     2?: string;
//     3?: string;
//     4?: string;
//   }
// };

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

  return <div onClick={handleToggleActive} className={`bg-gray-400 p-5 border border-[#c9c6c655] rounded-md w-[280px] duration-300 cursor-pointer group ${item.active === 1 ? "is-active bg-pink-800": ""} `}>
    <div className="flex items-center ">
      <div className="w-full group-[.is-active]:font-bold duration-300">{item.title}</div>
      <div  className="text-xl rotate-90 group-[.is-active]:rotate-[270deg] duration-300">></div>
    </div>
    
    <div className="overflow-hidden max-h-0 group-[.is-active]:max-h-[100px] duration-300">
      {item.info.map(inf => <p>{inf}</p>)}
    </div>
  </div>;
};

export default Accordion;
