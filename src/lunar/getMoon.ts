import type { Moon } from '../types'

import { getNumberOfJulianCenturiesSinceEpoch2000 } from '../epoch'

import { getEarthObliquity } from '../terra'

import {
  getLunarArgumentOfLatitude,
  getLunarIlluminatedFraction,
  getLunarMeanAnomaly,
  getLunarMeanElongation,
  getLunarMeanLongitude,
  getLunarPhaseAngle
} from '../lunar'

import { getSolarMeanAnomaly } from '../solar'

import { convertDegreeToRadian, convertRadianToDegree } from '../utilities'

/**
 *
 * getMoon()
 *
 * @param datetime
 * @returns various properties that represent the Moon at a given datetime (of type Moon)
 */
export const getMoon = (datetime: Date): Moon => {
  // First we need to calculate the Ephemeris Time:
  const T = getNumberOfJulianCenturiesSinceEpoch2000(datetime)

  // Ecliptic Longitude
  const L = convertDegreeToRadian(getLunarMeanLongitude(T))

  // Lunar Mean Anomaly
  const M = convertDegreeToRadian(getLunarMeanAnomaly(T))

  // Lunar Mean Elongation
  const D = convertDegreeToRadian(getLunarMeanElongation(T))

  // Solar Mean Distance
  const F = convertDegreeToRadian(getLunarArgumentOfLatitude(T))

  // Horizontal Longitude
  const l = L + convertDegreeToRadian(6.289 * Math.sin(M))

  // Horizontal Latitude
  const b = convertDegreeToRadian(5.128 * Math.sin(F))

  // Earth Obliquity
  const O = convertDegreeToRadian(getEarthObliquity())

  // Solar Mean Anomaly
  const S = convertDegreeToRadian(getSolarMeanAnomaly(T))

  // Calculate the Lunar Phase Angle:
  const θ = getLunarPhaseAngle(D, S, M)

  // Lunar Fractional Lunar Phase:
  let phase = 0.5 - θ * (1 / 360)

  phase -= Math.floor(phase)

  const k = getLunarIlluminatedFraction(θ)

  const ra = Math.atan2(Math.sin(l) * Math.cos(O) - Math.tan(b) * Math.sin(O), Math.cos(l))

  const dec = Math.asin(Math.sin(b) * Math.cos(O) + Math.cos(b) * Math.sin(O) * Math.sin(l))

  return {
    ra: convertRadianToDegree(ra),
    dec: convertRadianToDegree(dec),
    illumination: k,
    inclination: 5.145,
    obliquity: 6.687,
    phase: phase,
    siderealMonth: 27.321661,
    synodicMonth: 29.530588
  }
}
