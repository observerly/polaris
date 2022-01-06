import type { EquatorialCoordinate, GeocentricEclipticCoordinate } from '../types'

import { getEclipticObliquityEpoch2000 } from '../astrometry'

import { convertRadianToDegree, convertDegreeToRadian, getNormalisedDegree } from '../utilities'

/**
 *
 * convertEclipticToEquatorial()
 *
 * @see EQ13.3 & EQ13.4 p.93 of Meeus, Jean. 1991. Astronomical algorithms. Richmond, Va: Willmann-Bell.
 *
 * @param geocentricEclipticCoordinate of type GeocentricEclipticCoordinate { λ, β, Λ }
 * @returns the convert equatorial coordinate { ra, dec }
 */
export const convertEclipticToEquatorial = (
  coordinate: GeocentricEclipticCoordinate
): EquatorialCoordinate => {
  // Deconstruct the Geocentric Ecliptic Coordinates
  let { λ, β } = coordinate

  const ɛ = convertDegreeToRadian(getEclipticObliquityEpoch2000())

  λ = convertDegreeToRadian(λ)

  β = convertDegreeToRadian(β)

  const ra = Math.atan((Math.sin(λ) * Math.cos(ɛ) - Math.tan(β) * Math.sin(ɛ)) / Math.cos(λ))

  const dec = Math.asin(Math.sin(β) * Math.cos(ɛ) + Math.cos(β) * Math.sin(ɛ) * Math.sin(λ))

  return {
    ra: getNormalisedDegree(convertRadianToDegree(ra)),
    dec: convertRadianToDegree(dec)
  }
}
