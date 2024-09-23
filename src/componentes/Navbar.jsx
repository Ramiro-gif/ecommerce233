import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
    AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";




const links =[
    {
        name: "Inicio",
        link: '/',
    },
    {
        name: 'Productos',
        link: '/',
    },
    {
        name: 'Servicios',
        link: '/',
    },
    {
        name: 'Como trabajamos',
        link: '/',
    }
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div
        className={`flex absolute ${
          isMenuOpen
            ? "flex flex-col items-center justify-around h-screen w-screen bg-gradient-to-t from-[#FFB8B8] to-[#1E1E1E]"
            : "flex absolute items-center justify-between h-[50px] w-screen"}`
        }>
      
            {
                !isMenuOpen&&
                <>
                <AiOutlineShoppingCart 
                cursor={"pointer"}
                size={30}/>
                <p></p>
                <AiOutlineMenu cursor={"pointer"} onClick={()=> setIsMenuOpen(true)} size={30}/>
                    </>
            }

           { isMenuOpen && (
            <>
            {links.map((l) =>(
                <Link 
                    className="flex pl-10 pr-10 text-2x1 font-semibold w-15 text-[#f1eeee]"
                    to={`${l.link}`}
                        onClick={()=> setIsMenuOpen(false)}>
                    {l.name}
                    </Link>
            ))}
            <div className="flex pt-10">
                <AiOutlineClose 
                cursor={"pointer"}
                size={30}
                onClick={()=> setIsMenuOpen(false)}
                />
            </div>

            </>)
           }
        </div>
    );
};
 



export default Navbar