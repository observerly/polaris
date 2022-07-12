/**
 * Enumeration of lunar phases
 *
 * @typedef {string} LunarPhase
 * @enum {LunarPhase}
 */
export enum LunarPhase {
  NEW = 'New',
  WAXING_CRESCENT = 'Waxing Crescent',
  FIRST_QUARTER = 'First Quarter',
  WAXING_GIBBOUS = 'Waxing Gibbous',
  FULL = 'Full',
  WANING_GIBBOUS = 'Waning Gibbous',
  LAST_QUARTER = 'Last Quarter',
  WANING_CRESCENT = 'Waning Crescent'
}

/**
 *
 * getLunarPhaseName
 *
 * @param age lunar age (in days)
 *
 * @returns the lunar phase name for the Lunar age provided
 */
export const getLunarPhaseName = (age: number): LunarPhase => {
  if (age < 1.84566173161) return LunarPhase.NEW
  else if (age < 5.53698519483) return LunarPhase.WAXING_CRESCENT
  else if (age < 9.22830865805) return LunarPhase.FIRST_QUARTER
  else if (age < 12.91963212127) return LunarPhase.WAXING_GIBBOUS
  else if (age < 16.61095558449) return LunarPhase.FULL
  else if (age < 20.30227904771) return LunarPhase.WANING_GIBBOUS
  else if (age < 23.99360251093) return LunarPhase.LAST_QUARTER
  else if (age < 27.68492597415) return LunarPhase.WANING_CRESCENT

  return LunarPhase.NEW
}
