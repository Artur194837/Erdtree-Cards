"use client"
import { useState } from "react";
import Image from "next/image";

export default function Navbar({ highLightCategory } : { highLightCategory : string}) {
    const [open, setOpen] = useState(false);

    return (
    <nav className="fixed left-0 top-[25%] h-[50vh] w-30 z-50">
            <div className={`bg-[#0b2829] flex flex-col items-end border-[#fcfdae] border-solid border-2 rounded-md lg:border-none lg:bg-transparent ${open ? "w-full h-full p-2" : "w-fit h-fit lg:w-full lg:h-full"}`}>
                <button  className="lg:hidden p-0 self-start" onClick={() => setOpen(!open)}>
                    <Image src="/burger_menu_gold.png" width={40} height={40} className="block" alt="Burger Menu" />  
                </button>
                <div className={`flex flex-col justify-between flex-1 items-end mt-2 ${open ? "block" : "hidden lg:flex w-0 h-0 sm:w-auto sm:h-auto"}`}>
                    {highLightCategory === "bosses" ?
                        <a id="bosses" href="/bosses" className="text-[#f3f16b] text-3xl">Bosses</a>
                    :
                        <a id="bosses" href="/bosses" className="text-[#FFFAA9] text-3xl">Bosses</a>}
                    {highLightCategory === "npcs" ?
                        <a id="npcs" href="/npcs" className="text-[#f3f16b] text-3xl">NPCs</a>
                    :
                        <a id="npcs" href="/npcs" className="text-[#FFFAA9] text-3xl">NPCs</a>
                    } 
                    {highLightCategory === "weapons" ?
                        <a id="weapons" href="/weapons" className="text-[#f3f16b] text-3xl">Weapons</a>
                    :
                        <a id="weapons" href="/weapons" className="text-[#FFFAA9] text-3xl">Weapons</a>
                    }
                    {highLightCategory === "armor" ?
                        <a id="armor" href="/armor" className="text-[#f3f16b] text-3xl">Armor</a>
                    :
                        <a id="armor" href="/armor" className="text-[#FFFAA9] text-3xl">Armor</a>
                    }
                </div>
            </div>
    </nav>
    );
}