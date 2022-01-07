import { getNormalisedDegree } from '../'

/**
 *
 * getEclipticObliquity()
 *
 * @see EQ22.2 p.147 of Meeus, Jean. 1991. Astronomical algorithms. Richmond, Va: Willmann-Bell.
 *
 * @note This is adopted by the International Astronomical Union (IAU), however the accuracy
 * is NOT satisfactory over a long period of time, the error in ε0 reaches 1" over a period
 * of 2000 years and about 10" over a period of 4000 years.
 *
 * @param T (of type number) the Ephemeris Time or the number of centuries since J2000 epoch
 * @returns the obliquity of the ecliptic for the given ephemeris time
 */
export const getEclipticObliquity = (T: number): number => {
  return getNormalisedDegree(
    23.4392917 -
      0.0130041667 * T -
      0.00000016667 * Math.pow(T, 2) +
      0.0000005027778 * Math.pow(T, 3)
  )
}
