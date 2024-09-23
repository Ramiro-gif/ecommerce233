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
                className="pl-2"
                size={40}/>
                <p className="text-3xl font-pacifico text-[#FFCC00]" style={{
                textShadow: `
                    -1px -2px 0 #283593,   
                    -2px 2px 0 #283593,   
                `,
                letterSpacing: '3px'
                }} >La Calesita</p>
                <AiOutlineMenu 
                cursor={"pointer"}
                onClick={()=> setIsMenuOpen(true)} 
                size={40}
                color="#f1f1f1" className="p-2"

                />
            
                    </>
            }

           { isMenuOpen && (
            <>
            {links.map((l) =>(
                <Link 
                    className="flex pl-10 pr-10 text-2x1 font-Pacifico text-[#f1eeee]"
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