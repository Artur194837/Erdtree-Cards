export type FilterState = {
  sortBy: string | null;
  sortOrder: "asc" | "desc" | null;

  startIntervallBaseAttack: number | null;
  endIntervallBaseAttack: number | null;

  startIntervallMagicAttack: number | null;
  endIntervallMagicAttack: number | null;

  startIntervallFireAttack: number | null;
  endIntervallFireAttack: number | null;

  startIntervallLigtAttack: number | null;
  endIntervallLigtAttack: number | null;

  startIntervallHolyAttack: number | null;
  endIntervallHolyAttack: number | null;

  startIntervallParryDefense: number | null;
  endIntervallParryDefense: number | null;

  startIntervallMagicDefense: number | null;
  endIntervallMagicDefense: number | null;

  startIntervallFireDefense: number | null;
  endIntervallFireDefense: number | null;

  startIntervallLigtDefense: number | null;
  endIntervallLigtDefense: number | null;

  startIntervallHolyDefense: number | null;
  endIntervallHolyDefense: number | null;

  startIntervallStrScaling: string | null;
  endIntervallStrScaling: string | null;

  startIntervallDexScaling: string | null;
  endIntervallDexScaling: string | null;

  startIntervallIntScaling: string | null;
  endIntervallIntScaling: string | null;

  startIntervallFaiScaling: string | null;
  endIntervallFaiScaling: string | null;

  startIntervallArcScaling: string | null;
  endIntervallArcScaling: string | null;

  startIntervallStrRequirement: number | null;
  endIntervallStrRequirement: number | null;

  startIntervallDexRequirement: number | null;
  endIntervallDexRequirement: number | null;

  startIntervallIntRequirement: number | null;
  endIntervallIntRequirement: number | null;

  startIntervallFaiRequirement: number | null;
  endIntervallFaiRequirement: number | null;

  startIntervallArcRequirement: number | null;
  endIntervallArcRequirement: number | null;

  startIntervallSpecialAttackFP: number | null;
  endIntervallSpecialAttackFP: number | null;

  startIntervallWgt: number | null;
  endIntervallWgt: number | null;
};