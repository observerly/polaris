/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { convertDegreeToRadian } from '../utilities'

/*****************************************************************************************************************/

/**
 *
 * getSolarTransitJulianDate()
 *
 * @param J - the Ephemeris time or the number of centuries since J2000 epoch
 * @param M - the mean solar anomaly for the Ephemeris time or the number of centuries since J2000 epoch
 * @param λ - the ecliptic longitude of the Sun (in degrees)
 * @returns the Julian date for the local true solar transit (or solar noon).
 */
export const getSolarTransitJulianDate = (J: number, M: number, λ: number): number => {
  return (
    2451545.0 +
    J +
    0.0053 * Math.sin(convertDegreeToRadian(M)) -
    0.0069 * Math.sin(convertDegreeToRadian(2 * λ))
  )
}

/*****************************************************************************************************************/
