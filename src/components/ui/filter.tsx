"use client";
import Image from "next/image";
import { useState } from "react";
import { FilterState } from "@/app/lib/filterState";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface FilterProps{
    type: string;
    className: string;

    useStates: {
        sortByUseState: [string, Dispatch<SetStateAction<string>>],
        sortOrderUseState: ["asc" | "desc", Dispatch<SetStateAction<"asc" | "desc">>],
    
        startIntervallBaseAttackUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallBaseAttackUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallMagicAttackUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallMagicAttackUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallFireAttackUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallFireAttackUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallLigtAttackUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallLigtAttackUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallHolyAttackUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallHolyAttackUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallParryDefenseUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallParryDefenseUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallMagicDefenseUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallMagicDefenseUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallFireDefenseUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallFireDefenseUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallLigtDefenseUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallLigtDefenseUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallHolyDefenseUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallHolyDefenseUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallStrScalingUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallStrScalingUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallDexScalingUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallDexScalingUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallIntScalingUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallIntScalingUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallFaiScalingUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallFaiScalingUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallArcScalingUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallArcScalingUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallStrRequirementUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallStrRequirementUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallDexRequirementUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallDexRequirementUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallIntRequirementUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallIntRequirementUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallFaiRequirementUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallFaiRequirementUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallArcRequirementUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallArcRequirementUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallSpecialAttackFPUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallSpecialAttackFPUseState?: [string, Dispatch<SetStateAction<string>>],
    
        startIntervallWgtUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallWgtUseState?: [string, Dispatch<SetStateAction<string>>],

        startIntervallCritUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallCritUseState?: [string, Dispatch<SetStateAction<string>>],

        startIntervallRngUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallRngUseState?: [string, Dispatch<SetStateAction<string>>],

        startIntervallBoostUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallBoostUseState?: [string, Dispatch<SetStateAction<string>>],

        startIntervallPhysicalNegationUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallPhysicalNegationUseState?: [string, Dispatch<SetStateAction<string>>],
        startIntervallStrikeNegationUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallStrikeNegationUseState?: [string, Dispatch<SetStateAction<string>>],
        startIntervallSlashNegationUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallSlashNegationUseState?: [string, Dispatch<SetStateAction<string>>],
        startIntervallPierceNegationUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallPierceNegationUseState?: [string, Dispatch<SetStateAction<string>>],
        startIntervallMagicNegationUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallMagicNegationUseState?: [string, Dispatch<SetStateAction<string>>],
        startIntervallFireNegationUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallFireNegationUseState?: [string, Dispatch<SetStateAction<string>>],
        startIntervallLigtNegationUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallLigtNegationUseState?: [string, Dispatch<SetStateAction<string>>],
        startIntervallHolyNegationUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallHolyNegationUseState?: [string, Dispatch<SetStateAction<string>>],
        startIntervallImmunityUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallImmunityUseState?: [string, Dispatch<SetStateAction<string>>],
        startIntervallRobustnessUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallRobustnessUseState?: [string, Dispatch<SetStateAction<string>>],
        startIntervallFocusUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallFocusUseState?: [string, Dispatch<SetStateAction<string>>],
        startIntervallVitalityUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallVitalityUseState?: [string, Dispatch<SetStateAction<string>>],
        startIntervallPoiseUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallPoiseUseState?: [string, Dispatch<SetStateAction<string>>],

        startIntervallRewardRunesUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallRewardRunesUseState?: [string, Dispatch<SetStateAction<string>>],
        startIntervallHpUseState?: [string, Dispatch<SetStateAction<string>>],
        endIntervallHpUseState?: [string, Dispatch<SetStateAction<string>>],

    };
}

export default function Filter({type, 
                                className,
                                useStates}: FilterProps){
    const router = useRouter();

    function openOrCloseFilter(){
        setVisible(!visible);
    }

    function setSortByAndSortOder(label : string){
        if(label === sortBy){
            if(sortOrder === "asc")
                setSortOrder("desc");
            else
                setSortOrder("asc");
        }
        else{
            setSortBy(label);
            setSortOrder("asc");
        }
    }

    function handleSortByChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSortByAndSortOder(event.target.value);
    }

    function getSortByColor(sortBy: string): string {
        switch (sortBy) {
            case "Magic Attack":
            case "Magic Defense":
                return "text-blue-200";
            case "Fire Attack":
            case "Fire Defense":
                return "text-orange-300";
            case "Ligt Attack":
            case "Ligt Defense":
                return "text-yellow-300";
            case "Holy Attack":
            case "Holy Defense":
                return "text-[#ffd894]";
            case "Crit": return "text-red-400";
            case "Boost": return "text-blue-400";
            case "Rng": return "text-green-300";
            default: return "text-white";
        }
    }

    async function handleIntervallChange(name: string, event: React.ChangeEvent<HTMLInputElement>) {
        const value = String(event.target.value);

        switch (name) {
            // --- Base Damage ---
            case "startIntervallBaseAttack":
                setStartIntervallBaseAttack(String(value));
                break;
            case "endIntervallBaseAttack":
                setEndIntervallBaseAttack(String(value));
                break;

            // --- Magic Attack ---
            case "startIntervallMagicAttack":
                setStartIntervallMagicAttack(String(value));
                break;
            case "endIntervallMagicAttack":
                setEndIntervallMagicAttack(String(value));
                break;

            // --- Fire Attack ---
            case "startIntervallFireAttack":
                setStartIntervallFireAttack(String(value));
                break;
            case "endIntervallFireAttack":
                setEndIntervallFireAttack(String(value));
                break;

            // --- Light Attack ---
            case "startIntervallLigtAttack":
                setStartIntervallLigtAttack(String(value));
                break;
            case "endIntervallLigtAttack":
                setEndIntervallLigtAttack(String(value));
                break;

            // --- Holy Attack ---
            case "startIntervallHolyAttack":
                setStartIntervallHolyAttack(String(value));
                break;
            case "endIntervallHolyAttack":
                setEndIntervallHolyAttack(String(value));
                break;

            // --- Parry Defense ---
            case "startIntervallParryDefense":
                setStartIntervallParryDefense(String(value));
                break;
            case "endIntervallParryDefense":
                setEndIntervallParryDefense(String(value));
                break;

            // --- Magic Defense ---
            case "startIntervallMagicDefense":
                setStartIntervallMagicDefense(String(value));
                break;
            case "endIntervallMagicDefense":
                setEndIntervallMagicDefense(String(value));
                break;

            // --- Fire Defense ---
            case "startIntervallFireDefense":
                setStartIntervallFireDefense(String(value));
                break;
            case "endIntervallFireDefense":
                setEndIntervallFireDefense(String(value));
                break;

            // --- Light Defense ---
            case "startIntervallLigtDefense":
                setStartIntervallLigtDefense(String(value));
                break;
            case "endIntervallLigtDefense":
                setEndIntervallLigtDefense(String(value));
                break;

            // --- Holy Defense ---
            case "startIntervallHolyDefense":
                setStartIntervallHolyDefense(String(value));
                break;
            case "endIntervallHolyDefense":
                setEndIntervallHolyDefense(String(value));
                break;

            // --- Scaling ---
            case "startIntervallStrScaling":
                setStartIntervallStrScaling(value);
                break;
            case "endIntervallStrScaling":
                setEndIntervallStrScaling(value);
                break;

            case "startIntervallDexScaling":
                setStartIntervallDexScaling(value);
                break;
            case "endIntervallDexScaling":
                setEndIntervallDexScaling(value);
                break;

            case "startIntervallIntScaling":
                setStartIntervallIntScaling(value);
                break;
            case "endIntervallIntScaling":
                setEndIntervallIntScaling(value);
                break;

            case "startIntervallFaiScaling":
                setStartIntervallFaiScaling(value);
                break;
            case "endIntervallFaiScaling":
                setEndIntervallFaiScaling(value);
                break;

            case "startIntervallArcScaling":
                setStartIntervallArcScaling(value);
                break;
            case "endIntervallArcScaling":
                setEndIntervallArcScaling(value);
                break;

            // --- Requirements ---
            case "startIntervallStrRequirement":
                setStartIntervallStrRequirement(String(value));
                break;
            case "endIntervallStrRequirement":
                setEndIntervallStrRequirement(String(value));
                break;

            case "startIntervallDexRequirement":
                setStartIntervallDexRequirement(String(value));
                break;
            case "endIntervallDexRequirement":
                setEndIntervallDexRequirement(String(value));
                break;

            case "startIntervallIntRequirement":
                setStartIntervallIntRequirement(String(value));
                break;
            case "endIntervallIntRequirement":
                setEndIntervallIntRequirement(String(value));
                break;

            case "startIntervallFaiRequirement":
                setStartIntervallFaiRequirement(String(value));
                break;
            case "endIntervallFaiRequirement":
                setEndIntervallFaiRequirement(String(value));
                break;

            case "startIntervallArcRequirement":
                setStartIntervallArcRequirement(String(value));
                break;
            case "endIntervallArcRequirement":
                setEndIntervallArcRequirement(String(value));
                break;

            // --- Other Attributes ---
            case "startIntervallSpecialAttackFP":
                setStartIntervallSpecialAttackFP(String(value));
                break;
            case "endIntervallSpecialAttackFP":
                setEndIntervallSpecialAttackFP(String(value));
                break;

            case "startIntervallWgt":
                setStartIntervallWgt(String(value));
                break;
            case "endIntervallWgt":
                setEndIntervallWgt(String(value));
                break;

            case "startIntervallCrit":
                setStartIntervallCrit(String(value));
                break;
            case "endIntervallCrit":
                setEndIntervallCrit(String(value));
                break;

            case "startIntervallRng":
                setStartIntervallRng(String(value));
                break;
            case "endIntervallRng":
                setEndIntervallRng(String(value));
                break;

            case "startIntervallBoost":
                setStartIntervallBoost(String(value));
                break;
            case "endIntervallBoost":
                setEndIntervallBoost(String(value));
                break;

            // Armor Negations
            case "startIntervallPhysicalNegation": setStartIntervallPhysicalNegation(String(value)); break;
            case "endIntervallPhysicalNegation": setEndIntervallPhysicalNegation(String(value)); break;

            case "startIntervallStrikeNegation": setStartIntervallStrikeNegation(String(value)); break;
            case "endIntervallStrikeNegation": setEndIntervallStrikeNegation(String(value)); break;

            case "startIntervallSlashNegation": setStartIntervallSlashNegation(String(value)); break;
            case "endIntervallSlashNegation": setEndIntervallSlashNegation(String(value)); break;

            case "startIntervallPierceNegation": setStartIntervallPierceNegation(String(value)); break;
            case "endIntervallPierceNegation": setEndIntervallPierceNegation(String(value)); break;

            case "startIntervallMagicNegation": setStartIntervallMagicNegation(String(value)); break;
            case "endIntervallMagicNegation": setEndIntervallMagicNegation(String(value)); break;

            case "startIntervallFireNegation": setStartIntervallFireNegation(String(value)); break;
            case "endIntervallFireNegation": setEndIntervallFireNegation(String(value)); break;

            case "startIntervallLigtNegation": setStartIntervallLigtNegation(String(value)); break;
            case "endIntervallLigtNegation": setEndIntervallLigtNegation(String(value)); break;

            case "startIntervallHolyNegation": setStartIntervallHolyNegation(String(value)); break;
            case "endIntervallHolyNegation": setEndIntervallHolyNegation(String(value)); break;

            // Armor Resistances
            case "startIntervallImmunity": setStartIntervallImmunity(String(value)); break;
            case "endIntervallImmunity": setEndIntervallImmunity(String(value)); break;

            case "startIntervallRobustness": setStartIntervallRobustness(String(value)); break;
            case "endIntervallRobustness": setEndIntervallRobustness(String(value)); break;

            case "startIntervallFocus": setStartIntervallFocus(String(value)); break;
            case "endIntervallFocus": setEndIntervallFocus(String(value)); break;

            case "startIntervallVitality": setStartIntervallVitality(String(value)); break;
            case "endIntervallVitality": setEndIntervallVitality(String(value)); break;

            case "startIntervallPoise": setStartIntervallPoise(String(value)); break;
            case "endIntervallPoise": setEndIntervallPoise(String(value)); break;

            // Boss attributes
            case "startIntervallRewardRunes": if(useStates.startIntervallRewardRunesUseState) setStartIntervallRewardRunes(String(value)); break;
            case "endIntervallRewardRunes": if(useStates.endIntervallRewardRunesUseState) setEndIntervallRewardRunes(String(value)); break;
            case "startIntervallHp": if(useStates.startIntervallHpUseState) setStartIntervallHp(String(value)); break;
            case "endIntervallHp": if(useStates.endIntervallHpUseState) setEndIntervallHp(String(value)); break;

            default:
                console.warn("Unknown intervall name:", name);
        }
    }

    const [visible, setVisible] = useState(false);
    const [sortBy, setSortBy] = useStates.sortByUseState;
    const [sortOrder, setSortOrder] = useStates.sortOrderUseState;
    const [damageOpen, setDamageOpen] = useState(false);
    const [defenseOpen, setDefenseOpen] = useState(false);
    const [scalingOpen, setScalingOpen] = useState(false);
    const [requirementsOpen, setRequirementsOpen] = useState(false);
    const [otherAttributesOpen, setOtherAttributesOpen] = useState(false);
    const [negationOpen, setNegationOpen] = useState(false);
    const [resistanceOpen, setResistanceOpen] = useState(false);

    // Boss states
    const [rewardsOpen, setRewardsOpen] = useState(false);
    const [statsOpen, setStatsOpen] = useState(false);
    const [resistancesOpen, setResistancesOpen] = useState(false);

    let [startIntervallRewardRunes, setStartIntervallRewardRunes] = ["", (a:string) => {}];
    let [endIntervallRewardRunes, setEndIntervallRewardRunes] = ["", (a:string) => {}];
    let [startIntervallHp, setStartIntervallHp] = ["", (a:string) => {}];
    let [endIntervallHp, setEndIntervallHp] = ["", (a:string) => {}];


    let [startIntervallBaseAttack, setStartIntervallBaseAttack] = ["", (a:string) => {a += 1}];
    let [endIntervallBaseAttack, setEndIntervallBaseAttack] = ["", (a:string) => {a += 1}];

    let [startIntervallMagicAttack, setStartIntervallMagicAttack] = ["", (a:string) => {a += 1}];
    let [endIntervallMagicAttack, setEndIntervallMagicAttack] = ["", (a:string) => {a += 1}];

    let [startIntervallFireAttack, setStartIntervallFireAttack] = ["", (a:string) => {a += 1}];
    let [endIntervallFireAttack, setEndIntervallFireAttack] = ["", (a:string) => {a += 1}];

    let [startIntervallLigtAttack, setStartIntervallLigtAttack] = ["", (a:string) => {a += 1}];
    let [endIntervallLigtAttack, setEndIntervallLigtAttack] = ["", (a:string) => {a += 1}];

    let [startIntervallHolyAttack, setStartIntervallHolyAttack] = ["", (a:string) => {a += 1}];
    let [endIntervallHolyAttack, setEndIntervallHolyAttack] = ["", (a:string) => {a += 1}];

    let [startIntervallParryDefense, setStartIntervallParryDefense] = ["", (a:string) => {a += 1}];
    let [endIntervallParryDefense, setEndIntervallParryDefense] = ["", (a:string) => {a += 1}];

    let [startIntervallMagicDefense, setStartIntervallMagicDefense] = ["", (a:string) => {a += 1}];
    let [endIntervallMagicDefense, setEndIntervallMagicDefense] = ["", (a:string) => {a += 1}];

    let [startIntervallFireDefense, setStartIntervallFireDefense] = ["", (a:string) => {a += 1}];
    let [endIntervallFireDefense, setEndIntervallFireDefense] = ["", (a:string) => {a += 1}];

    let [startIntervallLigtDefense, setStartIntervallLigtDefense] = ["", (a:string) => {a += 1}];
    let [endIntervallLigtDefense, setEndIntervallLigtDefense] = ["", (a:string) => {a += 1}];

    let [startIntervallHolyDefense, setStartIntervallHolyDefense] = ["", (a:string) => {a += 1}];
    let [endIntervallHolyDefense, setEndIntervallHolyDefense] = ["", (a:string) => {a += 1}];

    let [startIntervallStrScaling, setStartIntervallStrScaling] = ["", (a:string) => {a += 1}];
    let [endIntervallStrScaling, setEndIntervallStrScaling] = ["", (a:string) => {a += 1}]

    let [startIntervallDexScaling, setStartIntervallDexScaling] = ["", (a:string) => {a += 1}]
    let [endIntervallDexScaling, setEndIntervallDexScaling] = ["", (a:string) => {a += 1}]

    let [startIntervallIntScaling, setStartIntervallIntScaling] = ["", (a:string) => {a += 1}]
    let [endIntervallIntScaling, setEndIntervallIntScaling] = ["", (a:string) => {a += 1}]

    let [startIntervallFaiScaling, setStartIntervallFaiScaling] = ["", (a:string) => {a += 1}]
    let [endIntervallFaiScaling, setEndIntervallFaiScaling] = ["", (a:string) => {a += 1}]

    let [startIntervallArcScaling, setStartIntervallArcScaling] = ["", (a:string) => {a += 1}]
    let [endIntervallArcScaling, setEndIntervallArcScaling] = ["", (a:string) => {a += 1}]

    let [startIntervallStrRequirement, setStartIntervallStrRequirement] = ["", (a:string) => {a += 1}];
    let [endIntervallStrRequirement, setEndIntervallStrRequirement] = ["", (a:string) => {a += 1}];

    let [startIntervallDexRequirement, setStartIntervallDexRequirement] = ["", (a:string) => {a += 1}];
    let [endIntervallDexRequirement, setEndIntervallDexRequirement] = ["", (a:string) => {a += 1}];

    let [startIntervallIntRequirement, setStartIntervallIntRequirement] = ["", (a:string) => {a += 1}];
    let [endIntervallIntRequirement, setEndIntervallIntRequirement] = ["", (a:string) => {a += 1}];

    let [startIntervallFaiRequirement, setStartIntervallFaiRequirement] = ["", (a:string) => {a += 1}];
    let [endIntervallFaiRequirement, setEndIntervallFaiRequirement] = ["", (a:string) => {a += 1}];

    let [startIntervallArcRequirement, setStartIntervallArcRequirement] = ["", (a:string) => {a += 1}];
    let [endIntervallArcRequirement, setEndIntervallArcRequirement] = ["", (a:string) => {a += 1}];

    let [startIntervallSpecialAttackFP, setStartIntervallSpecialAttackFP] = ["", (a:string) => {a += 1}];
    let [endIntervallSpecialAttackFP, setEndIntervallSpecialAttackFP] = ["", (a:string) => {a += 1}];

    let [startIntervallWgt, setStartIntervallWgt] = ["", (a:string) => {a += 1}];
    let [endIntervallWgt, setEndIntervallWgt] = ["", (a:string) => {a += 1}];

    let [startIntervallCrit, setStartIntervallCrit] = ["", (a:string) => {a += 1}];
    let [endIntervallCrit, setEndIntervallCrit] = ["", (a:string) => {a += 1}];

    let [startIntervallRng, setStartIntervallRng] = ["", (a:string) => {a += 1}];
    let [endIntervallRng, setEndIntervallRng] = ["", (a:string) => {a += 1}];

    let [startIntervallBoost, setStartIntervallBoost] = ["", (a:string) => {a += 1}];
    let [endIntervallBoost, setEndIntervallBoost] = ["", (a:string) => {a += 1}];

    let [startIntervallPhysicalNegation, setStartIntervallPhysicalNegation] = ["", (a:string) => {a += 1}];
    let [endIntervallPhysicalNegation, setEndIntervallPhysicalNegation] = ["", (a:string) => {a += 1}];

    let [startIntervallStrikeNegation, setStartIntervallStrikeNegation] = ["", (a:string) => {a += 1}];
    let [endIntervallStrikeNegation, setEndIntervallStrikeNegation] = ["", (a:string) => {a += 1}];

    let [startIntervallSlashNegation, setStartIntervallSlashNegation] = ["", (a:string) => {a += 1}];
    let [endIntervallSlashNegation, setEndIntervallSlashNegation] = ["", (a:string) => {a += 1}];

    let [startIntervallPierceNegation, setStartIntervallPierceNegation] = ["", (a:string) => {a += 1}];
    let [endIntervallPierceNegation, setEndIntervallPierceNegation] = ["", (a:string) => {a += 1}];

    let [startIntervallMagicNegation, setStartIntervallMagicNegation] = ["", (a:string) => {a += 1}];
    let [endIntervallMagicNegation, setEndIntervallMagicNegation] = ["", (a:string) => {a += 1}];

    let [startIntervallFireNegation, setStartIntervallFireNegation] = ["", (a:string) => {a += 1}];
    let [endIntervallFireNegation, setEndIntervallFireNegation] = ["", (a:string) => {a += 1}];

    let [startIntervallLigtNegation, setStartIntervallLigtNegation] = ["", (a:string) => {a += 1}];
    let [endIntervallLigtNegation, setEndIntervallLigtNegation] = ["", (a:string) => {a += 1}];

    let [startIntervallHolyNegation, setStartIntervallHolyNegation] = ["", (a:string) => {a += 1}];
    let [endIntervallHolyNegation, setEndIntervallHolyNegation] = ["", (a:string) => {a += 1}];

    let [startIntervallImmunity, setStartIntervallImmunity] = ["", (a:string) => {a += 1}];
    let [endIntervallImmunity, setEndIntervallImmunity] = ["", (a:string) => {a += 1}];
    let [startIntervallRobustness, setStartIntervallRobustness] = ["", (a:string) => {a += 1}];
    let [endIntervallRobustness, setEndIntervallRobustness] = ["", (a:string) => {a += 1}];
    let [startIntervallFocus, setStartIntervallFocus] = ["", (a:string) => {a += 1}];
    let [endIntervallFocus, setEndIntervallFocus] = ["", (a:string) => {a += 1}];
    let [startIntervallVitality, setStartIntervallVitality] = ["", (a:string) => {a += 1}];
    let [endIntervallVitality, setEndIntervallVitality] = ["", (a:string) => {a += 1}];
    let [startIntervallPoise, setStartIntervallPoise] = ["", (a:string) => {a += 1}];
    let [endIntervallPoise, setEndIntervallPoise] = ["", (a:string) => {a += 1}];

    switch(type){
        case "Weapon":
            [startIntervallBaseAttack, setStartIntervallBaseAttack] = useStates.startIntervallBaseAttackUseState ?? ["", (a) => {}];
            [endIntervallBaseAttack, setEndIntervallBaseAttack] = useStates.endIntervallBaseAttackUseState ?? ["", (a) => {}];

            [startIntervallMagicAttack, setStartIntervallMagicAttack] = useStates.startIntervallMagicAttackUseState ?? ["", (a) => {}];
            [endIntervallMagicAttack, setEndIntervallMagicAttack] = useStates.endIntervallMagicAttackUseState ?? ["", (a) => {}];

            [startIntervallFireAttack, setStartIntervallFireAttack] = useStates.startIntervallFireAttackUseState ?? ["", (a) => {}];
            [endIntervallFireAttack, setEndIntervallFireAttack] = useStates.endIntervallFireAttackUseState ?? ["", (a) => {}];

            [startIntervallLigtAttack, setStartIntervallLigtAttack] = useStates.startIntervallLigtAttackUseState ?? ["", (a) => {}];
            [endIntervallLigtAttack, setEndIntervallLigtAttack] = useStates.endIntervallLigtAttackUseState ?? ["", (a) => {}];

            [startIntervallHolyAttack, setStartIntervallHolyAttack] = useStates.startIntervallHolyAttackUseState ?? ["", (a) => {}];
            [endIntervallHolyAttack, setEndIntervallHolyAttack] = useStates.endIntervallHolyAttackUseState ?? ["", (a) => {}];

            [startIntervallParryDefense, setStartIntervallParryDefense] = useStates.startIntervallParryDefenseUseState ?? ["", (a) => {}];
            [endIntervallParryDefense, setEndIntervallParryDefense] = useStates.endIntervallParryDefenseUseState ?? ["", (a) => {}];

            [startIntervallMagicDefense, setStartIntervallMagicDefense] = useStates.startIntervallMagicDefenseUseState ?? ["", (a) => {}];
            [endIntervallMagicDefense, setEndIntervallMagicDefense] = useStates.endIntervallMagicDefenseUseState ?? ["", (a) => {}];

            [startIntervallFireDefense, setStartIntervallFireDefense] = useStates.startIntervallFireDefenseUseState ?? ["", (a) => {}];
            [endIntervallFireDefense, setEndIntervallFireDefense] = useStates.endIntervallFireDefenseUseState ?? ["", (a) => {}];

            [startIntervallLigtDefense, setStartIntervallLigtDefense] = useStates.startIntervallLigtDefenseUseState ?? ["", (a) => {}];
            [endIntervallLigtDefense, setEndIntervallLigtDefense] = useStates.endIntervallLigtDefenseUseState ?? ["", (a) => {}];

            [startIntervallHolyDefense, setStartIntervallHolyDefense] = useStates.startIntervallHolyDefenseUseState ?? ["", (a) => {}];
            [endIntervallHolyDefense, setEndIntervallHolyDefense] = useStates.endIntervallHolyDefenseUseState ?? ["", (a) => {}];

            [startIntervallStrScaling, setStartIntervallStrScaling] = useStates.startIntervallStrScalingUseState ?? ["", (a) => {}];
            [endIntervallStrScaling, setEndIntervallStrScaling] = useStates.endIntervallStrScalingUseState ?? ["", (a) => {}];

            [startIntervallDexScaling, setStartIntervallDexScaling] = useStates.startIntervallDexScalingUseState ?? ["", (a) => {}];
            [endIntervallDexScaling, setEndIntervallDexScaling] = useStates.endIntervallDexScalingUseState ?? ["", (a) => {}];

            [startIntervallIntScaling, setStartIntervallIntScaling] = useStates.startIntervallIntScalingUseState ?? ["", (a) => {}];
            [endIntervallIntScaling, setEndIntervallIntScaling] = useStates.endIntervallIntScalingUseState ?? ["", (a) => {}];

            [startIntervallFaiScaling, setStartIntervallFaiScaling] = useStates.startIntervallFaiScalingUseState ?? ["", (a) => {}];
            [endIntervallFaiScaling, setEndIntervallFaiScaling] = useStates.endIntervallFaiScalingUseState ?? ["", (a) => {}];

            [startIntervallArcScaling, setStartIntervallArcScaling] = useStates.startIntervallArcScalingUseState ?? ["", (a) => {}];
            [endIntervallArcScaling, setEndIntervallArcScaling] = useStates.endIntervallArcScalingUseState ?? ["", (a) => {}];

            [startIntervallStrRequirement, setStartIntervallStrRequirement] = useStates.startIntervallStrRequirementUseState ?? ["", (a) => {}];
            [endIntervallStrRequirement, setEndIntervallStrRequirement] = useStates.endIntervallStrRequirementUseState ?? ["", (a) => {}];

            [startIntervallDexRequirement, setStartIntervallDexRequirement] = useStates.startIntervallDexRequirementUseState ?? ["", (a) => {}];
            [endIntervallDexRequirement, setEndIntervallDexRequirement] = useStates.endIntervallDexRequirementUseState ?? ["", (a) => {}];

            [startIntervallIntRequirement, setStartIntervallIntRequirement] = useStates.startIntervallIntRequirementUseState ?? ["", (a) => {}];
            [endIntervallIntRequirement, setEndIntervallIntRequirement] = useStates.endIntervallIntRequirementUseState ?? ["", (a) => {}];

            [startIntervallFaiRequirement, setStartIntervallFaiRequirement] = useStates.startIntervallFaiRequirementUseState ?? ["", (a) => {}];
            [endIntervallFaiRequirement, setEndIntervallFaiRequirement] = useStates.endIntervallFaiRequirementUseState ?? ["", (a) => {}];

            [startIntervallArcRequirement, setStartIntervallArcRequirement] = useStates.startIntervallArcRequirementUseState ?? ["", (a) => {}];
            [endIntervallArcRequirement, setEndIntervallArcRequirement] = useStates.endIntervallArcRequirementUseState ?? ["", (a) => {}];

            [startIntervallSpecialAttackFP, setStartIntervallSpecialAttackFP] = useStates.startIntervallSpecialAttackFPUseState ?? ["", (a) => {}];
            [endIntervallSpecialAttackFP, setEndIntervallSpecialAttackFP] = useStates.endIntervallSpecialAttackFPUseState ?? ["", (a) => {}];

            [startIntervallWgt, setStartIntervallWgt] = useStates.startIntervallWgtUseState ?? ["", (a) => {}];
            [endIntervallWgt, setEndIntervallWgt] = useStates.endIntervallWgtUseState ?? ["", (a) => {}];

            [startIntervallCrit, setStartIntervallCrit] = useStates.startIntervallCritUseState ?? ["", (a) => {}];
            [endIntervallCrit, setEndIntervallCrit] = useStates.endIntervallCritUseState ?? ["", (a) => {}];

            [startIntervallRng, setStartIntervallRng] = useStates.startIntervallRngUseState ?? ["", (a) => {}];
            [endIntervallRng, setEndIntervallRng] = useStates.endIntervallRngUseState ?? ["", (a) => {}];

            [startIntervallBoost, setStartIntervallBoost] = useStates.startIntervallBoostUseState ?? ["", (a) => {}];
            [endIntervallBoost, setEndIntervallBoost] = useStates.endIntervallBoostUseState ?? ["", (a) => {}];
            break;
        case "Armor":
            [startIntervallPhysicalNegation, setStartIntervallPhysicalNegation] = useStates.startIntervallPhysicalNegationUseState ?? ["", (a) => {}];
            [endIntervallPhysicalNegation, setEndIntervallPhysicalNegation] = useStates.endIntervallPhysicalNegationUseState ?? ["", (a) => {}];
            [startIntervallStrikeNegation, setStartIntervallStrikeNegation] = useStates.startIntervallStrikeNegationUseState ?? ["", (a) => {}];
            [endIntervallStrikeNegation, setEndIntervallStrikeNegation] = useStates.endIntervallStrikeNegationUseState ?? ["", (a) => {}];
            [startIntervallSlashNegation, setStartIntervallSlashNegation] = useStates.startIntervallSlashNegationUseState ?? ["", (a) => {}];
            [endIntervallSlashNegation, setEndIntervallSlashNegation] = useStates.endIntervallSlashNegationUseState ?? ["", (a) => {}];
            [startIntervallPierceNegation, setStartIntervallPierceNegation] = useStates.startIntervallPierceNegationUseState ?? ["", (a) => {}];
            [endIntervallPierceNegation, setEndIntervallPierceNegation] = useStates.endIntervallPierceNegationUseState ?? ["", (a) => {}];
            [startIntervallMagicNegation, setStartIntervallMagicNegation] = useStates.startIntervallMagicNegationUseState ?? ["", (a) => {}];
            [endIntervallMagicNegation, setEndIntervallMagicNegation] = useStates.endIntervallMagicNegationUseState ?? ["", (a) => {}];
            [startIntervallFireNegation, setStartIntervallFireNegation] = useStates.startIntervallFireNegationUseState ?? ["", (a) => {}];
            [endIntervallFireNegation, setEndIntervallFireNegation] = useStates.endIntervallFireNegationUseState ?? ["", (a) => {}];
            [startIntervallLigtNegation, setStartIntervallLigtNegation] = useStates.startIntervallLigtNegationUseState ?? ["", (a) => {}];
            [endIntervallLigtNegation, setEndIntervallLigtNegation] = useStates.endIntervallLigtNegationUseState ?? ["", (a) => {}];
            [startIntervallHolyNegation, setStartIntervallHolyNegation] = useStates.startIntervallHolyNegationUseState ?? ["", (a) => {}];
            [endIntervallHolyNegation, setEndIntervallHolyNegation] = useStates.endIntervallHolyNegationUseState ?? ["", (a) => {}];
            [startIntervallWgt, setStartIntervallWgt] = useStates.startIntervallWgtUseState ?? ["", (a) => {}];
            [endIntervallWgt, setEndIntervallWgt] = useStates.endIntervallWgtUseState ?? ["", (a) => {}];
            [startIntervallImmunity, setStartIntervallImmunity] = useStates.startIntervallImmunityUseState ?? ["", (a) => {}];
            [endIntervallImmunity, setEndIntervallImmunity] = useStates.endIntervallImmunityUseState ?? ["", (a) => {}];
            [startIntervallRobustness, setStartIntervallRobustness] = useStates.startIntervallRobustnessUseState ?? ["", (a) => {}];
            [endIntervallRobustness, setEndIntervallRobustness] = useStates.endIntervallRobustnessUseState ?? ["", (a) => {}];
            [startIntervallFocus, setStartIntervallFocus] = useStates.startIntervallFocusUseState ?? ["", (a) => {}];
            [endIntervallFocus, setEndIntervallFocus] = useStates.endIntervallFocusUseState ?? ["", (a) => {}];
            [startIntervallVitality, setStartIntervallVitality] = useStates.startIntervallVitalityUseState ?? ["", (a) => {}];
            [endIntervallVitality, setEndIntervallVitality] = useStates.endIntervallVitalityUseState ?? ["", (a) => {}];
            [startIntervallPoise, setStartIntervallPoise] = useStates.startIntervallPoiseUseState ?? ["", (a) => {}];
            [endIntervallPoise, setEndIntervallPoise] = useStates.endIntervallPoiseUseState ?? ["", (a) => {}];
            break;
        case "Boss":
            [startIntervallRewardRunes, setStartIntervallRewardRunes] = useStates.startIntervallRewardRunesUseState ?? ["", (a) => {}];
            [endIntervallRewardRunes, setEndIntervallRewardRunes] = useStates.endIntervallRewardRunesUseState ?? ["", (a) => {}];
            [startIntervallHp, setStartIntervallHp] = useStates.startIntervallHpUseState ?? ["", (a) => {}];
            [endIntervallHp, setEndIntervallHp] = useStates.endIntervallHpUseState ?? ["", (a) => {}];
            break;
            
    }

    switch(type){
        case "Weapon":
            return (
                <div className={`flex flex-col items-center w-full z-1 ${className}`}>
                    <div className="flex mb-2">
                        <button onClick={openOrCloseFilter} className="cursor-pointer flex items-center">
                            <span className="font-sans text-base text-[#fcfdae]">Filter</span>
                            {!visible ? 
                                (<Image src="/arrow_up.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Up" />)
                            :
                                (<Image src="/arrow_down.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Down" />)
                            }
                        </button>
                    </div>
                    {visible &&
                        (<div className="w-[34vw] absolute left-[65vw] bg-[#0b2829] flex flex-col border-[#fcfdae] border-solid border-2 rounded-md z-1">
                            <div className="flex w-full mb-2 mt-2 ml-2">
                                <label className="font-sans text-sm text-[#fcfdae] mr-2">Sort By</label>
                                <select
                                    value={sortBy}
                                    onChange={handleSortByChange}
                                    className={`border-[#fcfdae] border-solid border-2 rounded-md mr-2 bg-[#0b2829] font-sans text-sm ${getSortByColor(sortBy)}`}
                                >
                                    {/* Attack */}
                                    <option value="Base Attack" className="font-sans text-sm text-white">Base Attack</option>
                                    <option value="Magic Attack" className="font-sans text-sm text-blue-200">Magic Attack</option>
                                    <option value="Fire Attack" className="font-sans text-sm text-orange-300">Fire Attack</option>
                                    <option value="Ligt Attack" className="font-sans text-sm text-yellow-300">Ligt Attack</option>
                                    <option value="Holy Attack" className="font-sans text-sm text-[#ffd894]">Holy Attack</option>

                                    {/* Defense */}
                                    <option value="Parry Defense" className="font-sans text-sm text-white">Parry Defense</option>
                                    <option value="Magic Defense" className="font-sans text-sm text-blue-200">Magic Defense</option>
                                    <option value="Fire Defense" className="font-sans text-sm text-orange-300">Fire Defense</option>
                                    <option value="Ligt Defense" className="font-sans text-sm text-yellow-300">Ligt Defense</option>
                                    <option value="Holy Defense" className="font-sans text-sm text-[#ffd894]">Holy Defense</option>

                                    {/* Misc */}
                                    <option value="Crit" className="font-sans text-sm text-red-400">Crit</option>
                                    <option value="Boost" className="font-sans text-sm text-blue-400">Boost</option>
                                    <option value="Rng" className="font-sans text-sm text-green-300">Rng</option>
                                    <option value="Wgt." className="font-sans text-sm text-orange-200">Wgt.</option>

                                    {/* NEW: Generic */}
                                    <option value="Name" className="font-sans text-sm text-white">Name</option>

                                    {/* NEW: Rarity */}
                                    <option value="Rarity" className="font-sans text-sm text-purple-300">Rarity</option>

                                    {/* NEW: Requirements */}
                                    <option value="Str Requirement" className="font-sans text-sm text-red-300">Str Requirement</option>
                                    <option value="Dex Requirement" className="font-sans text-sm text-green-300">Dex Requirement</option>
                                    <option value="Int Requirement" className="font-sans text-sm text-blue-300">Int Requirement</option>
                                    <option value="Fai Requirement" className="font-sans text-sm text-yellow-300">Fai Requirement</option>
                                    <option value="Arc Requirement" className="font-sans text-sm text-pink-300">Arc Requirement</option>

                                    {/* NEW: Scaling */}
                                    <option value="Str Scaling" className="font-sans text-sm text-red-400">Str Scaling</option>
                                    <option value="Dex Scaling" className="font-sans text-sm text-green-400">Dex Scaling</option>
                                    <option value="Int Scaling" className="font-sans text-sm text-blue-400">Int Scaling</option>
                                    <option value="Fai Scaling" className="font-sans text-sm text-yellow-400">Fai Scaling</option>
                                    <option value="Arc Scaling" className="font-sans text-sm text-pink-400">Arc Scaling</option>

                                    {/* NEW: Special Attack */}
                                    <option value="Special Attack FP" className="font-sans text-sm text-cyan-300">Special Attack FP</option>
                                    <option value="Special Attack Name" className="font-sans text-sm text-cyan-200">Special Attack Name</option>
                                </select>

                                {sortOrder === "asc" ?
                                    (<button onClick={() => setSortOrder("desc")} className="cursor-pointer">
                                            <Image src="/arrow_up.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Up" />
                                    </button>)
                                :
                                    (<button onClick={() => setSortOrder("asc")} className="cursor-pointer">
                                        <Image src="/arrow_down.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Down" />
                                    </button>)
                                }
                            </div>
                            <div className="flex flex-col ml-2">
                                <label className="font-sans text-sm text-[#fcfdae] mr-2 mb-2">Intervallfilter</label>
                                <button className="font-sans text-base text-[#fcfdae] cursor-pointer w-17 ml-5 flex items-center" onClick={() => setDamageOpen(!damageOpen)}>
                                    <span>Damage</span>
                                    {!damageOpen ?
                                        (<Image src="/arrow_up.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Up" />)
                                    :
                                        (<Image src="/arrow_down.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Down" />)
                                    }
                                </button>
                                {damageOpen ?
                                    (<div className="flex flex-wrap ml-9 mb-2">
                                        <div className="flex items-center mr-1 mb-2">
                                            <label className="font-sans text-sm text-white mr-2">Base Damage</label>
                                            <input value={startIntervallBaseAttack} onChange={(event) => handleIntervallChange("startIntervallBaseAttack", event)} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae] mr-2" />
                                            <input value={endIntervallBaseAttack} onChange={(event) => handleIntervallChange("endIntervallBaseAttack", event)} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae]" />
                                        </div>

                                        <div className="flex items-center mr-1">
                                            <label className="font-sans text-sm text-blue-200 mr-2">Magic Attack</label>
                                            <input value={startIntervallMagicAttack} onChange={(event) => handleIntervallChange("startIntervallMagicAttack", event)} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae] mr-2" />
                                            <input value={endIntervallMagicAttack} onChange={(event) => handleIntervallChange("endIntervallMagicAttack", event)} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae]" />
                                        </div>

                                        <div className="flex items-center mr-1">
                                            <label className="font-sans text-sm text-orange-300 mr-2">Fire Attack</label>
                                            <input value={startIntervallFireAttack} onChange={(event) => handleIntervallChange("startIntervallFireAttack", event)} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae] mr-2" />
                                            <input value={endIntervallFireAttack} onChange={(event) => handleIntervallChange("endIntervallFireAttack", event)} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae]" />
                                        </div>

                                        <div className="flex items-center mr-1">
                                            <label className="font-sans text-sm text-yellow-300 mr-2">Ligt Attack</label>
                                            <input value={startIntervallLigtAttack} onChange={(event) => handleIntervallChange("startIntervallLigtAttack", event)} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae] mr-2" />
                                            <input value={endIntervallLigtAttack} onChange={(event) => handleIntervallChange("endIntervallLigtAttack", event)} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae]" />
                                        </div>

                                        <div className="flex items-center">
                                            <label className="font-sans text-sm text-[#ffd894] mr-2">Holy Attack</label>
                                            <input value={startIntervallHolyAttack} onChange={(event) => handleIntervallChange("startIntervallHolyAttack", event)} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae] mr-2" />
                                            <input value={endIntervallHolyAttack} onChange={(event) => handleIntervallChange("endIntervallHolyAttack", event)} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae]" />
                                        </div>    
                                    </div>)
                                :
                                    (<div className="mb-2" />)
                                }
                                <button className="font-sans text-base text-[#fcfdae] cursor-pointer w-17 ml-5 flex items-center" onClick={() => setDefenseOpen(!defenseOpen)}>
                                    <span>Defense</span>
                                    {!defenseOpen ?
                                        (<Image src="/arrow_up.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Up" />)
                                    :
                                        (<Image src="/arrow_down.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Down" />)
                                    }
                                </button>
                                {defenseOpen ?
                                    (<div className="flex flex-wrap ml-9 mb-2">
                                        <div className="flex items-center mr-1 mb-2">
                                            <label className="font-sans text-sm text-white mr-2">Parry Defense</label>
                                            <input value={startIntervallParryDefense} onChange={(event) => handleIntervallChange("startIntervallParryDefense", event)} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae] mr-2" />
                                            <input value={endIntervallParryDefense} onChange={(event) => handleIntervallChange("endIntervallParryDefense", event)} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae]" />
                                        </div>

                                        <div className="flex items-center mr-1">
                                            <label className="font-sans text-sm text-blue-200 mr-2">Magic Defense</label>
                                            <input value={startIntervallMagicDefense} onChange={(event) => handleIntervallChange("startIntervallMagicDefense", event)} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae] mr-2" />
                                            <input value={endIntervallMagicDefense} onChange={(event) => handleIntervallChange("endIntervallMagicDefense", event)} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae]" />
                                        </div>

                                        <div className="flex items-center mr-1">
                                            <label className="font-sans text-sm text-orange-300 mr-2">Fire Defense</label>
                                            <input value={startIntervallFireDefense} onChange={(event) => handleIntervallChange("startIntervallFireDefense", event)} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae] mr-2" />
                                            <input value={endIntervallFireDefense} onChange={(event) => handleIntervallChange("endIntervallFireDefense", event)} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae]" />
                                        </div>

                                        <div className="flex items-center mr-1">
                                            <label className="font-sans text-sm text-yellow-300 mr-2">Ligt Defense</label>
                                            <input value={startIntervallLigtDefense} onChange={(event) => handleIntervallChange("startIntervallLigtDefense", event)} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae] mr-2" />
                                            <input value={endIntervallLigtDefense} onChange={(event) => handleIntervallChange("endIntervallLigtDefense", event)} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae]" />
                                        </div>

                                        <div className="flex items-center">
                                            <label className="font-sans text-sm text-[#ffd894] mr-2">Holy Defense</label>
                                            <input value={startIntervallHolyDefense} onChange={(event) => handleIntervallChange("startIntervallHolyDefense", event)} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae] mr-2" />
                                            <input value={endIntervallHolyDefense} onChange={(event) => handleIntervallChange("endIntervallHolyDefense", event)} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae]" />
                                        </div>
                                    </div>)
                                :
                                    (<div className="mb-2" />)
                                }
                                <button className="font-sans text-base text-[#fcfdae] cursor-pointer w-17 ml-5 flex items-center" onClick={() => setScalingOpen(!scalingOpen)}>
                                    <span>Scaling</span>
                                    {!scalingOpen ?
                                        (<Image src="/arrow_up.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Up" />)
                                    :
                                        (<Image src="/arrow_down.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Down" />)
                                    }
                                </button>
                                {scalingOpen ?
                                    (<div className="flex flex-wrap ml-9 mb-2">
                                        {[
                                            "Str Scaling",
                                            "Dex Scaling",
                                            "Int Scaling",
                                            "Fai Scaling",
                                            "Arc Scaling"  
                                        ].map((label) => (
                                            <div className="flex items-center mr-1 mb-2" key={label}>
                                                <label className="font-sans text-sm text-orange-200 mr-2">{label}</label>
                                                <input value={
                                                    useStates[`startIntervall${label.replace(" ", "")}UseState` as keyof typeof useStates]?.[0]
                                                } onChange={(event) => {
                                                    let name = label.split(" ").join("");

                                                    handleIntervallChange("startIntervall" + name, event);
                                                }} type="text" maxLength={1} step="any" className="w-12 rounded bg-[#0b2829] text-white text-xs px-1 font-sans border-2 border-[#fcfdae] mr-2" />
                                                <input value={
                                                    useStates[`endIntervall${label.replace(" ", "")}UseState` as keyof typeof useStates]?.[0]
                                                } onChange={(event) => {
                                                    let name = label.split(" ").join("");

                                                    handleIntervallChange("endIntervall" + name, event);
                                                }} type="text" maxLength={1} step="any" className="w-12 rounded bg-[#0b2829] text-white text-xs px-1 font-sans border-2 border-[#fcfdae]" />
                                            </div>
                                        ))}
                                    </div>)
                                :
                                    (<div className="mb-2" />)
                                }
                                <button className="font-sans text-base text-[#fcfdae] cursor-pointer w-17 ml-5 flex items-center" onClick={() => setRequirementsOpen(!requirementsOpen)}>
                                    <span>Requirements</span>
                                    {!requirementsOpen ?
                                        (<Image src="/arrow_up.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Up" />)
                                    :
                                        (<Image src="/arrow_down.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Down" />)
                                    }
                                </button>
                                {requirementsOpen ?
                                    (<div className="flex flex-wrap ml-9 mb-2">
                                        {[
                                            "Str Requirement",
                                            "Dex Requirement",
                                            "Int Requirement",
                                            "Fai Requirement",
                                            "Arc Requirement"
                                        ].map((label) => (
                                            <div className="flex items-center mr-1 mb-2" key={label}>
                                                <label className="font-sans text-sm text-orange-200 mr-2">{label}</label>
                                                <input value={
                                                    useStates[`startIntervall${label.replace(" ", "")}UseState` as keyof typeof useStates]?.[0]
                                                } onChange={(event) => {
                                                    let name = label.split(" ").join("");

                                                    handleIntervallChange("startIntervall" + name, event);
                                                }} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-xs px-1 font-sans border-2 border-[#fcfdae] mr-2" />
                                                <input value={
                                                    useStates[`endIntervall${label.replace(" ", "")}UseState` as keyof typeof useStates]?.[0]
                                                } onChange={(event) => {
                                                    let name = label.split(" ").join("");

                                                    handleIntervallChange("endIntervall" + name, event);
                                                }} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-xs px-1 font-sans border-2 border-[#fcfdae]" />
                                            </div>
                                        ))}
                                    </div>)
                                :
                                    (<div className="mb-2" />)
                                }
                                <button className="font-sans text-base text-[#fcfdae] cursor-pointer w-50 ml-5 flex items-center" onClick={() => setOtherAttributesOpen(!otherAttributesOpen)}>
                                    <span>Other Attributes</span>
                                    {!otherAttributesOpen ?
                                        (<Image src="/arrow_up.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Up" />)
                                    :
                                        (<Image src="/arrow_down.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Down" />)
                                    }
                                </button>
                                {otherAttributesOpen ?
                                    (<div className="flex flex-wrap ml-9 mb-2">
                                        {[
                                            "Special Attack FP",
                                            "Wgt",
                                            "Crit",
                                            "Rng",
                                            "Boost"
                                        ].map((label) => (
                                            <div className="flex items-center mr-1 mb-2" key={label}>
                                                <label className="font-sans text-sm text-orange-200 mr-2">{label}</label>
                                                <input value={
                                                    useStates[`startIntervall${label.replace(" ", "")}UseState` as keyof typeof useStates]?.[0]
                                                } onChange={(event) => {
                                                    let name = label.split(" ").join("");

                                                    handleIntervallChange("startIntervall" + name, event);
                                                }} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-xs px-1 font-sans border-2 border-[#fcfdae] mr-2" />
                                                <input value={
                                                    useStates[`endIntervall${label.replace(" ", "")}UseState` as keyof typeof useStates]?.[0]
                                                } onChange={(event) => {
                                                    let name = label.split(" ").join("");

                                                    handleIntervallChange("endIntervall" + name, event);
                                                }} type="number"  step="any" className="w-12 rounded bg-[#0b2829] text-white text-xs px-1 font-sans border-2 border-[#fcfdae]" />
                                            </div>
                                        ))}
                                    </div>)
                                :
                                    (null)
                                }
                                <div className="mb-2" />
                            </div>
                        </div>)
                    }
                </div>
            );
        case "Armor":
            return (
                <div className={`flex flex-col items-center w-full z-1 ${className}`}>
                    <div className="flex mb-2">
                        <button onClick={openOrCloseFilter} className="cursor-pointer flex items-center">
                            <span className="font-sans text-base text-[#fcfdae]">Filter</span>
                            {!visible ? 
                                (<Image src="/arrow_up.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Up" />)
                            :
                                (<Image src="/arrow_down.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Down" />)
                            }
                        </button>
                    </div>
                    {visible &&
                        (<div className="w-[35vw] absolute left-[65vw] bg-[#0b2829] flex flex-col border-[#fcfdae] border-solid border-2 rounded-md z-1 pl-2">
                            <div className="flex w-full mb-2 mt-2">
                                <label className="font-sans text-sm text-[#fcfdae] mr-2">Sort By</label>
                                <select
                                    value={sortBy}
                                    onChange={handleSortByChange}
                                    className={`border-[#fcfdae] border-solid border-2 rounded-md mr-2 bg-[#0b2829] font-sans text-sm ${getSortByColor(sortBy)}`}
                                >
                                    {/* Negation */}
                                    <option value="Physical Negation" className="font-sans text-sm text-white">Physical Negation</option>
                                    <option value="Strike Negation" className="font-sans text-sm text-white">Strike Negation</option>
                                    <option value="Slash Negation" className="font-sans text-sm text-white">Slash Negation</option>
                                    <option value="Pierce Negation" className="font-sans text-sm text-white">Pierce Negation</option>
                                    <option value="Magic Negation" className="font-sans text-sm text-blue-200">Magic Negation</option>
                                    <option value="Fire Negation" className="font-sans text-sm text-orange-300">Fire Negation</option>
                                    <option value="Ligt Negation" className="font-sans text-sm text-yellow-300">Ligt Negation</option>
                                    <option value="Holy Negation" className="font-sans text-sm text-[#ffd894]">Holy Negation</option>

                                    {/* Resistance */}
                                    <option value="Immunity" className="font-sans text-sm text-purple-300">Immunity</option>
                                    <option value="Robustness" className="font-sans text-sm text-red-300">Robustness</option>
                                    <option value="Focus" className="font-sans text-sm text-blue-300">Focus</option>
                                    <option value="Vitality" className="font-sans text-sm text-orange-300">Vitality</option>
                                    <option value="Poise" className="font-sans text-sm text-gray-300">Poise</option>

                                    {/* Misc */}
                                    <option value="Wgt" className="font-sans text-sm text-orange-200">Wgt</option>
                                    <option value="Name" className="font-sans text-sm text-white">Name</option>
                                    <option value="Rarity" className="font-sans text-sm text-purple-300">Rarity</option>
                                </select>

                                {sortOrder === "asc" ?
                                    (<button onClick={() => setSortOrder("desc")} className="cursor-pointer">
                                            <Image src="/arrow_up.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Up" />
                                    </button>)
                                :
                                    (<button onClick={() => setSortOrder("asc")} className="cursor-pointer">
                                        <Image src="/arrow_down.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Down" />
                                    </button>)
                                }
                            </div>
                            <div className="flex flex-col">
                                <label className="font-sans text-sm text-[#fcfdae] mr-2 mb-2">Intervallfilter</label>
                                <button className="font-sans text-base text-[#fcfdae] cursor-pointer w-17 ml-5 flex items-center" onClick={() => setNegationOpen(!negationOpen)}>
                                    <span>Negation</span>
                                    {!negationOpen ?
                                        (<Image src="/arrow_up.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Up" />)
                                    :
                                        (<Image src="/arrow_down.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Down" />)
                                    }
                                </button>
                                {negationOpen ?
                                    (<div className="flex flex-wrap ml-9 mb-2">
                                        {["Physical Negation", "Strike Negation", "Slash Negation", "Pierce Negation", "Magic Negation", "Fire Negation", "Ligt Negation", "Holy Negation"].map((label) => (
                                            <div className="flex items-center mr-1 mb-2" key={label}>
                                                <label className={`font-sans text-sm ${getSortByColor(label.replace(" Negation", ""))} mr-2`}>{label}</label>
                                                <input value={
                                                    useStates[`startIntervall${label.replace(/ /g, "")}UseState` as keyof typeof useStates]?.[0]
                                                } onChange={(event) => handleIntervallChange(`startIntervall${label.replace(/ /g, "")}`, event)} type="number" step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae]" />
                                                <input value={
                                                    useStates[`endIntervall${label.replace(/ /g, "")}UseState` as keyof typeof useStates]?.[0]
                                                } onChange={(event) => handleIntervallChange(`endIntervall${label.replace(/ /g, "")}`, event)} type="number" step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae]" />
                                            </div>
                                        ))}
                                    </div>)
                                :
                                    (<div className="mb-2" />)
                                }
                                <button className="font-sans text-base text-[#fcfdae] cursor-pointer w-17 ml-5 flex items-center" onClick={() => setResistanceOpen(!resistanceOpen)}>
                                    <span>Resistance</span>
                                    {!resistanceOpen ?
                                        (<Image src="/arrow_up.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Up" />)
                                    :
                                        (<Image src="/arrow_down.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Down" />)
                                    }
                                </button>
                                {resistanceOpen ?
                                    (<div className="flex flex-wrap ml-9 mb-2">
                                        {["Immunity", "Robustness", "Focus", "Vitality", "Poise"].map((label) => (
                                            <div className="flex items-center mr-1 mb-2" key={label}>
                                                <label className={`font-sans text-sm ${getSortByColor(label)} mr-2`}>{label}</label>
                                                <input value={
                                                    useStates[`startIntervall${label}UseState` as keyof typeof useStates]?.[0]
                                                } onChange={(event) => handleIntervallChange(`startIntervall${label}`, event)} type="number" step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae]" />
                                                <input value={
                                                    useStates[`endIntervall${label}UseState` as keyof typeof useStates]?.[0]
                                                } onChange={(event) => handleIntervallChange(`endIntervall${label}`, event)} type="number" step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae]" />
                                            </div>
                                        ))}
                                    </div>)
                                :
                                    (<div className="mb-2" />)
                                }
                                <button className="font-sans text-base text-[#fcfdae] cursor-pointer w-50 ml-5 flex items-center" onClick={() => setOtherAttributesOpen(!otherAttributesOpen)}>
                                    <span>Other Attributes</span>
                                    {!otherAttributesOpen ?
                                        (<Image src="/arrow_up.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Up" />)
                                    :
                                        (<Image src="/arrow_down.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Down" />)
                                    }
                                </button>
                                {otherAttributesOpen ?
                                    (<div className="flex flex-wrap ml-9 mb-2">
                                        <div className="flex items-center mr-1 mb-2">
                                            <label className="font-sans text-sm text-orange-200 mr-2">Wgt.</label>
                                            <input value={startIntervallWgt} onChange={(event) => handleIntervallChange("startIntervallWgt", event)} type="number" step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae]" />
                                            <input value={endIntervallWgt} onChange={(event) => handleIntervallChange("endIntervallWgt", event)} type="number" step="any" className="w-12 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae]" />
                                        </div>
                                    </div>)
                                :
                                    (null)
                                }
                                <div className="mb-2" />
                            </div>
                        </div>)
                    }
                </div>
            );
        case "Boss":
            return (
                <div className={`flex flex-col items-center w-full z-1 ${className}`}>
                    <div className="flex mb-2">
                        <button onClick={openOrCloseFilter} className="cursor-pointer flex items-center">
                            <span className="font-sans text-base text-[#fcfdae]">Filter</span>
                            {!visible ? 
                                (<Image src="/arrow_up.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Up" />)
                            :
                                (<Image src="/arrow_down.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Down" />)
                            }
                        </button>
                    </div>
                    {visible &&
                        (<div className="w-[35vw] absolute left-[65vw] bg-[#0b2829] flex flex-col border-[#fcfdae] border-solid border-2 rounded-md z-1 pl-2">
                            <div className="flex w-full mb-2 mt-2">
                                <label className="font-sans text-sm text-[#fcfdae] mr-2">Sort By</label>
                                <select
                                    value={sortBy}
                                    onChange={handleSortByChange}
                                    className={`border-[#fcfdae] border-solid border-2 rounded-md mr-2 bg-[#0b2829] font-sans text-sm ${getSortByColor(sortBy)}`}
                                >
                                    <option value="Name" className="font-sans text-sm text-white">Name</option>
                                    <option value="Rarity" className="font-sans text-sm text-purple-300">Rarity</option>
                                    <option value="Location" className="font-sans text-sm text-green-300">Location</option>
                                    <option value="Reward Runes" className="font-sans text-sm text-yellow-300">Reward Runes</option>
                                    <option value="HP" className="font-sans text-sm text-red-300">HP</option>
                                </select>

                                {sortOrder === "asc" ?
                                    (<button onClick={() => setSortOrder("desc")} className="cursor-pointer">
                                            <Image src="/arrow_up.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Up" />
                                    </button>)
                                :
                                    (<button onClick={() => setSortOrder("asc")} className="cursor-pointer">
                                        <Image src="/arrow_down.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Down" />
                                    </button>)
                                }
                            </div>
                            <div className="flex flex-col">
                                <label className="font-sans text-sm text-[#fcfdae] mr-2 mb-2">Filter</label>
                                
                                <button className="font-sans text-base text-[#fcfdae] cursor-pointer w-17 ml-5 flex items-center" onClick={() => setRewardsOpen(!rewardsOpen)}>
                                    <span>Rewards</span>
                                    {!rewardsOpen ? (<Image src="/arrow_up.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Up" />) : (<Image src="/arrow_down.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Down" />)}
                                </button>
                                {rewardsOpen && (
                                    <div className="flex flex-wrap ml-9 mb-2">
                                        <div className="flex items-center mr-1 mb-2">
                                            <label className="font-sans text-sm text-yellow-300 mr-2">Runes</label>
                                            <input value={startIntervallRewardRunes} onChange={(event) => handleIntervallChange("startIntervallRewardRunes", event)} type="number" step="any" className="w-24 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae]" />
                                            <input value={endIntervallRewardRunes} onChange={(event) => handleIntervallChange("endIntervallRewardRunes", event)} type="number" step="any" className="w-24 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae]" />
                                        </div>
                                    </div>
                                )}

                                <button className="font-sans text-base text-[#fcfdae] cursor-pointer w-17 ml-5 flex items-center" onClick={() => setStatsOpen(!statsOpen)}>
                                    <span>Stats</span>
                                    {!statsOpen ? (<Image src="/arrow_up.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Up" />) : (<Image src="/arrow_down.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Down" />)}
                                </button>
                                {statsOpen && (
                                     <div className="flex items-center ml-9 mb-2">
                                        <label className="font-sans text-sm text-red-300 mr-2">HP</label>
                                        <input value={startIntervallHp} onChange={(event) => handleIntervallChange("startIntervallHp", event)} type="number" step="any" className="w-24 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae]" />
                                        <input value={endIntervallHp} onChange={(event) => handleIntervallChange("endIntervallHp", event)} type="number" step="any" className="w-24 rounded bg-[#0b2829] text-white text-sm px-1 font-sans border-2 border-[#fcfdae]" />
                                    </div>
                                )}
                            </div>
                        </div>)
                    }
                </div>
            );
        case "NPC":
            return (
                <div className={`flex flex-col items-center w-full z-1 ${className}`}>
                    <div className="flex mb-2">
                        <button onClick={openOrCloseFilter} className="cursor-pointer flex items-center">
                            <span className="font-sans text-base text-[#fcfdae]">Filter</span>
                            {!visible ? 
                                (<Image src="/arrow_up.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Up" />)
                            :
                                (<Image src="/arrow_down.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Down" />)
                            }
                        </button>
                    </div>
                    {visible &&
                        (<div className="w-[35vw] absolute left-[65vw] bg-[#0b2829] flex flex-col border-[#fcfdae] border-solid border-2 rounded-md z-1 pl-2">
                            <div className="flex w-full mb-2 mt-2">
                                <label className="font-sans text-sm text-[#fcfdae] mr-2">Sort By</label>
                                <select
                                    value={sortBy}
                                    onChange={handleSortByChange}
                                    className={`border-[#fcfdae] border-solid border-2 rounded-md mr-2 bg-[#0b2829] font-sans text-sm ${getSortByColor(sortBy)}`}
                                >
                                    <option value="Name" className="font-sans text-sm text-white">Name</option>
                                    <option value="Rarity" className="font-sans text-sm text-purple-300">Rarity</option>
                                    <option value="Location" className="font-sans text-sm text-green-300">Location</option>
                                </select>

                                {sortOrder === "asc" ?
                                    (<button onClick={() => setSortOrder("desc")} className="cursor-pointer">
                                            <Image src="/arrow_up.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Up" />
                                    </button>)
                                :
                                    (<button onClick={() => setSortOrder("asc")} className="cursor-pointer">
                                        <Image src="/arrow_down.png" width={12} height={12} className="w-[12px] h-[12px]" alt="Arrow Down" />
                                    </button>)
                                }
                            </div>
                        </div>)
                    }
                </div>
            );
    }
}