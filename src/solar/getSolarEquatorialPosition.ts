import type { EquatorialCoordinate } from '../types'

import { getEclipticObliquity, getEclipticObliquityCorrected } from '../astrometry'

import { getNumberOfJulianCenturiesSinceEpoch2000 } from '../epoch'

import {
  getSolarApparentLongitude,
  getSolarEquationOfCenter,
  getSolarGeometricMeanLongitude,
  getSolarMeanAnomaly,
  getSolarNutation,
  getSolarTrueGeometricLongitude
} from '../solar'

import { convertDegreeToRadian, convertRadianToDegree, getNormalisedDegree } from '../utilities'

/**
 * getSolarEquatorialPosition()
 *
 * @param datetime Date
 * @returns returns the equatorial position (of type EquatorialCoordinate) of the Sun relative to the fundamental plane
 * formed by projection of Earth's equator onto the celestial sphere.
 */
export const getSolarEquatorialPosition = (datetime: Date): EquatorialCoordinate => {
  // First we need to calculate the Ephemeris Time:
  const T = getNumberOfJulianCenturiesSinceEpoch2000(datetime)

  const O = getEclipticObliquity(T)

  // Correction for nutation (a rocking, swaying, or nodding motion in the
  // axis of rotation of a largely axially symmetric object) and aberration
  // (an apparent motion of celestial objects about their true positions,
  // dependent on the velocity of the observer).
  const Ω = getSolarNutation(T)

  const M = getSolarMeanAnomaly(T)

  const C = getSolarEquationOfCenter(T, M)

  const L = getSolarGeometricMeanLongitude(T)

  const l = getSolarTrueGeometricLongitude(L, C)

  // Obtain the correction to the obliquity of the ecliptic as
  // we are obtaining the apparent position of the Sun:
  const ε = convertDegreeToRadian(getEclipticObliquityCorrected(O, Ω))

  const λ = convertDegreeToRadian(getSolarApparentLongitude(l, Ω))

  const ra = Math.atan2(Math.cos(ε) * Math.sin(λ), Math.cos(λ))

  const dec = Math.asin(Math.sin(ε) * Math.sin(λ))

  return {
    ra: getNormalisedDegree(convertRadianToDegree(ra)),
    dec: convertRadianToDegree(dec)
  }
}
