/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { convertDegreeToRadian } from '../utilities'

/*****************************************************************************************************************/

/**
 *
 * getAirmass()
 *
 * @description Gets the airmass of an object at a given altitude
 *
 * Airmass is a measure of the amount of air along the line of sight when observing a star
 * or other celestial source from below Earth's atmosphere. It is formulated
 * as the integral of air density along the light ray.
 *
 * @see https://en.wikipedia.org/wiki/Airmass
 * @see Pickering, K. A. (2002). "The Southern Limits of the Ancient Star Catalog" (PDF). DIO. 12 (1): 20–39.
 *
 * @param altitude - Altitude of the object in degrees
 * @returns {number} - airmass
 */
export const getAirmass = (altitude: number): number => {
  const h = convertDegreeToRadian(altitude)

  return 1 / Math.sin(h + 244 / (165 + 47 * Math.pow(h, 1.1)))
}
