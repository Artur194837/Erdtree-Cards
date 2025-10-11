

export default function Navbar() {
    return (
    <nav className="flex flex-col justify-between fixed left-0 top-[25%] h-[50vh] w-32 z-50">
            <button id="bosse" className="text-[#FFFAA9] text-3xl">Bosse</button>
            <button id="npcs" className="text-[#FFFAA9] text-3xl">NPCs</button>
            <button id="waffen" className="text-[#FFFAA9] text-3xl">Waffen</button>
            <button id="ruestungen" className="text-[#FFFAA9] text-3xl">Rüstungen</button>
        </nav>
    );
}