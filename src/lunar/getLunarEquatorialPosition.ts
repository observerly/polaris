import type { EquatorialCoordinate } from '../types'

import { getNumberOfJulianCenturiesSinceEpoch2000 } from '../epoch'

import { getEarthObliquity } from '../terra'

import { getLunarArgumentOfLatitude, getLunarMeanAnomaly, getLunarMeanLongitude } from '../lunar'

import { convertDegreeToRadian, convertRadianToDegree } from '../utilities'
/**
 * getLunarEquatorialPosition()
 *
 * @param datetime Date
 * @returns the equatorial position (of type EquatorialCoordinate) of the Moon relative to the fundamental plane
 * formed by projection of Earth's equator onto the celestial sphere.
 */
export const getLunarEquatorialPosition = (datetime: Date): EquatorialCoordinate => {
  // First we need to calculate the Ephemeris Time:
  const T = getNumberOfJulianCenturiesSinceEpoch2000(datetime)

  // Ecliptic Longitude
  const L = convertDegreeToRadian(getLunarMeanLongitude(T))

  // Lunar Mean Anomaly
  const M = convertDegreeToRadian(getLunarMeanAnomaly(T))

  // Solar Mean Distance
  const F = convertDegreeToRadian(getLunarArgumentOfLatitude(T))

  // Horizontal Longitude
  const l = L + convertDegreeToRadian(6.289 * Math.sin(M))

  // Horizontal Latitude
  const b = convertDegreeToRadian(5.128 * Math.sin(F))

  const O = convertDegreeToRadian(getEarthObliquity())

  const ra = Math.atan2(Math.sin(l) * Math.cos(O) - Math.tan(b) * Math.sin(O), Math.cos(l))

  const dec = Math.asin(Math.sin(b) * Math.cos(O) + Math.cos(b) * Math.sin(O) * Math.sin(l))

  return {
    ra: convertRadianToDegree(ra),
    dec: convertRadianToDegree(dec)
  }
}
