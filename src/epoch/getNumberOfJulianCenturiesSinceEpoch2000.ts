import { getJulianDate } from '.'

import { J2000 } from './constants'

/**
 * getNumberOfJulianCenturiesSinceEpoch2000()
 *
 * @param datetime
 * @returns the number of centuries since Julian Date 2000 as an integer for a particular datetime
 */
export const getNumberOfJulianCenturiesSinceEpoch2000 = (datetime: Date): number => {
  const JD = getJulianDate(datetime)
  // Centuries Since January 1900
  return (JD - J2000) / 36525
}
