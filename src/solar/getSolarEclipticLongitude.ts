/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { getNormalisedDegree } from '../utilities'

/*****************************************************************************************************************/

/**
 *
 * getSolarEclipticLongitude()
 *
 * @param M - the mean solar anomaly for the Ephemeris time or the number of centuries since J2000 epoch
 * @param C - the equation of center for the Sun
 * @returns the apparent Solar ecliptic longitude (in degrees)
 */
export const getSolarEclipticLongitude = (M: number, C: number): number => {
  return getNormalisedDegree(M + C + 180 + 102.9372)
}

/*****************************************************************************************************************/
