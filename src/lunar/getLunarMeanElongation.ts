import { getNormalisedDegree } from '../'

/**
 *
 * getLunarMeanElongation ()
 *
 * @see EQ.47.2 p.338 of Meeus, Jean. 1991. Astronomical algorithms. Richmond, Va: Willmann-Bell.
 *
 * @param T (of type number) the Ephemeris Time or the number of centuries since J2000 epoch
 * @returns the mean Lunar elongation
 */
export const getLunarMeanElongation = (T: number): number => {
  return getNormalisedDegree(
    297.8501291 +
      445267.1114034 * T -
      0.0018819 * Math.pow(T, 2) +
      Math.pow(T, 3) / 545868 -
      Math.pow(T, 4) / 113065000
  )
}
