/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/polaris
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { type HeliocentricEclipticCoordinate, type Planet } from '../types'

import { convertDegreeToRadian, convertRadianToDegree } from '../utilities'

import { getPlanetaryMeanAnomaly, getPlanetaryEquationOfCenter, getPlanetaryTrueAnomaly } from '../'

/*****************************************************************************************************************/

export const getPlanetaryHeliocentricEclipticCoordinate = (
  datetime: Date,
  planet: Planet
): HeliocentricEclipticCoordinate => {
  const {
    period: T,
    eccentricity: e,
    inclination: ι,
    semiMajorAxis: a,
    eclipticLongitudeAtTheEpoch: ε,
    eclipticLongitudeAtPerihelion: ϖ,
    eclipticLongitudeAtAscendingNode: Ω
  } = planet

  const M = getPlanetaryMeanAnomaly(datetime, T, ε, ϖ)

  const C = getPlanetaryEquationOfCenter(M, e)

  const ν = getPlanetaryTrueAnomaly(M, C)

  const L = ν + ϖ

  const Λ = convertRadianToDegree(
    Math.asin(Math.sin(convertDegreeToRadian(ι)) * Math.sin(convertDegreeToRadian(L - Ω)))
  )

  const R = (a * (1 - e * e)) / (1 + e * Math.cos(convertDegreeToRadian(ν)))

  return {
    L,
    Λ,
    R
  }
}
