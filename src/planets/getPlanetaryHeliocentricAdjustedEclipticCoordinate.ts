/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type HeliocentricEclipticCoordinate, type Planet } from '../types'

import { convertDegreeToRadian, convertRadianToDegree, getNormalisedDegree } from '../utilities'

import { getPlanetaryHeliocentricEclipticCoordinate } from '../'

/*****************************************************************************************************************/

export const getPlanetaryHeliocentricAdjustedEclipticCoordinate = (
  datetime: Date,
  planet: Planet
): HeliocentricEclipticCoordinate => {
  const { inclination: ι, eclipticLongitudeAtAscendingNode: Ω } = planet

  const { L, Λ, R } = getPlanetaryHeliocentricEclipticCoordinate(datetime, planet)

  const y = Math.sin(convertDegreeToRadian(L - Ω)) * Math.cos(convertDegreeToRadian(ι))

  const x = Math.cos(convertDegreeToRadian(L - Ω))

  return {
    L: getNormalisedDegree(Ω + convertRadianToDegree(Math.atan2(y, x))),
    Λ,
    R
  }
}
