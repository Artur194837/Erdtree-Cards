import { FilterState } from "@/app/lib/filterState";
import { getWeaponCardsByFilterState } from "@/app/lib/db";


export async function POST(req: Request) {
    const filterState : FilterState = await req.json();

    const result = await getWeaponCardsByFilterState(filterState);
            
    if (result.status === "error") {
                return new Response(JSON.stringify(result), { status: 500, headers: { 'Content-Type': 'application/json' } });
            }

            return new Response(JSON.stringify(result), { status: 200, headers: { 'Content-Type': 'application/json' } });
}