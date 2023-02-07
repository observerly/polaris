/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { J2000 } from './constants'

import { getJulianDate } from './getJulianDate'

/*****************************************************************************************************************/

/**
 *
 * getUniversalTime()
 *
 * @description Get the Universal Time (UT) for a given datetime and Greenwich Sidereal Time (GST).
 *
 * @param datetime - the datetime to convert the GST for
 * @param GST - the Greenwhich Sidereal Time to convert
 * @returns the Universal Time (UT).
 * @returns { Date }
 */
export const getUniversalTime = (datetime: Date, GST: number): Date => {
  // Get the date for 0h UT on the day in question:
  const d_H0 = new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate(), 0, 0, 0, 0)

  // Get the Julian Date for 0h UT on the day in question:
  const JD_0 = getJulianDate(d_H0)

  const S = JD_0 - J2000

  const T = S / 36525.0

  let T_0 = (6.697374558 + 2400.051336 * T + 0.000025862 * Math.pow(T, 2)) % 24

  if (T_0 < 0) T_0 += 24

  let A = GST - T_0

  if (A < 0) A += 24

  const UT = (1.002737909 - 1) * A

  return new Date(datetime.getTime() + UT * 60 * 60 * 1000)
}

/*****************************************************************************************************************/
