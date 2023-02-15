/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { ECLIPTIC_OBLIQUITY_J2000 } from '../astrometry/constants'

import { convertDegreeToRadian, convertRadianToDegree } from '../utilities'

/*****************************************************************************************************************/

/**
 *
 * getSolarDeclination()
 *
 * @param λ - the ecliptic longitude of the Sun (in degrees)
 * @description The declination of the Sun, δ☉, is the angle between the rays of the Sun and the plane of the Earth's equator.
 * @returns the declination of the Sun (in degrees)
 * @see https://gml.noaa.gov/grad/solcalc/glossary.html#solardeclination
 */
export const getSolarDeclination = (λ: number): number => {
  return convertRadianToDegree(
    Math.asin(
      Math.sin(convertDegreeToRadian(λ)) * Math.sin(convertDegreeToRadian(ECLIPTIC_OBLIQUITY_J2000))
    )
  )
}

/*****************************************************************************************************************/
