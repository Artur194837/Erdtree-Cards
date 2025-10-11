import Image from "next/image";

export default function Searchbar() {
    return (
    <div className="flex items-center gap-2 border-[#FFFAA9] bg-[#0a2627] px-2 py-1 w-[37vw] h-auto self-start rounded-xl border-[#FFFAA9] border">
            <Image src="/lens.png" width={20} height={20} alt="Lens" className="w-5 h-5 object-contain" />
            <input type="text" className="flex-1 min-w-0 bg-transparent outline-none text-sm text-[#FFFAA9]" />
        </div>
    );
}