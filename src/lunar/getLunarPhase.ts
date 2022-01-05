import { getNumberOfJulianCenturiesSinceEpoch2000 } from '../epoch'

import { getLunarMeanAnomaly, getLunarMeanElongation, getLunarPhaseAngle } from '../lunar'

import { getSolarMeanAnomaly } from '../solar'

import { convertDegreeToRadian } from '../utilities'

/**
 *
 * getLunarPhase()
 *
 * @param datetime
 * @returns the lunar phase for the datetime provided
 */
export const getLunarPhase = (datetime: Date): number => {
  // First we need to calculate the Ephemeris Time:
  const T = getNumberOfJulianCenturiesSinceEpoch2000(datetime)

  const D = convertDegreeToRadian(getLunarMeanElongation(T))

  const S = convertDegreeToRadian(getSolarMeanAnomaly(T))

  const M = convertDegreeToRadian(getLunarMeanAnomaly(T))

  // Calculate the Lunar Phase Angle:
  const θ = getLunarPhaseAngle(D, S, M)

  // Lunar Fractional Lunar Phase:
  let phase = 0.5 - θ * (1 / 360)

  phase -= Math.floor(phase)

  return phase
}
