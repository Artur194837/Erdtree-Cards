

export default interface CardData {
    // Grundlegende Informationen
    id: number;
    name: string;
    rarity: "Common" | "Rare" | "Epic" | "Legendary";
    class_of_object: "Boss" | "NPC" | "Weapon" | "Armor";
    image_url?: string;
    image_mime: string;
    image_data: Buffer;

    // Angriffswerte
    base_attack?: number;
    magic_attack?: number;
    fire_attack?: number;
    light_attack?: number;
    holy_attack?: number;
    crit?: number;

    // Verteidigungswerte
    parry_defense?: number;
    magic_defense?: number;
    fire_defense?: number;
    light_defense?: number;
    holy_defense?: number;

    // Negationswerte
    physical_negation?: number;
    strike_negation?: number;
    slash_negation?: number;
    pierce_negation?: number;
    magic_negation?: number;
    fire_negation?: number;
    light_negation?: number;
    holy_negation?: number;

    // Anforderungen
    str_requirement?: number;
    dex_requirement?: number;
    int_requirement?: number;
    fai_requirement?: number;
    arc_requirement?: number;

    // Skalierung
    str_scaling?: 'S' | 'A' | 'B' | 'C' | 'D' | 'E';
    dex_scaling?: 'S' | 'A' | 'B' | 'C' | 'D' | 'E';
    int_scaling?: 'S' | 'A' | 'B' | 'C' | 'D' | 'E';
    fai_scaling?: 'S' | 'A' | 'B' | 'C' | 'D' | 'E';
    arc_scaling?: 'S' | 'A' | 'B' | 'C' | 'D' | 'E';

    // Sonstige Werte
    boost?: number;
    wgt?: number;
    special_attack_fp?: number;
    immunity?: number;
    robustness?: number;
    focus?: number;
    vitality?: number;
    poise?: number;
    special_attack?: string;
    rng?: number;

    // Belohnungen
    reward_runes?: number;
    reward_one?: string;
    reward_two?: string;
    reward_three?: string;

    location?: string;

    // Bosse Stärken und Schwächen
    strong_vs_1?: string;
    strong_vs_2?: string;
    strong_vs_3?: string;
    strong_vs_4?: string;
    immune_to_1?: string;
    immune_to_2?: string;
    immune_to_3?: string;
    immune_to_4?: string;
    weak_to_1?: string;
    weak_to_2?: string;
    weak_to_3?: string;
    weak_to_4?: string;
    hp?: number;
}