/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type GeocentricEclipticCoordinate, type Planet } from '../types'

import { convertDegreeToRadian, convertRadianToDegree, getNormalisedDegree } from '../utilities'

import { getPlanetaryHeliocentricAdjustedEclipticCoordinate, Earth } from '../'

/*****************************************************************************************************************/

export const getPlanetaryEclipticCoordinate = (
  datetime: Date,
  planet: Planet
): GeocentricEclipticCoordinate => {
  const {
    L: Lp,
    Λ: Λp,
    R: Rp
  } = getPlanetaryHeliocentricAdjustedEclipticCoordinate(datetime, planet)

  const { L: Le, R: Re } = getPlanetaryHeliocentricAdjustedEclipticCoordinate(datetime, Earth)

  let λ = 0

  if (planet.inferior) {
    λ = getNormalisedDegree(
      180 +
        Le +
        convertRadianToDegree(
          Math.atan2(
            Rp * Math.cos(convertDegreeToRadian(Λp)) * Math.sin(convertDegreeToRadian(Le - Lp)),
            Re - Rp * Math.cos(convertDegreeToRadian(Le - Lp)) * Math.cos(convertDegreeToRadian(Λp))
          )
        )
    )
  } else {
    λ = getNormalisedDegree(
      Lp +
        convertRadianToDegree(
          Math.atan2(
            Re * Math.sin(convertDegreeToRadian(Lp - Le)),
            Rp * Math.cos(convertDegreeToRadian(Λp)) - Re * Math.cos(convertDegreeToRadian(Le - Lp))
          )
        )
    )
  }

  const β = getNormalisedDegree(
    convertRadianToDegree(
      Math.atan2(
        Rp *
          Math.cos(convertDegreeToRadian(Λp)) *
          Math.tan(convertDegreeToRadian(Λp)) *
          Math.sin(convertDegreeToRadian(λ - Lp)),
        Re * Math.sin(convertDegreeToRadian(Lp - Le))
      )
    )
  )

  const Λ = 0

  return {
    λ,
    β,
    Λ
  }
}
