import { JULIAN_YEAR_IN_DAYS } from './constants'

/**
 *
 * getJulianYearInSeconds()
 *
 * @returns the number of seconds in a Julian Year.
 */
export const getJulianYearInSeconds = (): number => {
  return JULIAN_YEAR_IN_DAYS * 86400
}
