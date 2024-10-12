import React, { useContext, useEffect, useState  } from 'react';
import { AiOutlineFilter, AiOutlineLoading3Quarters } from 'react-icons/ai'

const ShopCatalogo = () => {
    const[showfilterMenu, setShowFilterMenu] =useState(false)
  return (
    <div className='bg-green-600'>
        <div className='flex'>
            <AiOutlineFilter 
                size={30} 
                color='#f2f2f2'
                onClick={()=> setShowFilterMenu(true)}
                
                />
                {
                    showfilterMenu &&(
                    <div className="flex pl-6 animate-[opening_is_ease-in-out] flex-col w-[70%] h-screen p-4 absolute bg-[#D9D9D9] rounded-sm"></div>
                    
                )}
        </div>
       </div>
  );
};

export default ShopCatalogo