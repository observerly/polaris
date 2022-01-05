import type { GeocentricEclipticCoordinate } from '../types'

import { getNumberOfJulianCenturiesSinceEpoch2000 } from '../epoch'

import {
  getLunarArgumentOfLatitude,
  getLunarMeanAnomaly,
  getLunarMeanElongation,
  getLunarMeanLongitude,
  MEEUS_TABLE_47A,
  MEEUS_TABLE_47B
} from '../lunar'

import { getSolarMeanAnomaly } from '../solar'

import { getEarthEccentricity } from '../terra'

import { convertDegreeToRadian, convertRadianToDegree, getNormalisedDegree } from '../utilities'

/**
 *
 * getLunarEclipticPosition()
 *
 * @see Chapter 47. p.337 of Meeus, Jean. 1991. Astronomical algorithms. Richmond, Va: Willmann-Bell.
 *
 * @param datetime Date
 * @returns the geocentric ecliptic coordinate (β, λ) and w of the moon for the given datetime
 */
export const getLunarEclipticPosition = (datetime: Date): GeocentricEclipticCoordinate => {
  // First we need to calculate the Ephemeris Time:
  const T = getNumberOfJulianCenturiesSinceEpoch2000(datetime)

  const L = convertDegreeToRadian(getLunarMeanLongitude(T))

  const D = convertDegreeToRadian(getLunarMeanElongation(T))

  const S = convertDegreeToRadian(getSolarMeanAnomaly(T))

  const M = convertDegreeToRadian(getLunarMeanAnomaly(T))

  const F = convertDegreeToRadian(getLunarArgumentOfLatitude(T))

  const E = convertDegreeToRadian(getEarthEccentricity(T))

  const A1 = convertDegreeToRadian(getNormalisedDegree(119.75 + 131.849 * T))

  const A2 = convertDegreeToRadian(getNormalisedDegree(53.09 + 479264.29 * T))

  const A3 = convertDegreeToRadian(getNormalisedDegree(313.45 + 481266.484 * T))

  const E2 = Math.pow(E, 2)

  let Σl = 3958 * Math.sin(A1) + 1962 * Math.sin(L - F) + 318 * Math.sin(A2)

  let Σr = 0.0

  let Σb =
    -2235 * Math.sin(L) +
    382 * Math.sin(A3) +
    175 * Math.sin(A1 - F) +
    175 * Math.sin(A1 + F) +
    127 * Math.sin(L - M) -
    115 * Math.sin(L + M)

  MEEUS_TABLE_47A.forEach(row => {
    const A = D * row.D + S * row.S + M * row.M + F * row.F

    const sinA = Math.sin(A)
    const cosA = Math.cos(A)

    switch (row.S) {
      case 0:
        Σl += row.Σl * sinA
        Σr += row.Σr * cosA
      case -1:
      case 1:
        Σl += row.Σl * sinA * E
        Σr += row.Σr * cosA * E
      case -2:
      case 2:
        Σl += row.Σl * sinA * E2
        Σr += row.Σr * cosA * E2
    }
  })

  MEEUS_TABLE_47B.forEach(row => {
    const B = D * row.D + S * row.S + M * row.M + F * row.F

    const sinB = Math.sin(B)

    switch (row.S) {
      case 0:
        Σb += row.Σb * sinB
      case -1:
      case 1:
        Σb += row.Σb * sinB * E
      case -2:
      case 2:
        Σb += row.Σb * sinB * E2
    }
  })

  const λ = convertRadianToDegree(L) + Σl / 1000000

  const β = Σb / 1000000

  const Λ = (385000.56 + Σr / 1000) * 1000

  return {
    λ: λ,
    β: β,
    Λ: Λ
  }
}
