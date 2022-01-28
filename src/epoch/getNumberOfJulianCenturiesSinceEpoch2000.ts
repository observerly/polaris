import { getNumberOfJulianCenturiesSinceEpoch } from '.'

import { J2000 } from './constants'

/**
 * getNumberOfJulianCenturiesSinceEpoch2000()
 *
 * @param datetime
 * @returns the number of centuries since Julian Date 2000 as an integer for a particular datetime
 */
export const getNumberOfJulianCenturiesSinceEpoch2000 = (datetime: Date): number => {
  // Centuries Since January 1st 2000
  return getNumberOfJulianCenturiesSinceEpoch(datetime, J2000)
}
