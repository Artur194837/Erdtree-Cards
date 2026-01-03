"use server";

import { addCard, getWeaponCards, getArmorCards, getBossCards, getNPCCards } from "@/app/lib/db";

/**
 * POST-Handler zum Erstellen neuer Karten.
 * Unterstützt sowohl 'multipart/form-data' (für Datei-Uploads) als auch 'application/json'.
 */
export async function POST(request: Request) {
    try {
        const contentType = request.headers.get('content-type') || '';

        // Verarbeitung von Multipart-Form-Data (z.B. wenn ein Bild hochgeladen wird)
        if (contentType.includes('multipart/form-data')) {
            const formData = await request.formData();
            const name = String(formData.get('name') || '');
            const rarity = String(formData.get('rarity') || '');
            const class_of_object = String(formData.get('class_of_object') || '');
            const image = formData.get('image') as File | null;

            // Hilfsfunktion: sicher Zahlen aus FormData lesen
            // Konvertiert Strings in Zahlen und gibt 0 zurück, wenn der Wert ungültig oder leer ist.
            function getNumber(formData: FormData, key: string): number {
                const value = formData.get(key);
                if (typeof value === 'string' && value.trim().length > 0) {
                    const parsed = parseFloat(value);
                    return isNaN(parsed) ? 0 : parsed;
                }
                return 0;
            }

            // --- Datenextraktion aus FormData ---

            // Angriffs-Werte
            const base_attack = getNumber(formData, 'base_attack');
            const magic_attack = getNumber(formData, 'magic_attack');
            const fire_attack = getNumber(formData, 'fire_attack');
            const light_attack = getNumber(formData, 'light_attack');
            const holy_attack = getNumber(formData, 'holy_attack');
            const crit = getNumber(formData, 'crit');

            // Verteidigungs-Werte (Defenses)
            const parry_defense = getNumber(formData, 'parry_defense');
            const magic_defense = getNumber(formData, 'magic_defense');
            const fire_defense = getNumber(formData, 'fire_defense');
            const light_defense = getNumber(formData, 'light_defense');
            const holy_defense = getNumber(formData, 'holy_defense');

            // Schadensnegierung (Negations)
            const physical_negation = getNumber(formData, 'physical_negation');
            const strike_negation = getNumber(formData, 'strike_negation');
            const slash_negation = getNumber(formData, 'slash_negation');
            const pierce_negation = getNumber(formData, 'pierce_negation');
            const magic_negation = getNumber(formData, 'magic_negation');
            const fire_negation = getNumber(formData, 'fire_negation');
            const light_negation = getNumber(formData, 'light_negation');
            const holy_negation = getNumber(formData, 'holy_negation');

            // Anforderungen (Requirements)
            const str_requirement = getNumber(formData, 'str_requirement');
            const dex_requirement = getNumber(formData, 'dex_requirement');
            const int_requirement = getNumber(formData, 'int_requirement');
            const fai_requirement = getNumber(formData, 'fai_requirement');
            const arc_requirement = getNumber(formData, 'arc_requirement');

            // Skalierung (Scaling) - Buchstabenwerte (S, A, B, etc.)
            const str_scaling = formData.get('str_scaling') as 'S' | 'A' | 'B' | 'C' | 'D' | 'E' | '';
            const dex_scaling = formData.get('dex_scaling') as 'S' | 'A' | 'B' | 'C' | 'D' | 'E' | '';
            const int_scaling = formData.get('int_scaling') as 'S' | 'A' | 'B' | 'C' | 'D' | 'E' | '';
            const fai_scaling = formData.get('fai_scaling') as 'S' | 'A' | 'B' | 'C' | 'D' | 'E' | '';
            const arc_scaling = formData.get('arc_scaling') as 'S' | 'A' | 'B' | 'C' | 'D' | 'E' | '';
            
            // Sonstige Statistiken
            const boost = getNumber(formData, 'boost');
            const wgt = getNumber(formData, 'wgt');
            const special_attack_fp = getNumber(formData, 'special_attack_fp');
            const immunity = getNumber(formData, 'immunity');
            const robustness = getNumber(formData, 'robustness');
            const focus = getNumber(formData, 'focus');
            const vitality = getNumber(formData, 'vitality');
            const poise = getNumber(formData, 'poise');
            const special_attack = formData.get('special_attack') as string;
            
            // Belohnungen und Standort
            const reward_runes = getNumber(formData, 'reward_runes');
            const reward_one = formData.get('reward_one') as string;
            const reward_two = formData.get('reward_two') as string;
            const reward_three = formData.get("reward_three") as string;
            const location = formData.get('location') as string;
            const rng = getNumber(formData, "rng");

            // Stärken und Schwächen (für Bosse/NPCs)
            const strong_vs_1 = formData.get("strong_vs_1") as string;
            const strong_vs_2 = formData.get("strong_vs_2") as string;
            const strong_vs_3 = formData.get("strong_vs_3") as string;
            const strong_vs_4 = formData.get("strong_vs_4") as string;

            const immune_to_1 = formData.get("immune_to_1") as string;
            const immune_to_2 = formData.get("immune_to_2") as string;
            const immune_to_3 = formData.get("immune_to_3") as string;
            const immune_to_4 = formData.get("immune_to_4") as string;

            const weak_to_1 = formData.get("weak_to_1") as string;
            const weak_to_2 = formData.get("weak_to_2") as string;
            const weak_to_3 = formData.get("weak_to_3") as string;
            const weak_to_4 = formData.get("weak_to_4") as string;

            const hp = getNumber(formData, "hp");

            // Validierung: Bild ist erforderlich
            if (!image) {
                return new Response(JSON.stringify({ error: 'No file provided' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
            }

            // Bildverarbeitung: Konvertierung in Buffer für die Datenbank
            let imageBuffer: Buffer | null = null;
            let imageMime: string | null = null;
            if (image) {
                const arrayBuffer = await image.arrayBuffer();
                imageBuffer = Buffer.from(arrayBuffer);
                imageMime = image.type || 'application/octet-stream';
            }

            const image_url = undefined;

            // Aufruf der Datenbankfunktion zum Hinzufügen der Karte
            const result = await addCard(name,
            rarity,
            class_of_object,
            imageBuffer,
            imageMime,
            image_url,
            // Attack stats
            base_attack,
            magic_attack ,
            fire_attack ,
            light_attack ,
            holy_attack ,
            crit ,
            // Defense stats
            parry_defense ,
            magic_defense ,
            fire_defense ,
            light_defense ,
            holy_defense ,
            // Negation stats
            physical_negation ,
            strike_negation ,
            slash_negation ,
            pierce_negation ,
            magic_negation ,
            fire_negation ,
            light_negation ,
            holy_negation ,
            // Requirements
            str_requirement ,
            dex_requirement ,
            int_requirement ,
            fai_requirement ,
            arc_requirement ,
            // Scaling
            str_scaling ,
            dex_scaling ,
            int_scaling ,
            fai_scaling ,
            arc_scaling ,
            // Other stats
            boost ,
            wgt ,
            special_attack_fp ,
            immunity ,
            robustness ,
            focus ,
            vitality ,
            poise ,
            special_attack ,
            rng,
            // Rewards
            reward_runes ,
            reward_one ,
            reward_two,
            reward_three,
            location,
            strong_vs_1,
            strong_vs_2,
            strong_vs_3,
            strong_vs_4,
            immune_to_1,
            immune_to_2,
            immune_to_3,
            immune_to_4,
            weak_to_1,
            weak_to_2,
            weak_to_3,
            weak_to_4,
            hp);

            if (result?.error) {
                return new Response(JSON.stringify(result), { status: 500, headers: { 'Content-Type': 'application/json' } });
            }

            return new Response(JSON.stringify(result), { status: 200, headers: { 'Content-Type': 'application/json' } });
        }

        // Fallback: Verarbeitung von JSON-Daten (wenn kein Datei-Upload erfolgt)
        const body = await request.json();
        const { name, 
            rarity, 
            class_of_object, 
            image_url, 
            // Attack stats
            base_attack,
            magic_attack ,
            fire_attack ,
            light_attack ,
            holy_attack ,
            crit ,
            // Defense stats
            parry_defense ,
            magic_defense ,
            fire_defense ,
            light_defense ,
            holy_defense ,
            // Negation stats
            physical_negation ,
            strike_negation ,
            slash_negation ,
            pierce_negation ,
            magic_negation ,
            fire_negation ,
            light_negation ,
            holy_negation ,
            // Requirements
            str_requirement ,
            dex_requirement ,
            int_requirement ,
            fai_requirement ,
            arc_requirement ,
            // Scaling
            str_scaling ,
            dex_scaling ,
            int_scaling ,
            fai_scaling ,
            arc_scaling ,
            // Other stats
            boost ,
            wgt ,
            special_attack_fp ,
            immunity ,
            robustness ,
            focus ,
            vitality ,
            poise ,
            special_attack ,
            rng,
            // Rewards
            reward_runes ,
            reward_one ,
            reward_two,
            reward_three,
            location,
            strong_vs_1,
            strong_vs_2,
            strong_vs_3,
            strong_vs_4,
            immune_to_1,
            immune_to_2,
            immune_to_3,
            immune_to_4,
            weak_to_1,
            weak_to_2,
            weak_to_3,
            weak_to_4,
            hp } = body;

        // Aufruf der Datenbankfunktion mit JSON-Daten (kein Bild-Buffer)
        const result = await addCard(
            name,
            rarity,
            class_of_object,
            null,
            null,
            image_url,
            // Attack stats
            base_attack,
            magic_attack ,
            fire_attack ,
            light_attack ,
            holy_attack ,
            crit ,
            // Defense stats
            parry_defense ,
            magic_defense ,
            fire_defense ,
            light_defense ,
            holy_defense ,
            // Negation stats
            physical_negation ,
            strike_negation ,
            slash_negation ,
            pierce_negation ,
            magic_negation ,
            fire_negation ,
            light_negation ,
            holy_negation ,
            // Requirements
            str_requirement ,
            dex_requirement ,
            int_requirement ,
            fai_requirement ,
            arc_requirement ,
            // Scaling
            str_scaling ,
            dex_scaling ,
            int_scaling ,
            fai_scaling ,
            arc_scaling ,
            // Other stats
            boost ,
            wgt ,
            special_attack_fp ,
            immunity ,
            robustness ,
            focus ,
            vitality ,
            poise ,
            special_attack ,
            rng,
            // Rewards
            reward_runes ,
            reward_one ,
            reward_two,
            reward_three,
            location,
            strong_vs_1,
            strong_vs_2,
            strong_vs_3,
            strong_vs_4,
            immune_to_1,
            immune_to_2,
            immune_to_3,
            immune_to_4,
            weak_to_1,
            weak_to_2,
            weak_to_3,
            weak_to_4,
            hp);

        if (result?.error) {
            return new Response(JSON.stringify(result), { status: 500, headers: { 'Content-Type': 'application/json' } });
        }

        return new Response(JSON.stringify(result), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error('Error in POST /api/items:', error);
        return new Response(JSON.stringify({ error: String(error) }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

/**
 * GET-Handler zum Abrufen von Karten.
 * Unterstützt Filterung nach 'class_of_object' (Weapon, Armor, Boss, NPC).
 */
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const classOfObject = searchParams.get('class_of_object');

        let res;

        // Auswahl der entsprechenden Datenbankabfrage basierend auf dem Parameter
        switch (classOfObject) {
            case 'Weapon':
                res = await getWeaponCards();
                break;
            case 'Armor':
                res = await getArmorCards();
                break;
            case 'Boss':
                res = await getBossCards();
                break;
            case 'NPC':
                res = await getNPCCards();
                break;
            default:
                // Standardmäßig Waffen zurückgeben, wenn kein oder ein ungültiger Parameter angegeben ist
                res = await getWeaponCards();
                break;
        }

        if (res.status === "error") {
            return new Response(JSON.stringify(res), { status: 500, headers: { 'Content-Type': 'application/json' } });
        }

        // Verarbeitung der Bilddaten für die Frontend-Anzeige
        const cardsRaw: any[] = Array.isArray(res.cards) ? res.cards : [];
        const cards = cardsRaw.map((c: any) => {
            const out: any = { ...c };
            // Konvertierung von BLOB (Buffer) zu Base64-Data-URL für Bilder
            if (c.image_data) {
                const b = Buffer.from(c.image_data);
                const base64 = b.toString('base64');
                out.image_data_url = `data:${c.image_mime || 'image/*'};base64,${base64}`;
            }
            // Konvertierung von BLOB (Buffer) zu Base64-Data-URL für Eigenschaftsbilder (falls vorhanden)
            if (c.eigenschaften_data) {
                const e = Buffer.from(c.eigenschaften_data);
                const eb64 = e.toString('base64');
                out.eigenschaften_data_url = `data:${c.eigenschaften_mime || 'image/*'};base64,${eb64}`;
            }
            return out;
        });

        return new Response(JSON.stringify({ status: 'success', cards }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error('Error in GET /api/items:', error);
        return new Response(JSON.stringify({ error: String(error) }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
