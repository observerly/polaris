/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { getNumberOfJulianDaysSinceEpoch2000 } from '../epoch'

/*****************************************************************************************************************/

/**
 *
 * getSolarMeanTime()
 *
 * @param datetime - the datetime of the observer (in UTC)
 * @param longitude - is the longitude (west is negative, east is positive) in degrees of some observer on Earth
 * @returns the mean solar time, relative to some observer's longitude on Earth
 */
export const getSolarMeanTime = (datetime: Date, longitude: number) => {
  // the number of Julian days between J2000 (i.e., 1 January 2000 00:00:00 UTC) and the the datetime:
  const n = getNumberOfJulianDaysSinceEpoch2000(datetime)

  return n - longitude / 360
}

/*****************************************************************************************************************/
