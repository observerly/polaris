import { getNormalisedDegree } from '../'

/**
 * getLunarMeanAnomaly()
 *
 * @param T (of type number) the Ephemeris Time or the number of centuries since J2000 epoch
 * @returns the Lunar anomaly.
 */
export const getLunarMeanAnomaly = (T: number): number => {
  return getNormalisedDegree(
    134.9633964 +
      477198.8675055 * T +
      0.0087414 * Math.pow(T, 2) +
      Math.pow(T, 3) / 69699 -
      Math.pow(T, 4) / 14712000
  )
}
