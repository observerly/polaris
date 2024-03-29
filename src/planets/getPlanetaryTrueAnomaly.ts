/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { getNormalisedDegree } from '../utilities'

/*****************************************************************************************************************/

export const getPlanetaryTrueAnomaly = (Mp: number, Ep: number) => {
  return getNormalisedDegree(Mp + Ep)
}

/*****************************************************************************************************************/
