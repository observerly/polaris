/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type EquatorialCoordinate } from '../types'

import { getJulianDate } from '../epoch'

import { convertDegreeToRadian } from '../utilities'

/*****************************************************************************************************************/

/**
 *
 * Corrects the equatorial coordinates of a target for the precession of the equinoxes.
 *
 * @param datetime The date to correct the equatorial coordinates for.
 * @param target The equatorial J2000 coordinates of the target.
 * @returns The corrected equatorial coordinates of the target.
 *
 */
export const getCorrectionToEquatorialForPrecessionOfEquinoxes = (
  datetime: Date,
  target: EquatorialCoordinate
): EquatorialCoordinate => {
  const { ra, dec } = target

  // Get the Julian Date:
  const JD = getJulianDate(datetime)

  // Get the difference in fractional Julian centuries between the target date and J2000.0
  const T = (JD - 2451545.0) / 36525

  // Interpolate the precession in right ascension (in seconds*)
  const M = 3.07234 + 0.00186 * T

  // Interpolate the precession in declination (in arcseconds)
  const Nd = 20.0468 - 0.0085 * T

  // Calculate the precession correction in right ascension (in seconds*)
  const Δra =
    M + (Nd / 15) * Math.sin(convertDegreeToRadian(ra)) * Math.tan(convertDegreeToRadian(dec)) * T

  // Calculate the precession correction in declination (in arcseconds)
  const Δdec = Nd * Math.cos(convertDegreeToRadian(ra)) * T

  return { ra: Δra / (3600 / 15), dec: Δdec / 3600 }
}

/*****************************************************************************************************************/
