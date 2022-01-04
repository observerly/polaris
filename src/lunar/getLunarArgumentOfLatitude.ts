import { getNormalisedDegree } from '../'

/**
 *
 * getLunarArgumentOfLatitude()
 *
 * @see EQ.47.5 p.338 of Meeus, Jean. 1991. Astronomical algorithms. Richmond, Va: Willmann-Bell.
 *
 * @param T (of type number) the Ephemeris Time or the number of centuries since J2000 epoch
 * @returns the Lunar argument of latitude
 */
export const getLunarArgumentOfLatitude = (T: number): number => {
  return getNormalisedDegree(
    93.272095 +
      483202.0175233 * T -
      0.0036539 * Math.pow(T, 2) +
      Math.pow(T, 3) / 3526000 -
      Math.pow(T, 4) / 863310000
  )
}
