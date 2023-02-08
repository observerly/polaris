/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { J1900 } from './constants'

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
export const getUniversalTime = (datetime: Date, GST: number): number => {
  const currentYear = datetime.getFullYear()

  // Get the Julian Date at 0h:
  const JD = getJulianDate(
    new Date(currentYear, datetime.getMonth(), datetime.getDate(), 0, 0, 0, 0)
  )

  // Get the Julian Date at 0h on 1st January for the current year:
  const JD_0 = getJulianDate(new Date(currentYear, 1, 0, 0, 0, 0, 0))

  // Get the number of days since 1st January for the current year:
  const days = JD - JD_0

  // Get the number of Julian Centuries since 1900:
  const T = (JD_0 - J1900) / 36525

  const R = 6.6460656 + 2400.051262 * T + 0.00002581 * Math.pow(T, 2)

  const B = 24 - R + 24 * (currentYear - 1900)

  let T_0 = 0.0657098 * days - B

  if (T_0 < 0) T_0 += 24

  if (T_0 > 24) T_0 -= 24

  let A = GST - T_0

  if (A < 0) A += 24

  return 0.99727 * A
}

/*****************************************************************************************************************/
