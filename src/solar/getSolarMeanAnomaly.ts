import { getNormalisedDegree } from '../'

/**
 * getSolarMeanAnomaly()
 *
 * @see EQ.47.3 p.338 of Meeus, Jean. 1991. Astronomical algorithms. Richmond, Va: Willmann-Bell.
 *
 * @params T (of type number) the Ephemeris Time or the number of centuries since J2000 epoch
 * @returns the non-uniform or anomalous apparent motion of the Sun and planets along the plane of the ecliptic.
 */
export const getSolarMeanAnomaly = (T: number): number => {
  return getNormalisedDegree(
    357.5291092 + 35999.0502909 * T - 0.0001536 * Math.pow(T, 2) + Math.pow(T, 3) / 24490000
  )
}
