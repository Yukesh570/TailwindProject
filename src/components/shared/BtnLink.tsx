import React from "react";

interface BtnLinkProps{
    href:string;
    text:string
    className?:string;
}


export const BtnLink=({href,text,className =" "}:BtnLinkProps)=>{
    return (
        <a
        href={href}
        className={`px-4 py-2 rounded-full outline-none overflow-hidden border dark:bg-violet-600 cursor-pointer  transform transition-all duration-300 hover:scale-101 ${className}`}
        >
            <span className="relative z-10 text-white">{text}</span>
        </a>
      
    )
} 