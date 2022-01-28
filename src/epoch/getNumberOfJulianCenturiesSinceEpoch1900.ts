import { getNumberOfJulianCenturiesSinceEpoch } from '.'

import { J1900 } from './constants'

/**
 * getNumberOfJulianCenturiesSinceEpoch1900()
 *
 * @param datetime
 * @returns the number of centuries since Julian Date 1900 as an integer for a particular datetime
 */
export const getNumberOfJulianCenturiesSinceEpoch1900 = (datetime: Date): number => {
  // Centuries Since January 1st 1900
  return getNumberOfJulianCenturiesSinceEpoch(datetime, J1900)
}
