/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { getJulianDate } from './getJulianDate'

/*****************************************************************************************************************/

/**
 *
 * getNumberOfJulianDaysSinceEpoch2000
 *
 * @param datetime
 * @returns the number of Julian days between J2000 (i.e., 1 January 2000 00:00:00 UTC) and the the datetime, rounded up the the nearest integer
 * @see http://astro.vaporia.com/start/jd.html
 */
export const getNumberOfJulianDaysSinceEpoch2000 = (datetime: Date) => {
  // Get the Julian date for the current datetime:
  const JD = getJulianDate(datetime)

  // Apply a correction for the the fractional Julian Day for leap seconds and terrestrial time (TT):
  const corr = 0.0008

  // Calculate the current Julian day:
  return Math.ceil(JD - 2451545.0 - corr)
}

/*****************************************************************************************************************/
