import { getNormalisedDegree } from '../'

/**
 *
 * getLunarMeanLongitude ()
 *
 * @see EQ.47.1 p.338 of Meeus, Jean. 1991. Astronomical algorithms. Richmond, Va: Willmann-Bell.
 *
 * @param T (of type number) the Ephemeris Time or the number of centuries since J2000 epoch
 * @returns the mean Lunar longitude
 */
export const getLunarMeanLongitude = (T: number): number => {
  return getNormalisedDegree(
    218.3164477 +
      481267.88123421 * T -
      0.0015786 * Math.pow(T, 2) +
      Math.pow(T, 3) / 538841 -
      Math.pow(T, 4) / 65194000
  )
}
