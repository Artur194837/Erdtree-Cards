// lib/db.ts (Wird NUR auf dem SERVER ausgeführt)
import postgres, { RowList, Row } from 'postgres';
import CardData from './cardData';
import DBResponse from './response';

// DB anlegen
export async function createDB() {
    const sql = postgres(process.env.POSTGRES_URL!);

    await sql`
      CREATE TABLE IF NOT EXISTS cards (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        rarity VARCHAR(100) NOT NULL,
        class_of_object VARCHAR(100) NOT NULL,
        image_mime TEXT,
        image_data BYTEA,
        image_url TEXT,
        
        -- Attack stats
        base_attack FLOAT,
        magic_attack FLOAT,
        fire_attack FLOAT,
        light_attack FLOAT,
        holy_attack FLOAT,
        crit FLOAT,
        
        -- Defense stats
        parry_defense FLOAT,
        magic_defense FLOAT,
        fire_defense FLOAT,
        light_defense FLOAT,
        holy_defense FLOAT,
        
        -- Negation stats
        physical_negation FLOAT,
        strike_negation FLOAT,
        slash_negation FLOAT,
        pierce_negation FLOAT,
        magic_negation FLOAT,
        fire_negation FLOAT,
        light_negation FLOAT,
        holy_negation FLOAT,
        
        -- Requirements
        str_requirement FLOAT,
        dex_requirement FLOAT,
        int_requirement FLOAT,
        fai_requirement FLOAT,
        arc_requirement FLOAT,
        
        -- Scaling
        str_scaling VARCHAR(1),
        dex_scaling VARCHAR(1),
        int_scaling VARCHAR(1),
        fai_scaling VARCHAR(1),
        arc_scaling VARCHAR(1),
        
        -- Other stats
        boost FLOAT,
        wgt FLOAT,
        special_attack_fp FLOAT,
        immunity FLOAT,
        robustness FLOAT,
        focus FLOAT,
        vitality FLOAT,
        poise FLOAT,
        special_attack VARCHAR(100),
        rng FLOAT,
        
        -- Rewards
        reward_runes INTEGER,
        reward_one VARCHAR(100),
        reward_two VARCHAR(100),
        reward_three VARCHAR(100),

        location VARCHAR(100),
        strong_vs_1 VARCHAR(100),
        strong_vs_2 VARCHAR(100),
        strong_vs_3 VARCHAR(100),
        strong_vs_4 VARCHAR(100),
        immune_to_1 VARCHAR(100),
        immune_to_2 VARCHAR(100),
        immune_to_3 VARCHAR(100),
        immune_to_4 VARCHAR(100),
        weak_to_1 VARCHAR(100),
        weak_to_2 VARCHAR(100),
        weak_to_3 VARCHAR(100),
        weak_to_4 VARCHAR(100),

        hp INTEGER
      );
    `;
    
    return new Response(JSON.stringify({ status: 'success' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

// Karte hinzufügen
export async function addCard(
  // Basic information
  name: string,
  rarity: string,
  class_of_object: string,
  imageBuffer: Buffer | null,
  imageMime: string | null,
  image_url?: string,
  // Attack stats
  base_attack?: number,
  magic_attack?: number,
  fire_attack?: number,
  light_attack?: number,
  holy_attack?: number,
  crit?: number,
  // Defense stats
  parry_defense?: number,
  magic_defense?: number,
  fire_defense?: number,
  light_defense?: number,
  holy_defense?: number,
  // Negation stats
  physical_negation?: number,
  strike_negation?: number,
  slash_negation?: number,
  pierce_negation?: number,
  magic_negation?: number,
  fire_negation?: number,
  light_negation?: number,
  holy_negation?: number,
  // Requirements
  str_requirement?: number,
  dex_requirement?: number,
  int_requirement?: number,
  fai_requirement?: number,
  arc_requirement?: number,
  // Scaling
  str_scaling?: string,
  dex_scaling?: string,
  int_scaling?: string,
  fai_scaling?: string,
  arc_scaling?: string,
  // Other stats
  boost?: number,
  wgt?: number,
  special_attack_fp?: number,
  immunity?: number,
  robustness?: number,
  focus?: number,
  vitality?: number,
  poise?: number,
  special_attack?: string,
  rng?: number,
  // Rewards
  reward_runes?: number,
  reward_one?: string,
  reward_two?: string,
  reward_three?: string,

  location?: string,

  strong_vs_1?: string,
  strong_vs_2?: string,
  strong_vs_3?: string,
  strong_vs_4?: string,
  immune_to_1?: string,
  immune_to_2?: string,
  immune_to_3?: string,
  immune_to_4?: string,
  weak_to_1?: string,
  weak_to_2?: string,
  weak_to_3?: string,
  weak_to_4?: string,

  hp?: number

) {
  if (!process.env.POSTGRES_URL) {
    console.error('POSTGRES_URL not set');
    return { error: 'Server configuration error: POSTGRES_URL not set' };
  }

  const sql = postgres(process.env.POSTGRES_URL);

    try {
      const res = await sql`
        INSERT INTO cards (
          name, rarity, class_of_object, image_url, image_mime, image_data,
          base_attack, magic_attack, fire_attack, light_attack, holy_attack, crit,
          parry_defense, magic_defense, fire_defense, light_defense, holy_defense,
          physical_negation, strike_negation, slash_negation, pierce_negation,
          magic_negation, fire_negation, light_negation, holy_negation,
          str_requirement, dex_requirement, int_requirement, fai_requirement, arc_requirement,
          str_scaling, dex_scaling, int_scaling, fai_scaling, arc_scaling,
          boost, wgt, special_attack_fp, immunity, robustness, focus, vitality, poise,
          special_attack, reward_runes, reward_one, reward_two, reward_three, location, rng, strong_vs_1, 
          strong_vs_2, strong_vs_3, strong_vs_4, immune_to_1, immune_to_2, immune_to_3, immune_to_4,
          weak_to_1, weak_to_2, weak_to_3, weak_to_4, hp
        )
        VALUES (
          ${name}, ${rarity}, ${class_of_object}, ${image_url || null}, ${imageMime || null}, ${imageBuffer || null},
          ${base_attack || null}, ${magic_attack || null}, ${fire_attack || null},
          ${light_attack || null}, ${holy_attack || null}, ${crit || null},
          ${parry_defense || null}, ${magic_defense || null}, ${fire_defense || null},
          ${light_defense || null}, ${holy_defense || null},
          ${physical_negation || null}, ${strike_negation || null}, ${slash_negation || null},
          ${pierce_negation || null}, ${magic_negation || null}, ${fire_negation || null},
          ${light_negation || null}, ${holy_negation || null},
          ${str_requirement || null}, ${dex_requirement || null}, ${int_requirement || null},
          ${fai_requirement || null}, ${arc_requirement || null},
          ${str_scaling || null}, ${dex_scaling || null}, ${int_scaling || null},
          ${fai_scaling || null}, ${arc_scaling || null},
          ${boost || null}, ${wgt || null}, ${special_attack_fp || null},
          ${immunity || null}, ${robustness || null}, ${focus || null},
          ${vitality || null}, ${poise || null},
          ${special_attack || null}, ${reward_runes || null},
          ${reward_one || null}, ${reward_two || null}, ${reward_three || null}, ${location || null}, ${rng || null}, ${strong_vs_1 || null}, 
          ${strong_vs_2 || null}, ${strong_vs_3 || null}, ${strong_vs_4 || null}, ${immune_to_1 || null}, ${immune_to_2 || null}, 
          ${immune_to_3 || null}, ${immune_to_4 || null}, ${weak_to_1 || null}, ${weak_to_2 || null}, ${weak_to_3 || null}, ${weak_to_4 || null},
          ${hp || null}
        )
        RETURNING id, name;
      `;

      return { status: 'success', inserted: res[0] };
    } catch (error) {
      console.error('addCard error:', error);
      return { error: String(error) };
    }
}

//Alle Karten erhalten
export async function getCards() : Promise<DBResponse> {
  if (!process.env.POSTGRES_URL) {
    console.error('POSTGRES_URL not set');
    return { cards: [], status: 'Server configuration error: POSTGRES_URL not set' };
  }
  const sql = postgres(process.env.POSTGRES_URL);

  try {
    const res = await sql`
      SELECT *
      FROM cards
      ORDER BY id DESC;
    ` as CardData[];

    return {status: "sucess", cards: res};
  } catch (error) {
    console.error('getCards error:', error);
    return {status: "error", cards: []};
  }
}

//Boss Karten erhalten
export async function getBossCards() : Promise<DBResponse> {
  if (!process.env.POSTGRES_URL) {
    console.error('POSTGRES_URL not set');
    return { cards: [], status: 'Server configuration error: POSTGRES_URL not set' };
  }
  const sql = postgres(process.env.POSTGRES_URL);

  try {
    const res = await sql`
      SELECT *
      FROM cards
      WHERE class_of_object = 'Boss'
      ORDER BY id DESC;
    ` as CardData[];

    return {status: "sucess", cards: res};
  } catch (error) {
    console.error('getCards error:', error);
    return {status: "error", cards: []};
  }
}

//NPC Karten erhalten
export async function getNPCCards() : Promise<DBResponse> {
  if (!process.env.POSTGRES_URL) {
    console.error('POSTGRES_URL not set');
    return { cards: [], status: 'Server configuration error: POSTGRES_URL not set' };
  }
  const sql = postgres(process.env.POSTGRES_URL);

  try {
    const res = await sql`
      SELECT *
      FROM cards
      WHERE class_of_object = 'NPC'
      ORDER BY id DESC;
    ` as CardData[];

    return {status: "sucess", cards: res};
  } catch (error) {
    console.error('getCards error:', error);
    return {status: "error", cards: []};
  }
}

//Waffen Karten erhalten
export async function getWeaponCards() : Promise<DBResponse> {
  if (!process.env.POSTGRES_URL) {
    console.error('POSTGRES_URL not set');
    return { cards: [], status: 'Server configuration error: POSTGRES_URL not set' };
  }
  const sql = postgres(process.env.POSTGRES_URL, { prepare: false });

  try {
    const res = await sql`
      SELECT *
      FROM cards
      WHERE class_of_object = 'Weapon'
      ORDER BY id DESC;
    ` as CardData[];

    return {status: "sucess", cards: res};
  } catch (error) {
    console.error('getCards error:', error);
    return {status: "error", cards: []};
  }
}

//Rüstungs Karten erhalten
export async function getArmorCards() : Promise<DBResponse> {
  if (!process.env.POSTGRES_URL) {
    console.error('POSTGRES_URL not set');
    return { cards: [], status: 'Server configuration error: POSTGRES_URL not set' };
  }
  const sql = postgres(process.env.POSTGRES_URL);

  try {
    const res = await sql`
      SELECT *
      FROM cards
      WHERE class_of_object = 'Armor'
      ORDER BY id DESC;
    ` as CardData[];

    return {status: "sucess", cards: res};
  } catch (error) {
    console.error('getCards error:', error);
    return {status: "error", cards: []};
  }
}

