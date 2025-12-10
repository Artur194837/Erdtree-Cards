"use client";

import { useState } from 'react';

export default function CardForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('/api/cards', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        setMessage(data?.error || 'Fehler beim Hinzufügen');
      } else {
        setMessage(`Erfolg: ${JSON.stringify(data)}`);
        form.reset();
      }
    } catch (err) {
      setMessage(String(err));
    } finally {
      setLoading(false);
    }
  }

  const options = [
    {"value": "Magic Damage", "key": 1},
    {"value": "Fire Damage", "key": 2},
    {"value": "Lightning Damage", "key": 3},
    {"value": "Holy Damage", "key": 4},
    {"value": "Poison", "key": 5},
    {"value": "Scarlet Rot", "key": 6},
    {"value": "Blood Loss", "key": 7},
    {"value": "Frostbite", "key": 8},
    {"value": "Sleep", "key": 9},
    {"value": "Madness", "key": 10},
    {"value": "Death Blight", "key": 11},
    {"value": "Standard Damage", "key": 12},
    {"value": "Strike Damage", "key": 13},
    {"value": "Slash Damage", "key": 14},
    {"value": "Pierce Damage", "key": 15},
    {"value": "Critical Damage", "key": 16},
    {"value": "None", "key": 17}
  ]

  return (
  <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-4 bg-gray-900 rounded text-white">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <input type="text" name="name" placeholder="Name" className="p-2 border rounded text-black" required />

      <select name="rarity" className="p-2 border rounded text-black">
        <option value="Common">Common</option>
        <option value="Rare">Rare</option>
        <option value="Epic">Epic</option>
        <option value="Legendary">Legendary</option>
      </select>

      <select name="class_of_object" className="p-2 border rounded text-black">
        <option value="Boss">Boss</option>
        <option value="NPC">NPC</option>
        <option value="Weapon">Weapon</option>
        <option value="Armor">Armor</option>
      </select>

      <div className="flex flex-col gap-2">
        <label className="text-sm">Image</label>
        <input type="file" name="image" accept="image/*" required />
      </div>
    </div>

    {/* Attack Stats */}
    <fieldset className="grid md:grid-cols-3 gap-2 border p-3 rounded">
      <legend className="font-bold">Attack Stats</legend>
      <input type="float-input" name="base_attack" placeholder="Base Attack" className="p-2 border rounded text-black" />
      <input type="float-input" name="magic_attack" placeholder="Magic Attack" className="p-2 border rounded text-black" />
      <input type="float-input" name="fire_attack" placeholder="Fire Attack" className="p-2 border rounded text-black" />
      <input type="float-input" name="light_attack" placeholder="Lightning Attack" className="p-2 border rounded text-black" />
      <input type="float-input" name="holy_attack" placeholder="Holy Attack" className="p-2 border rounded text-black" />
      <input type="float-input" name="crit" placeholder="Critical Damage" className="p-2 border rounded text-black" />
    </fieldset>

    {/* Defense Stats */}
    <fieldset className="grid md:grid-cols-3 gap-2 border p-3 rounded">
      <legend className="font-bold">Defense</legend>
      <input type="float-input" name="parry_defense" placeholder="Parry Defense" className="p-2 border rounded text-black" />
      <input type="float-input" name="magic_defense" placeholder="Magic Defense" className="p-2 border rounded text-black" />
      <input type="float-input" name="fire_defense" placeholder="Fire Defense" className="p-2 border rounded text-black" />
      <input type="float-input" name="light_defense" placeholder="Lightning Defense" className="p-2 border rounded text-black" />
      <input type="float-input" name="holy_defense" placeholder="Holy Defense" className="p-2 border rounded text-black" />
    </fieldset>

    {/* Negations */}
    <fieldset className="grid md:grid-cols-3 gap-2 border p-3 rounded">
      <legend className="font-bold">Damage Negations</legend>
      <input type="float-input" name="physical_negation" placeholder="Physical" className="p-2 border rounded text-black" />
      <input type="float-input" name="strike_negation" placeholder="Strike" className="p-2 border rounded text-black" />
      <input type="float-input" name="slash_negation" placeholder="Slash" className="p-2 border rounded text-black" />
      <input type="float-input" name="pierce_negation" placeholder="Pierce" className="p-2 border rounded text-black" />
      <input type="float-input" name="magic_negation" placeholder="Magic" className="p-2 border rounded text-black" />
      <input type="float-input" name="fire_negation" placeholder="Fire" className="p-2 border rounded text-black" />
      <input type="float-input" name="light_negation" placeholder="Lightning" className="p-2 border rounded text-black" />
      <input type="float-input" name="holy_negation" placeholder="Holy" className="p-2 border rounded text-black" />
    </fieldset>

    {/* Requirements */}
    <fieldset className="grid md:grid-cols-5 gap-2 border p-3 rounded">
      <legend className="font-bold">Requirements</legend>
      <input type="float-input" name="str_requirement" placeholder="Strength" className="p-2 border rounded text-black" />
      <input type="float-input" name="dex_requirement" placeholder="Dexterity" className="p-2 border rounded text-black" />
      <input type="float-input" name="int_requirement" placeholder="Intelligence" className="p-2 border rounded text-black" />
      <input type="float-input" name="fai_requirement" placeholder="Faith" className="p-2 border rounded text-black" />
      <input type="float-input" name="arc_requirement" placeholder="Arcane" className="p-2 border rounded text-black" />
    </fieldset>

    {/* Scaling */}
    <fieldset className="grid md:grid-cols-5 gap-2 border p-3 rounded">
      <legend className="font-bold">Scaling</legend>
      {['str', 'dex', 'int', 'fai', 'arc'].map(stat => (
        <div className="flex items-center gap-2" key={stat}>
          <label className="capitalize w-16">{stat}</label>
          <select name={`${stat}_scaling`} className="p-2 border rounded text-black">
            <option value="">None</option>
            <option value="S">S</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </div>
      ))}
    </fieldset>

    {/* Other Stats */}
    <fieldset className="grid md:grid-cols-3 gap-2 border p-3 rounded">
      <legend className="font-bold">Other Stats</legend>
      <input type="float-input" name="boost" placeholder="Boost" className="p-2 border rounded text-black" />
      <input type="float-input" name="wgt" placeholder="Weight" className="p-2 border rounded text-black" />
      <input type="float-input" name="special_attack_fp" placeholder="Special Attack FP" className="p-2 border rounded text-black" />
      <input type="float-input" name="immunity" placeholder="Immunity" className="p-2 border rounded text-black" />
      <input type="float-input" name="robustness" placeholder="Robustness" className="p-2 border rounded text-black" />
      <input type="float-input" name="focus" placeholder="Focus" className="p-2 border rounded text-black" />
      <input type="float-input" name="vitality" placeholder="Vitality" className="p-2 border rounded text-black" />
      <input type="float-input" name="poise" placeholder="Poise" className="p-2 border rounded text-black" />
      <input type="text" name="special_attack" placeholder="Special Attack Name" className="p-2 border rounded text-black" />
      <input type="float-input" name="rng" placeholder='Range' className="p-2 border rounded text-black" /> 
      <input type="float-input" name="hp" placeholder='Health Points' className="p-2 border rounded text-black" />
    </fieldset>

    {/* Rewards */}
    <fieldset className="grid md:grid-cols-3 gap-2 border p-3 rounded">
      <legend className="font-bold">Rewards</legend>
      <input type="float-input" name="reward_runes" placeholder="Runes" className="p-2 border rounded text-black" />
      <input type="text" name="reward_one" placeholder="Reward 1" className="p-2 border rounded text-black" />
      <input type="text" name="reward_two" placeholder="Reward 2" className="p-2 border rounded text-black" />
      <input type="text" name="reward_three" placeholder="Reward 3" className="p-2 border rounded text-black" />
    </fieldset>

    <fieldset>
      <label>Strong VS</label>
      <select name='strong_vs_1' defaultValue="None">
        {options.map(option => (
          <option value={option.value} key={option.key}>{option.value}</option>
        ))}
      </select>
      <select name='strong_vs_2' defaultValue="None">
        {options.map(option => (
          <option value={option.value} key={option.key}>{option.value}</option>
        ))}
      </select>
      <select name='strong_vs_3' defaultValue="None">
        {options.map(option => (
          <option value={option.value} key={option.key}>{option.value}</option>
        ))}
      </select>
      <select name='strong_vs_4' defaultValue="None">
        {options.map(option => (
          <option value={option.value} key={option.key}>{option.value}</option>
        ))}
      </select>
    </fieldset>

    <fieldset>
      <label>Immune To</label>
      <select name='immune_to_1' defaultValue="None">
        {options.map(option => (
          <option value={option.value} key={option.key}>{option.value}</option>
        ))}
      </select>
      <select name='immune_to_2' defaultValue="None">
        {options.map(option => (
          <option value={option.value} key={option.key}>{option.value}</option>
        ))}
      </select>
      <select name='immune_to_3' defaultValue="None">
        {options.map(option => (
          <option value={option.value} key={option.key}>{option.value}</option>
        ))}
      </select>
      <select name='immune_to_4' defaultValue="None">
        {options.map(option => (
          <option value={option.value} key={option.key}>{option.value}</option>
        ))}
      </select>
    </fieldset>

    <fieldset>
      <label>Weak To</label>
      <select name='weak_to_1' defaultValue="None">
        {options.map(option => (
          <option value={option.value} key={option.key}>{option.value}</option>
        ))}
      </select>
      <select name='weak_to_2' defaultValue="None">
        {options.map(option => (
          <option value={option.value} key={option.key}>{option.value}</option>
        ))}
      </select>
      <select name='weak_to_3' defaultValue="None">
        {options.map(option => (
          <option value={option.value} key={option.key}>{option.value}</option>
        ))}
      </select>
      <select name='weak_to_4' defaultValue="None">
        {options.map(option => (
          <option value={option.value} key={option.key}>{option.value}</option>
        ))}
      </select>
    </fieldset>

    <input name='location' placeholder='location' />

    <button
      type="submit"
      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
      disabled={loading}
    >
      {loading ? 'Sende...' : 'Karte zur Datenbank hinzufügen'}
    </button>

    {message && <p className="mt-2 text-sm">{message}</p>}
  </form>
);

}