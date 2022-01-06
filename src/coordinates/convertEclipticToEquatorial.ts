import type { EquatorialCoordinate, GeocentricEclipticCoordinate } from '../types'

import { getEclipticObliquityEpoch2000 } from '../astrometry'

import { convertRadianToDegree, convertDegreeToRadian, getNormalisedDegree } from '../utilities'

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
