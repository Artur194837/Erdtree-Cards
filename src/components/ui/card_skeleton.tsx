interface CardSkeletonProps{
    numberOfCards: number;
}


export default function CardSkeleton({numberOfCards}: CardSkeletonProps){
    return (
        <div className="flex">
            {Array.from({ length: numberOfCards }).map((_, i) => (
                <div
                key={i}
                className="border-[#fffaa9] border-4 w-[272px] h-[632px] mr-5"
                />
            ))}
        </div>
    );
}


