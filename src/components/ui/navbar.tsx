

export default function Navbar({ highLightCategory } : { highLightCategory : string}) {
    return (
    <nav className="flex flex-col justify-between fixed left-0 top-[25%] h-[50vh] w-32 z-50">
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
    </nav>
    );
}