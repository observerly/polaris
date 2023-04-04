/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { convertDegreeToRadian, getNormalisedDegree } from '../utilities'

/*****************************************************************************************************************/

/**
 *
 * @param Mp - the mean anomaly of the planet
 * @param ep - the eccentricity of the planet's orbit
 * @returns the equation of the center of the planet, C
 */
export const getPlanetaryEquationOfCenter = (Mp: number, ep: number) => {
  return getNormalisedDegree((360 / Math.PI) * (ep * Math.sin(convertDegreeToRadian(Mp))))
}

/*****************************************************************************************************************/
