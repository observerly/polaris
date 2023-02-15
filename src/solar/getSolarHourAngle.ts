/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { convertDegreeToRadian, convertRadianToDegree } from '../utilities'

/*****************************************************************************************************************/

/**
 *
 * getSolarHourAngle()
 *
 * Observing the Sun from Earth, the solar hour angle is an expression of time, expressed in angular measurement,
 * usually degrees, from solar noon. At solar noon the hour angle is zero degrees, with the time before solar noon
 * expressed as negative degrees, and the local time after solar noon expressed as positive degrees.
 *
 * @param δ - the ecliptic longitude of the Sun (in degrees)
 * @param degreesBelowHorizon - the degrees below the horizon to correct for
 * @param latitude - is the latitude (south is negative, north is positive) in degrees of some observer on Earth
 * @param elevation
 * @returns the solar hour angle for a given solar declination, of some observer on Earth
 */
export const getSolarHourAngle = (
  δ: number,
  degreesBelowHorizon: number,
  latitude: number,
  elevation: number
): number => {
  // observations on a sea horizon needing an elevation-of-observer correction
  // (corrects for both apparent dip and terrestrial refraction):
  var corr = -degreesBelowHorizon + (-2.076 * Math.sqrt(elevation) * 1) / 60

  return convertRadianToDegree(
    Math.acos(
      ((Math.sin(convertDegreeToRadian(-0.83 - corr)) -
        Math.sin(convertDegreeToRadian(latitude)) * Math.sin(convertDegreeToRadian(δ))) /
        Math.cos(convertDegreeToRadian(latitude))) *
        Math.cos(convertDegreeToRadian(δ))
    )
  )
}
