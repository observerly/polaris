import { getNormalisedDegree } from '../'

/**
 *
 * getSolarNutation()
 *
 * @see p.164 of Meeus, Jean. 1991. Astronomical algorithms. Richmond, Va: Willmann-Bell.
 *
 * @param T (of type number) the Ephemeris Time or the number of centuries since J2000 epoch
 * @returns the solar nutation as a degree
 */
export const getSolarNutation = (T: number): number => {
  return getNormalisedDegree(125.04 - 1934.136 * T)
}
