import { getNormalisedDegree } from '../'

/**
 * getSolarMeanObliquity()
 *
 * @param T (of type number) the Ephemeris Time or the number of centuries since J2000 epoch
 * @returns the mean obliquity of the solar orbit.
 */

export const getSolarMeanObliquity = (T: number): number => {
  return getNormalisedDegree(
    23.4392917 -
      0.0130041667 * T -
      0.00000016667 * Math.pow(T, 2) +
      0.0000005027778 * Math.pow(T, 3)
  )
}
