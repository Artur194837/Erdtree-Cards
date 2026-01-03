import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface SearchbarProps{
        searchParamUseState: [string, Dispatch<SetStateAction<string>>],
        className?: string
    }

export default function Searchbar({ searchParamUseState, className }: SearchbarProps) {
    function handleSearchParamChange(event: React.ChangeEvent<HTMLInputElement>) {
        searchParamUseState[1](event.target.value);
    }

    return (
    <div className={`${className} flex items-center gap-2 bg-[#0a2627] px-2 py-1 w-50 sm:w-60 md:w-70 lg:w-80 xl:w-90 2xl:w-100 h-auto self-start rounded-xl border-[#FFFAA9] border mx-auto`}>
            <Image src="/lens.png" width={20} height={20} alt="Lens" className="w-5 h-5 object-contain" />
            <input type="text" value={searchParamUseState[0]} onChange={handleSearchParamChange} className="flex-1 min-w-0 bg-transparent outline-none text-sm text-[#FFFAA9] font-sans" />
        </div>
    );
}